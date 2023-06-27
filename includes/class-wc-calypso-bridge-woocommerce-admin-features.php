<?php
/**
 * Control wc-admin features in the eCommerce Plan.
 *
 * @package WC_Calypso_Bridge/Classes
 * @since   1.0.0
 * @version x.x.x
 */

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\PageController;
use Automattic\WooCommerce\Utilities\OrderUtil;

/**
 * WC EComm Bridge
 */
class WC_Calypso_Bridge_WooCommerce_Admin_Features {

	/**
	 * Class Instance.
	 *
	 * @var WC_Calypso_Bridge_WooCommerce_Admin_Features instance
	 */
	protected static $instance = null;

	/**
	 * Get class instance
	 */
	public static function get_instance() {
		if ( ! static::$instance ) {
			static::$instance = new static();
		}

		return static::$instance;
	}

	/**
	 * Constructor.
	 */
	public function __construct() {

		// Only in Woo Express plans.
		if ( ! wc_calypso_bridge_has_ecommerce_features() ) {
			return;
		}

		add_action( 'plugins_loaded', array( $this, 'initialize' ), 2 );
	}

	/**
	 * Initialize.
	 */
	public function initialize() {

		add_filter( 'wc_admin_get_feature_config', array( $this, 'maybe_remove_devdocs_menu_item' ) );
		add_filter( 'woocommerce_admin_features', array( $this, 'filter_wc_admin_enabled_features' ) );
		add_filter( 'woocommerce_admin_get_feature_config', array( $this, 'filter_woocommerce_admin_features' ), PHP_INT_MAX );

		/*
		 * Hide the features under 'Advanced > Features' but let users disable our commerce-optimized menu.
		 */
		add_filter( 'woocommerce_get_settings_advanced', array( $this, 'filter_woocommerce_settings_features' ), PHP_INT_MAX, 2 );

		if ( wc_calypso_bridge_is_woo_express_plan() ) {

			add_filter( 'woocommerce_settings_tabs_array', array( $this, 'filter_woocommerce_settings_pages_order' ), PHP_INT_MAX );
			add_filter( 'option_woocommerce_analytics_enabled', function( $value ) {
				return 'yes';
			}, PHP_INT_MAX );
		}

		/*
		 * Refresh the page to get the menu to reload when saving the Settings under 'Advanced > Features'.
		 */
		add_action( 'woocommerce_settings_saved', function() {
			global $current_section, $current_tab;
			if ( 'advanced' === $current_tab and 'features' === $current_section && ! empty( $_SERVER['REQUEST_URI'] ) ) {
				wp_redirect( esc_url_raw( wp_unslash( $_SERVER['REQUEST_URI'] ) ) );
				exit;
			}

		}, 100 );

		/*
		 * Hide WC Admin's activity panel in all pages except Home.
		 */
		add_filter( 'admin_body_class', array( $this, 'filter_woocommerce_body_classes' ) );
		add_action( 'admin_init', array( $this, 'add_custom_activity_panels_styles' ) );
		add_action( 'admin_footer', array( $this, 'filter_woocommerce_body_classes_js' ) );

		/**
		 * Disable WooCommerce Navigation.
		 *
		 * @since   1.9.4
		 *
		 * @param mixed $pre Fixed to false.
		 * @return string no.
		 */
		add_filter( 'pre_option_woocommerce_navigation_enabled', static function ( $pre ) {
			return 'no';
		}, PHP_INT_MAX );
	}

	/**
	 * Remove the Dev Docs menu item unless allowed by the `wc_calypso_bridge_development_mode` filter.
	 *
	 * @param array $features WooCommerce Admin enabled features list.
	 */
	public function maybe_remove_devdocs_menu_item( $features ) {
		if ( ! apply_filters( 'wc_calypso_bridge_development_mode', false ) ) {
			unset( $features['devdocs'] );
		}

		return $features;
	}

	/**
	 * Set feature flags for WooCommerce Admin front end at run time.
	 *
	 * @param array $features Array of wc-calypso-bridge features that are enabled by default for the current env.
	 *
	 * @return array
	 */
	public function filter_wc_admin_enabled_features( $features ) {
		if ( ! in_array( 'remote-inbox-notifications', $features, true ) ) {
			$features[] = 'remote-inbox-notifications';
		}

		return $features;
	}

	/**
	 * Enable/disable features for WooCommerce Admin.
	 *
	 * @param array $features Array containing all wc-calypso-bridge features (enabled and disabled).
	 *
	 * @return array
	 */
	public function filter_woocommerce_admin_features( $features ) {

		// Disable and revert the navigation experiment.
		if ( isset( $features['navigation'] ) ) {
			$features['navigation'] = false;
		}

		// Disable the new product management experiment.
		if ( isset( $features['new-product-management-experience'] ) ) {
			$features['new-product-management-experience'] = false;
		}

		// Keep Woo Analytics enabled.
		if ( ! isset( $features['analytics'] ) ) {
			$features['analytics'] = true;
		}

		return $features;
	}

