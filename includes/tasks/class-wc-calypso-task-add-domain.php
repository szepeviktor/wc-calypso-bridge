<?php

namespace Automattic\WooCommerce\Admin\Features\OnboardingTasks\Tasks;

use Automattic\WooCommerce\Admin\Features\OnboardingTasks\Task;

/**
 * Add domain Task
 *
 * @since   1.9.12
 * @version 2.0.5
 */
class AddDomain extends Task {

	/**
	 * ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'add_domain';
	}

	/**
	 * Title.
	 *
	 * @return string
	 */
	public function get_title() {
		if ( true === $this->get_parent_option( 'use_completed_title' ) ) {
			if ( $this->is_complete() ) {
				return __( 'You added your domain', 'woocommerce' );
			}

			return __( 'Add a domain', 'woocommerce' );
		}

		return __( 'Domain', 'woocommerce' );
	}

	/**
	 * Content.
	 *
	 * @return string
	 */
	public function get_content() {
		return __(
			'Add your domain name and make your store unique.',
			'woocommerce'
		);
	}

	/**
	 * Time.
	 *
	 * @return string
	 */
	public function get_time() {
		return __( '2 minutes', 'woocommerce' );
	}

	/**
	 * Action URL.
	 *
	 * @return string
	 */
	public function get_action_url() {
		$status      = new \Automattic\Jetpack\Status();
		$site_suffix = $status->get_site_suffix();
		$domain_path = sprintf( "https://wordpress.com/domains/add/%s", $site_suffix );
		$home_url    = \home_url( '', 'https' );

		if ( ! \str_ends_with( $home_url, '.wpcomstaging.com' ) ) {
			return $domain_path;
		}

		if ( ! \str_starts_with( $home_url, 'https://woo-' ) && ! \str_starts_with( $home_url, 'https://wooexpress-' ) ) {
			return $domain_path;
		}

		$blog_name = \get_option( 'blogname' );
		if ( empty( $blog_name ) ) {
			return $domain_path;
		}

		return sprintf( '%s?suggestion=%s', $domain_path, rawurlencode( $blog_name ) );
	}

	/**
	 * Action Label.
	 *
	 * @return string
	 */
	public function get_action_label() {
		return __( "Add a domain", 'woocommerce' );
	}

	/**
	 * Task completion.
	 *
	 * @return bool
	 */
	public function is_complete() {
		// Determine if a custom domain is used by ensuring that the default atomic url wpcomstating is not part of the `siteurl` option.
		return false === strpos( get_option( 'siteurl' ), 'wpcomstaging' );
	}
}
