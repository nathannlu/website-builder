import React from 'react';
import { Link } from 'react-router-dom';
import { standardPlan, premiumPlan } from '../assets/plans.js';

const PricingModule = props => {
	const plan = props.plan === 'standard' ? standardPlan : premiumPlan;
	const backgroundColor =	props.backgroundColor ? props.backgroundColor : '#f6f6f4'	
	const borderColor = props.darkBackground ? 'e2e8f0' : '#333'
	const color = props.darkBackground ? '#f6f6f4' : '#333';

	return (
		<div className="p-16 border h-full flex flex-wrap" style={{backgroundColor, color}} >
			<div className="w-full">	
				<h4 className="font-bold mb-8">{plan.title}</h4>
				<hr style={{borderColor}} />
			</div>	
			
			<ul className="w-full py-12 list-disc font-bold">
				{plan.perks.map((perk, i) => (
					<li key={i} className="mb-3">{perk}</li>
				))}
			</ul>

			{props.footerButton ? (
				<div className="w-full self-end">
					<hr style={{borderColor}} />
					<div className="flex flex-wrap pt-12">
						<Link className="btn btn-primary self-center" to="/pricing">Learn more</Link>
					</div>
				</div>
			) : ('')}
		</div>
	)
};

export default PricingModule;
