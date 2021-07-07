/**
 * External dependencies
 */
// @ts-ignore
import { Card } from '@woocommerce/components';
import { Button, Notice } from '@wordpress/components';
// @ts-ignore
import { useState } from 'wordpress-element';

/**
 * Internal dependencies
 */
import strings from './strings';
import Banner from './banner';
import Visa from './cards/visa';
import MasterCard from './cards/mastercard';
import Maestro from './cards/maestro';
import Amex from './cards/amex';
import ApplePay from './cards/applepay';
import CB from './cards/cb';
import DinersClub from './cards/diners';
import Discover from './cards/discover';
import JCB from './cards/jcb';
import UnionPay from './cards/unionpay';
import './style.scss';
import FrequentlyAskedQuestions from './faq';
import wcpayTracks from './tracks';

declare global {
	interface Window { 
		wp: any,
		wcCalypsoBridge: any,
		location: Location
	}
}

const LearnMore = () => {
	const handleClick = () => {
		wcpayTracks.recordEvent(wcpayTracks.events.CONNECT_ACCOUNT_LEARN_MORE);
	};
	return (
		<a
			onClick={handleClick}
			href="https://woocommerce.com/payments/"
			target="_blank"
			rel="noreferrer"
		>
			{strings.learnMore}
		</a>
	);
};

const PaymentMethods = () => (
	<div className="wcpay-connect-account-page-payment-methods">
		<Visa />
		<MasterCard />
		<Maestro />
		<Amex />
		<DinersClub />
		<CB />
		<Discover />
		<UnionPay />
		<JCB />
		<ApplePay />
	</div>
);

const TermsOfService = () => (
	<span className="wcpay-connect-account-page-terms-of-service">
		{strings.terms}
	</span>
);

const ConnectPageError = ({ errorMessage }: {
	errorMessage: string
}) => {
	if (!errorMessage) {
		return null;
	}
	return (
		<Notice
			className="wcpay-connect-error-notice"
			status="error"
			isDismissible={false}
		>
			{errorMessage}
		</Notice>
	);
};

const ConnectPageOnboarding = ({
	isJetpackConnected,
	installAndActivatePlugins,
	setErrorMessage,
	connectUrl,
}: {
	isJetpackConnected: string,
	installAndActivatePlugins: Function,
	setErrorMessage: Function,
	connectUrl: string
}) => {
	const [isSubmitted, setSubmitted] = useState(false);
	const [isNoThanksClicked, setNoThanksClicked] = useState(false);

	const handleSetup = async () => {
		setSubmitted(true);
		wcpayTracks.recordEvent(wcpayTracks.events.CONNECT_ACCOUNT_CLICKED, {
			// eslint-disable-next-line camelcase
			wpcom_connection: isJetpackConnected ? 'Yes' : 'No',
		});

		const installAndActivateResponse = await installAndActivatePlugins([
			'woocommerce-payments',
		]);
		if (installAndActivateResponse?.success) {
			// Redirect to KYC.
			window.location.href = connectUrl;
		} else {
			setErrorMessage(installAndActivateResponse.message);
			setSubmitted(false);
		}
	};

	const handleNoThanks = () => {
		setNoThanksClicked(true);
	};

	return (
		<>
			<p>
				{strings.onboarding.description} <LearnMore />
			</p>

			<h3>{strings.paymentMethodsHeading}</h3>

			<PaymentMethods />

			<hr className="full-width" />

			<p className="connect-account__action">
				<TermsOfService />
				<Button
					isPrimary
					isBusy={isSubmitted}
					disabled={isSubmitted}
					onClick={handleSetup}
				>
					{strings.button}
				</Button>
				<Button
					isBusy={isNoThanksClicked}
					disabled={isNoThanksClicked}
					onClick={handleNoThanks}
					className="btn-nothanks"
				>
					{strings.nothanks}
				</Button>
			</p>
		</>
	);
};

const ConnectAccountPage = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const onboardingProps = {
		isJetpackConnected: window.wp.data
			.select('wc/admin/plugins')
			.isJetpackConnected(),
		installAndActivatePlugins:
			window.wp.data.dispatch('wc/admin/plugins').installAndActivatePlugins,
		setErrorMessage,
		connectUrl: window.wcCalypsoBridge.wcpayConnectUrl,
	};

	return (
		<div className="connect-account-page">
			<div className="woocommerce-payments-page is-narrow connect-account">
				<ConnectPageError errorMessage={errorMessage} />
				<Card className="connect-account__card">
					<Banner />
					<div className="content">
						<ConnectPageOnboarding {...onboardingProps} />
					</div>
				</Card>
				<Card className="faq__card">
					<div className="content">
						<FrequentlyAskedQuestions />
					</div>
				</Card>
			</div>
		</div>
	);
};

export default ConnectAccountPage;