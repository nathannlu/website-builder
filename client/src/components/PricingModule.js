import React from 'react';
import { Link } from 'react-router-dom';
import { standardPlan, premiumPlan } from '../assets/plans';

const Price = props => {
	return (
		<div>
			<h2 className="flex">
				<span style={{fontSize:'20px'}}>$</span>
				<span>{props.price}</span>
				<span style={{fontSize: '16px'}}>/mo</span>
			</h2>
			<small className="ml-6">Paid {props.plan}</small>
		</div>
	)
};

const PricingModule = props => {
	const plan = props.plan === 'standard' ? standardPlan : premiumPlan;	
	const backgroundColor =	props.backgroundColor ? props.backgroundColor : '#f6f6f4'
	const borderColor = props.backgroundColor ? '#333' : 'e2e8f0'
	
	return (
		<div className="p-16 border h-full flex flex-wrap" style={{backgroundColor}} >
			<div className="w-full">	
				<h2 className="font-bold my-4">{plan.title}</h2>
				<p className="mb-12">{plan.description}</p>
				<hr style={{borderColor}} />
			</div>	
			
			<ul className="w-full py-12 list-disc font-bold">
				{plan.perks.map((perk, i) => (
					<li key={i} className="mb-3">{perk}</li>
				))}
			</ul>

			<div className="w-full self-end">
				<hr style={{borderColor}} />
				<div className="flex flex-wrap pt-12">
					{{
						0: <Price price={plan.price.monthly} plan={'Monthly'} />, 
						1: <Price price={plan.price.quarterly} plan={'Quarterly'} />,	
						2: <Price price={plan.price.annually} plan={'Annually'} />	
					}[props.billingSchedule]}
					<Link className="btn btn-primary ml-auto self-center" to="/onboard?plan=Standard">Start Trial</Link>
				</div>
			</div>	
		</div>
	)
};

export default PricingModule;