	/**
	 * Customize the 'Advanced > Features' Settings tab contents.
	 *
	 * @param array $settings Array containing all advanced feature settings.
	 * @param string $current_section Current settings section.
	 *
	 * @return array
	 */
	public function filter_woocommerce_settings_features( $settings, $current_section ) {

		if ( 'features' !== $current_section ) {
			return $settings;
		}

		array_splice( $settings, 1, 0,
			array(
				array(
					'title'   => __( 'Navigation', 'wc-calypso-bridge' ),
					'desc'    => __( 'A custom navigation experience that is optimized for selling.', 'wc-calypso-bridge' ),
					'type'    => 'checkbox',
					'id'      => 'wooexpress_navigation_enabled',
					'default' => 'yes'
				)
        	)
		);

		if ( wc_calypso_bridge_is_woo_express_plan() ) {

			$hpos_enabled = OrderUtil::custom_orders_table_usage_is_enabled();
			$whitelist    = array( 'features_options', 'wooexpress_navigation_enabled' );

			if ( $hpos_enabled ) {
				$whitelist[] = 'experimental_features_options';
			}

			foreach ( $settings as $setting_id => $setting_data ) {

				if ( ! is_numeric( $setting_id ) && ! in_array( $setting_id, $whitelist ) ) {
					unset( $settings[ $setting_id ] );
				}

				if ( is_array( $setting_data ) && isset( $setting_data['id'] ) && ! in_array( $setting_data['id'], $whitelist ) ) {

					if ( 'woocommerce_feature_custom_order_tables_enabled' === $setting_data['id'] && $hpos_enabled ) {
						// If HPOS is enabled, show the option until it's disabled.
						continue;
					}

					unset( $settings[ $setting_id ] );
				}
			}

		} else {

			foreach ( $settings as $setting_id => $setting_data ) {
				if ( is_array( $setting_data ) && isset( $setting_data['id'] ) && 'woocommerce_navigation_enabled' === $setting_data['id'] ) {
					unset( $settings[ $setting_id ] );
				}
			}
		}

		return $settings;
	}

	/**
	 * Move the 'Advanced' Settings tab to the end.
	 *
	 * @param array $pages Array of tabs.
	 *
	 * @return array
	 */
	public function filter_woocommerce_settings_pages_order( $pages ) {
		foreach ( $pages as $page_id => $page ) {
			if ( 'advanced' === $page_id ) {
				unset( $pages[ $page_id ] );
				$pages[ $page_id ] = $page;
				break;
			}
		}
		return $pages;
	}



	/**
	 * Add is-woocommerce-home body class.
	 *
	 * @since   1.9.5
	 *
	 * @param string $classes Body classes.
	 * @return string
	 */
	public function filter_woocommerce_body_classes( $classes ) {

		$page = PageController::get_instance()->get_current_page();

		if ( $page && 'woocommerce-home' === $page['id'] ) {
			$classes .= ' is-woocommerce-home';
		}

		return $classes;
	}

	/**
	 * Add is-woocommerce-home body class when url changes between wc-admin pages.
	 *
	 * @since   1.9.9
	 *
	 * @return void
	 */
	public function filter_woocommerce_body_classes_js() {
		?>
		<script>
			( function() {

				// Bail out early.
				if ( ! document.body.classList.contains( 'woocommerce_page_wc-admin' ) ) {
					return;
				}

				let url = location.href;
				document.body.addEventListener( 'click', ( event ) => {

					requestAnimationFrame( () => {
						// URL has changed - let the magic happen.
						if ( url !== location.href ) {
							url          = location.href;
							const params = ( new URL( location.href ) ).searchParams;

							if (
								'wc-admin' === params.get( 'page' )
								&& null === params.get( 'path' )
							) {
								document.body.classList.add( 'is-woocommerce-home' );
							} else {
								document.body.classList.remove( 'is-woocommerce-home' );
							}
						}
					} );

				}, true );
			} )();
		</script>
	<?php }

	/**
	 * Add custom CSS to hide activity panels in all WooCommerce pages other than Home.
	 * Note that this is not possible via the 'woocommerce_admin_features' filter, as we don't have access to the screen id at that point.
	 *
	 * @since   1.9.5
	 *
	 * @return void
	 */
	public function add_custom_activity_panels_styles() {

		wp_register_style( 'activity-panels-hide', false );
		wp_enqueue_style( 'activity-panels-hide' );

		$css = 'body:not(.is-woocommerce-home) #wpbody { margin-top: 0 !important; } body:not(.is-woocommerce-home) .woocommerce-layout__header { display:none; } body.is-woocommerce-home #screen-meta-links { display: none; } body.is-woocommerce-home .woocommerce-layout__header-heading, body.is-woocommerce-home .woocommerce-task-progress-header__title, .woocommerce-layout__inbox-title span { font-size: 20px; font-weight: 400; } body.is-woocommerce-home .woocommerce-layout__inbox-panel-header { padding: 0; } .woocommerce-layout__inbox-subtitle { margin-top: 5px; } .woocommerce-layout__inbox-subtitle span { color: #757575; }';
		wp_add_inline_style( 'activity-panels-hide', $css );
	}
}

WC_Calypso_Bridge_WooCommerce_Admin_Features::get_instance();
