import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PricingModule from '../components/PricingModule';
import Footer from '../components/Footer';
import Accordion from '../components/Accordion';

const Pricing = () => {
	const [billingSchedule, setBillingSchedule] = useState(0);
	return (
		<div>
			<Helmet>
				<title>Pricing</title>
			</Helmet>
			<header className="w-full" style={{backgroundColor: '#fbeeca', height: '500px'}}>
				<div className="container mx-auto h-full flex flex-wrap items-center">
					<div className="text-center mx-auto w-2/3 pr-24">
						<h1 className="mb-4">Find the perfect plan<br/>for your business</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
					</div>
				</div>
			</header>
			<main>
				<section className="container mx-auto py-40">
					<div className="text-center pb-16">
						<button className={billingSchedule === 0 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(0)}>Monthly</button>
						<button className={billingSchedule === 1 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(1)}>Quarterly</button>
						<button className={billingSchedule === 2 ? 'btn btn-black' : 'btn' } onClick={() => setBillingSchedule(2)}>Annually</button>
					</div>	
					<div className="flex flex-wrap">
						<div className="w-1/2 px-16"> 
							<PricingModule
								plan={'standard'}	
								billingSchedule={billingSchedule}
							/>
						</div>
						<div className="w-1/2 px-16"> 
							<PricingModule
								plan={'premium'}	
								billingSchedule={billingSchedule}
								backgroundColor={"#fbeeca"}
							/>
						</div>
					</div>
				</section>

				<section className="container mx-auto pb-40">
					<h2 className="pb-16 text-center">All Plans Include</h2>
					<div className="flex flex-wrap">
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">Unlimited Revisions</h4>
							<p>We’ll keep editing until you think it’s absolutely perfect. We won’t stop you.</p>	
						</div>
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">A Dedicated Designer</h4>
							<p>Work with your designer directly, on a first-name basis. No friction, no middlemen.</p>
						</div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">Fast or Faster Turnaround Times</h4>
							<p>Most requests only take one or two business days — or even same-day for Pro accounts.</p>
						</div>
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">24/7 Live Chat Support</h4>
							<p>Run into an issue? Just chat with our world-class support team in real time, available 24/5.</p>
						</div>
						<div className="w-1/3 p-16">
							<h4 className="font-bold mb-4">Satisfaction Guarantee</h4>
							<p>Try us out risk-free. If you don’t love us, get a full refund with our extended 30-day risk-free trial.</p>
						</div>
					</div>
				</section>

				<section>
					<hr />
					<div className="container mx-auto py-40 flex flex-wrap">
						<div className="w-1/2 pr-40">
							<h2 className="pb-16">Got questions? Relax bruh we got you.</h2>	
							<img src="https://opendoodles.s3-us-west-1.amazonaws.com/laying.png" />	
						</div>
						<div className="w-1/2">
							<Accordion />	
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
};

export default Pricing
