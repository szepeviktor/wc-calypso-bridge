<?php
/**
 * REST API Settings controller
 *
 * Handles requests to the /settings/batch_email endpoint.
 *
 * @author   Automattic
 * @category API
 * @package  WooCommerce/API
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * REST API Settings controller class.
 *
 * @package WooCommerce/API
 */
class WC_Calypso_Bridge_Settings_Email_Groups_Controller extends WC_REST_Settings_Controller {

	/**
	 * WP REST API namespace/version.
	 */
	protected $namespace = 'wc/v3';
	protected $rest_base = 'settings_email_groups';

	/**
	 * Register routes.
	 *
	 */
	public function register_routes() {
		register_rest_route( $this->namespace, '/' . $this->rest_base, array(
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => array( $this, 'get_all_email_settings' ),
				'permission_callback' => array( $this, 'get_items_permissions_check' ),
			),
		) );
	}

	/**
	 * Bulk read email setings;
	 *
	 * @return array Of WP_Error or WP_REST_Response.
	 */
	public function get_all_email_settings() {
		/** @var WP_REST_Server $wp_rest_server */
		global $wp_rest_server;

		// List of all items returned by the settings/batch_email endpoint.
		$items = [
			[ 'group_id' => 'email',                           'id' => 'woocommerce_email_from_name' ],
			[ 'group_id' => 'email',                           'id' => 'woocommerce_email_from_address' ],
			[ 'group_id' => 'email_new_order',                 'id' => 'enabled' ],
			[ 'group_id' => 'email_new_order',                 'id' => 'recipient' ],
			[ 'group_id' => 'email_cancelled_order',           'id' => 'enabled' ],
			[ 'group_id' => 'email_cancelled_order',           'id' => 'recipient' ],
			[ 'group_id' => 'email_failed_order',              'id' => 'enabled' ],
			[ 'group_id' => 'email_failed_order',              'id' => 'recipient' ],
			[ 'group_id' => 'email_customer_on_hold_order',    'id' => 'enabled' ],
			[ 'group_id' => 'email_customer_processing_order', 'id' => 'enabled' ],
			[ 'group_id' => 'email_customer_completed_order',  'id' => 'enabled' ],
			[ 'group_id' => 'email_customer_refunded_order',   'id' => 'enabled' ],
			[ 'group_id' => 'email_customer_new_account',      'id' => 'enabled' ],
		];
		$response = [];

		foreach ( $items as $item ) {
			$wanted_keys = array(
				'group_id' => '',
				'id'       => '',
				'value'    => '',
			);

			$_response = $this->get_option( $item );
			if ( is_wp_error( $_response ) ) {
					$response[] = array(
							'group_id' => $item['group_id'],
							'id'       => $item['id'],
							'error'    => array( 'code' => $_response->get_error_code(), 'message' => $_response->get_error_message(), 'data' => $_response->get_error_data() ),
					);
			} else {
					$response[] = array_intersect_key( $wp_rest_server->response_to_data( $_response, '' ), $wanted_keys );
			}
		}

		return $response;
	}

	/**
	 * Get single settings option
	 *
	 * @param  Object with group_id and id
	 * @return WP_Error|WP_REST_Response
	 */
	public function get_option( $request ) {

		$options_controller = new WC_REST_Setting_Options_Controller;
		$response =  $options_controller->get_item( $request );
		return $response;
	}

}
