import React, {useState, useEffect} from 'react';
import PricingModule from '../../components/PricingModuleSmall';

const PaymentPlan = ({props, setOnboardingStage}) => {
	const [plan, setPlan] = useState(0);	
	const [billingSchedule, setBillingSchedule] = useState(0);
	useEffect(() => {
		const selectedPlan = JSON.parse('{"' + props.location.search.split('?')[1].replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}') 
		selectedPlan.plan.toLowerCase() === 'standard' ? setPlan(0) : setPlan(1);
	}, [])
	return (
		<div className="h-screen flex flex-wrap">
			<div className="w-1/3" style={{backgroundImage: 'url(/splash.png)', backgroundSize: 'cover', filter: 'grayscale(100%)'}}></div>	
			<div style={{backgroundColor: '#f6f6f4'}} className="w-2/3">
				<div className="w-2/3 mx-auto flex flex-wrap h-full items-center">
					<div className="w-full">
						<h2 className="mb-16">Confirm Your Subscription</h2>
						
						<div className="pb-8">
							<button className={billingSchedule === 0 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(0)}>Monthly</button>
							<button className={billingSchedule === 1 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(1)}>Quarterly</button>
							<button className={billingSchedule === 2 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(2)}>Annually</button>
						</div>
						<div className="flex flex-wrap">
							<div className="w-1/2" onClick={() => setPlan(0)}> 
								<PricingModule
									plan={'standard'}	
									backgroundColor={plan === 0 ? '#fbeeca' : ''}
								/>
							</div>
							<div className="w-1/2" onClick={() => setPlan(1)}> 
								<PricingModule
									plan={'premium'}
									backgroundColor={plan === 1 ? '#fbeeca' : ''}
								/>
							</div>
						</div>

						<div className="py-8">
							Total: ${{
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
