<?php
/**
 * WC Calypso Bridge
 */
class WC_Calypso_Bridge {

	/**
	 * Current version of the plugin.
	 */
	const CURRENT_VERSION = '0.1.9';

	/**
	 * Minimum woocommerce version needed to run this plugin.
	 */
	const WC_MIN_VERSION = '3.0.0';

	/**
	 * Paths to assets act oddly in production
	 */
	const MU_PLUGIN_ASSET_PATH = '/wp-content/mu-plugins/wpcomsh/vendor/automattic/wc-calypso-bridge/';
	public static $plugin_asset_path = null;

	/**
	 * Class Instance.
	 */
	protected static $instance = null;

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'woocommerce_init', array( $this, 'init' ), 20 );
	}

	/**
	 * Loads API includes and registers routes.
	 */
	function init() {
		if ( $this->is_woocommerce_valid() ) {
			$this->includes();
			// Ensure wc-api-dev has already registered routes
			add_action( 'rest_api_init', array( $this, 'register_routes' ), 20 );
		}
	}

	/**
	 * Makes sure WooCommerce is installed and up to date.
	 */
	public function is_woocommerce_valid() {
		return (
			class_exists( 'woocommerce' ) &&
			version_compare(
				get_option( 'woocommerce_db_version' ),
				WC_Calypso_Bridge::WC_MIN_VERSION,
				'>='
			)
		);
	}

	/**
	 * Includes.
	 */
	public function includes() {
		/** Patches includes */
		include_once( dirname( __FILE__ ) . '/inc/class-customizer-guided-tour.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-add-bacs-accounts.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-allowed-redirect-hosts.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-cheque-defaults.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-email-order-url.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-enable-auto-update-db.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-hide-alerts.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-jetpack-hotfixes.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-jetpack-sync.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-mailchimp-deactivate-hook.php' );		
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-mailchimp-no-redirect.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-masterbar-menu.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-paypal-defaults.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-paypal-method-supports.php' );
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-products.php' );

		/** API includes */
		include_once( dirname( __FILE__ ) . '/api/class-wc-calypso-bridge-send-invoice-controller.php' );
		include_once( dirname( __FILE__ ) . '/api/class-wc-calypso-bridge-settings-email-groups-controller.php' );

		if ( class_exists( 'MailChimp_Woocommerce' ) ) {
			include_once( dirname( __FILE__ ) . '/api/class-wc-calypso-bridge-mailchimp-settings-controller.php' );
		}

	}

	/**
	 * Register REST API routes.
	 *
	 * New endpoints/controllers can be added here.
	 */
	public function register_routes() {
		$controllers = array(
			'WC_Calypso_Bridge_Send_Invoice_Controller',
			'WC_Calypso_Bridge_Settings_Email_Groups_Controller',
		);

		if ( class_exists( 'MailChimp_Woocommerce' ) ) {
				$controllers[] = 'WC_Calypso_Bridge_MailChimp_Settings_Controller';
		}

		foreach ( $controllers as $controller ) {
			$controller_instance = new $controller();
			$controller_instance->register_routes();
		}

		// We include it here because rest_api_init is a proper context for mocked add_settings_error function
		include_once( dirname( __FILE__ ) . '/inc/wc-calypso-bridge-mailchimp-add-settings-error.php' );
	}

	/**
	 * Class instance.
	 */
	public static function instance() {
		if ( is_null( self::$instance ) ) {
			// If this is a traditionally installed plugin, set plugin_url for the proper asset path.
			if ( file_exists( WP_PLUGIN_DIR . '/wc-calypso-bridge/wc-calypso-bridge.php' ) ) {
				if ( WP_PLUGIN_DIR . '/wc-calypso-bridge/' == plugin_dir_path( __FILE__ ) ) {
					self::$plugin_asset_path = plugin_dir_url( __FILE__ );
				}
			}

			self::$instance = new self();
		}

		return self::$instance;
	}
}

WC_Calypso_Bridge::instance();
