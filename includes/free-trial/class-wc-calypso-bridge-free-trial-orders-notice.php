<?php

/**
 * Class WC_Calypso_Bridge_Free_Trial_Orders_Notice.
 *
 * @since   2.0.5
 * @version 2.0.8
 *
 * Renders an admin notice on Orders page.
 */
class WC_Calypso_Bridge_Free_Trial_Orders_Notice  {
	/**
	 * The single instance of the class.
	 *
	 * @var object
	 */
	protected static $instance = null;

	/**
	 * Get class instance.
	 *
	 * @return object Instance.
	 */
	final public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	public function __construct(){
		if ( ! wc_calypso_bridge_is_ecommerce_trial_plan() ) {
			return;
		}

		add_action('admin_notices', function() {
			$screen = get_current_screen();
			if ( 'edit-shop_order' === $screen->id ) {
				?>
				<div class="free-trial-orders-notice notice">
                    <div>
                        <h3><?php echo __('Start selling to everyone', 'wc-calypso-bridge'); ?></h3>
                        <p>
							<?php echo __("During the trial period you can only place test orders! To receive orders from customers, upgrade to a paid plan and you'll be ready to start selling.", 'wc-calypso-bridge'); ?>
                        </p>
                    </div>
					<div class="upgrade-action">
						<a href="<?php echo $this->get_action_url()?>" class="button is-primary"><?php echo __('Upgrade now', 'wc-calypso-bridge'); ?></a>
					</div>

				</div>
				<?php
			}
		});
	}

	/**
	 * Action URL.
	 *
	 * @return string
	 */
	public function get_action_url() {
		return sprintf( "https://wordpress.com/plans/%s", WC_Calypso_Bridge_Instance()->get_site_slug() );
	}

}

WC_Calypso_Bridge_Free_Trial_Orders_Notice::get_instance();
