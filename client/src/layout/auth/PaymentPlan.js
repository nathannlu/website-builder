import React, {useState} from 'react';
import PricingModule from '../../components/PricingModuleSmall';
const PaymentPlan = ({props, setOnboardingStage}) => {
	const [proPlan, setProPlan] = useState(false);	
	const [billingSchedule, setBillingSchedule] = useState(0);
	const graphicDesignPerks = [
		'Dedicated Designer',
		'Unlimited requests',
		'Unlimited revisions',
		'1-2 day turnaround',
		'30-day satisfaction guarantee'
	];
	const graphicDesignPrices = ['399', '379', '319'];

	const proPerks = [
		'Dedicated Designer',
		'Unlimited requests',
		'Unlimited revisions',
		'1-2 day turnaround',
		'30-day satisfaction guarantee',
		'aids'
	];
	const proPrices = ['995', '945', '833'];

	return (
		<div className="h-screen flex flex-wrap">
			<div className="w-1/3 bg-gray-500"></div>	
			<div style={{backgroundColor: '#f6f6f4'}} className="w-2/3">
				<div className="w-2/3 mx-auto flex flex-wrap h-full items-center">
					<div className="w-full">
						<h2 className="mb-16">Confirm Your Subscription</h2>
						
						<div className="pb-8">
							<button className="btn btn-black" onClick={() => setBillingSchedule(0)}>Monthly</button>
							<button className="btn btn-black" onClick={() => setBillingSchedule(1)}>Quarterly</button>
							<button className="btn btn-black" onClick={() => setBillingSchedule(2)}>Annually</button>
						</div>
						<div className="flex flex-wrap">
							<div className="w-1/2"> 
								<PricingModule
									title={'Graphic Design'} 
									perks={graphicDesignPerks}		
								/>
							</div>
							<div className="w-1/2"> 
								<PricingModule
									title={'Graphic Design Pro'} 
									perks={proPerks}		
								/>
							</div>
						</div>

						<div className="py-8">
							Total: ${{
								0: !proPlan ? graphicDesignPrices[0] : proPrices[0],
								1: !proPlan ? graphicDesignPrices[1] : proPrices[1],
								2: !proPlan ? graphicDesignPrices[2] : proPrices[2]
							}[billingSchedule]}/mo
						</div>
						<button className="btn btn-primary" onClick={() => setOnboardingStage(2)}>Proceed to payment</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default PaymentPlan;
