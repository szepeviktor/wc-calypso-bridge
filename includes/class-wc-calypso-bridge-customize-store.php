<?php
/**
 * Adds Customize Store task related functionalities
 *
 * @package WC_Calypso_Bridge/Classes
 * @since   1.0.0
 * @version x.x.x
 */

defined( 'ABSPATH' ) || exit;

/**
 * WC Calypso Bridge Customize Store
 */
class WC_Calypso_Bridge_Customize_Store {

	/**
	 * Class instance.
	 *
	 * @var WC_Calypso_Bridge_Customize_Store instance
	 */
	protected static $instance = false;

	/**
	 * Get class instance
	 */
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 */
	private function __construct() {
		add_action( 'plugins_loaded', function() {
			if ( class_exists( '\Automattic\WooCommerce\Admin\Features\Features' ) && \Automattic\WooCommerce\Admin\Features\Features::is_enabled( 'customize-store' ) ) {
				add_action( 'load-site-editor.php', array( $this, 'mark_customize_store_task_as_completed_on_site_editor' ) );
			}
		});

		// wpcom.editor.js conflicts with CYS scripts due to double registration of the private-apis
		// dequeue it on CYS pages.
		add_action( 'admin_print_scripts', function() {
			if ( isset( $_GET['path'] ) && str_contains( wp_unslash( $_GET['path'] ), '/customize-store/' ) ) { // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
				wp_dequeue_script( 'wpcom-block-editor-wpcom-editor-script' );
			}
		}, 9999);

		add_action( 'wp_head', array( $this, 'possibly_remove_wpcom_ui_elements' ) );
	}

	/**
	 * Mark Customize Store task as completed on Site Editor by checking $_GET['from'] value.
	 * The value is set from WP-Calypso.
	 *
	 * @since 2.2.14
	 *
	 * @return void
	 */
	public function mark_customize_store_task_as_completed_on_site_editor() {
		if ( isset( $_GET['from'] ) && $_GET['from'] === 'theme-info' ) {
			update_option( 'woocommerce_admin_customize_store_completed', 'yes' );
		}
	}

	/**
	 * Runs script and add styles to remove WPCOM elements such as admin bar, proxy banner, gift banner, store notice
	 * and hide scrollbar when users are viewing with ?cys-hide-admin-bar=true.
	 *
	 * @since x.x.x
	 *
	 * @return void
	 */
	public function possibly_remove_wpcom_ui_elements() {
		if ( isset( $_GET['cys-hide-admin-bar'] ) ) {
			echo '
			<style type="text/css">
				#wpadminbar,
				#wpcom-gifting-banner,
				#wpcom-launch-banner-wrapper,
				#atomic-proxy-bar { display: none !important; }
				.woocommerce-store-notice { display: none !important; }
				html { margin-top: 0 !important; }
				body { overflow: hidden; }
			</style>';
			echo '
			<script type="text/javascript">
			( function() {
				document.addEventListener( "DOMContentLoaded", function() {
					document.documentElement.style.setProperty( "margin-top", "0px", "important" );
				} );
			} )();
			</script>';
		}
	}

}

WC_Calypso_Bridge_Customize_Store::get_instance();