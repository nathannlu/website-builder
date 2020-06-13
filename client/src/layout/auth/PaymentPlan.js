import React from 'react';

const PaymentPlan = ({props, setOnboardingStage}) => {
	return (
		<div className="h-screen flex flex-wrap">
			<div className="w-1/3 bg-gray-500"></div>	
			<div className="w-2/3 bg-gray-100">
				<div className="w-1/3 mx-auto flex flex-wrap h-full items-center">
					<div className="w-full">
						<h4>Confirm Your Subscription</h4>
						<div className="py-8">
							Total: $499/mo
						</div>
						<button className="btn btn-black" onClick={() => setOnboardingStage(2)}>Proceed to payment</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default PaymentPlan;
