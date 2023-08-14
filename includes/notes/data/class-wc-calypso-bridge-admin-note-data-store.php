<?php
/**
 * Overrides the default notes datastores to introduce suppress/allowlisting features.
 *
 * @package WC_Calypso_Bridge/Classes
 * @since   x.x.x
 * @version x.x.x
 */

defined( 'ABSPATH' ) || exit;

use Automattic\WooCommerce\Admin\Notes\Note;
use Automattic\WooCommerce\Admin\Notes\DataStore;
use Automattic\WooCommerce\Admin\WCAdminHelper;

/**
 * WC Calypso Bridge Admin Notes Data Store
 */
class WC_Calypso_Bridge_Admin_Note_Data_Store extends DataStore {

	/**
	 * Indicates whether there's an allow-list.
	 *
	 * @return boolean
	 */
	protected function has_allow_list() {
		return wc_calypso_bridge_is_ecommerce_trial_plan();
	}

	/**
	 * Returns a list of messages to allow.
	 *
	 * @return array
	 */
	protected function get_allow_list() {

		if ( ! $this->has_allow_list() ) {
			return array();
		}

		return array(
			'wc-admin-add-first-product-note',
			'wc-admin-mobile-app',
			'wc-calypso-bridge-free-trial-welcome',
			'wc-calypso-bridge-free-trial-support-checkin',
			'wc-calypso-bridge-free-trial-halfway-checkin',
			'wc-calypso-bridge-free-trial-expiry-checkin',
		);
	}

	/**
	 * Indicates whether a note is allowed.
	 *
	 * @param  Note  $note
	 * @return boolean
	 */
	protected function is_allow_listed( $note ) {
		return in_array( $note->get_name(), $this->get_allow_list() );
	}

	/**
	 * Indicates whether there's a suppress-list.
	 *
	 * @return boolean
	 */
	protected function has_suppress_list() {
		return wc_calypso_bridge_has_ecommerce_features();
	}

	/**
	 * Returns a list of messages to suppress.
	 *
	 * @return array
	 */
	protected function get_suppress_list() {

		if ( ! $this->has_suppress_list() ) {
			return array();
		}

		$suppress_list = array(
			'wc-admin-adding-and-managing-products',
			'wc-admin-choosing-a-theme',
			'wc-admin-customizing-product-catalog',
			'wc-admin-first-product',
			'wc-admin-store-notice-giving-feedback-2',
			'wc-admin-insight-first-product-and-payment',
			'wc-admin-insight-first-sale',
			'wc-admin-install-jp-and-wcs-plugins',
			'wc-admin-manage-store-activity-from-home-screen',
			'wc-admin-onboarding-payments-reminder',
			'wc-admin-usage-tracking-opt-in',
			'wc-admin-remove-unsecured-report-files',
			'wc-admin-update-store-details',
			'wc-admin-welcome-to-woocommerce-for-store-users',
			'wc-admin-woocommerce-payments',
			'wc-admin-woocommerce-subscriptions',
			'wc-pb-bulk-discounts',
			'wc-payments-notes-set-up-refund-policy',
			'wc-admin-marketing-jetpack-backup', // suppress for now, to be revisited.
			'wc-admin-migrate-from-shopify', // suppress for now, to be revisited.
			'wc-admin-magento-migration', // suppress for now, to be revisited.
			'wc-admin-woocommerce-subscriptions', // suppress for now, to be revisited.
			'wc-admin-online-clothing-store', // suppress for now, to be revisited.
			'wc-admin-selling-online-courses', // suppress for now, to be revisited.
		);

		if ( ! WCAdminHelper::is_wc_admin_active_for( 5 * DAY_IN_SECONDS ) ) {
			$suppress_list[] = 'wc-refund-returns-page';
		}

		return $suppress_list;
	}

	/**
	 * Indicates whether a note must be suppressed.
	 *
	 * @param  Note  $note
	 * @return boolean
	 */
	protected function is_suppress_listed( $note ) {
		return in_array( $note->get_name(), $this->get_suppress_list() );
	}

	/**
	 * Method to create a new note in the database conditionally.
	 *
	 * @param Note $note Admin note.
	 */
	public function create( &$note ) {

		// If an allow-list exists and the message is not there, do not create it.
		if ( $this->has_allow_list() && ! $this->is_allow_listed( $note ) ) {
			return;
		}

		// If a suppress-list exists and the message is there, do not create it.
		if ( $this->has_suppress_list() && ! $this->is_suppress_listed( $note ) ) {
			return;
		}

		parent::create( $note );
	}

	/**
	 * Parses the query arguments passed in as arrays and escapes the values after modifying results to implement allow/suppress-listing.
	 *
	 * @param array      $args the query arguments.
	 * @param string     $key the key of the specific argument.
	 * @param array|null $allowed_types optional allowed_types if only a specific set is allowed.
	 * @return array the escaped array of argument values.
	 */
	private function get_escaped_arguments_array_by_key( $args = array(), $key = '', $allowed_types = null ) {

		$arg_array = array();

		if ( 'name' === $key && $this->has_allow_list() ) {
			$args[ 'name' ] = isset( $args[ 'name' ] ) ? array_intersect( $args[ 'name' ], $this->get_allow_list() ) : $this->get_allow_list();
		}

		if ( 'excluded_name' === $key && $this->has_suppress_list() ) {
			$args[ 'excluded_name' ] = isset( $args[ 'excluded_name' ] ) ? array_unique( array_merge( $args[ 'excluded_name' ], $this->get_suppress_list() ) ) : $this->get_suppress_list();
		}

		if ( isset( $args[ $key ] ) ) {
			foreach ( $args[ $key ] as $args_type ) {
				$args_type = trim( $args_type );
				$allowed   = is_null( $allowed_types ) || in_array( $args_type, $allowed_types, true );
				if ( $allowed ) {
					$arg_array[] = sprintf( "'%s'", esc_sql( $args_type ) );
				}
			}
		}

		return $arg_array;
	}
}
