import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Pricing = () => {
	const [billingSchedule, setBillingSchedule] = useState(0);
	return (
		<div>
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
						<button className="btn btn-black" onClick={() => setBillingSchedule(0)}>Monthly</button>
						<button className="btn btn-black" onClick={() => setBillingSchedule(1)}>Quarterly</button>
						<button className="btn btn-black" onClick={() => setBillingSchedule(2)}>Annually</button>
					</div>	
					<div className="flex flex-wrap">
						<div className="w-1/2 px-16"> 
							<div style={{backgroundColor: '#fbeeca'}} className="p-16">
								<h3 className="font-bold my-4">Graphic Design</h3>
								<p>Best for solo entrepreneurs & small businesses.</p>
								<ul className="py-8 list-disc">
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>

								</ul>
								<div className="flex flex-wrap">
									{{
										0: <div><div>$499/mo</div><div>Paid Monthly</div></div>,
										1: <div><div>$479/mo</div><div>Paid Quarterly</div></div>,
										2: <div><div>$469/mo</div><div>Paid Annually</div></div>
									}[billingSchedule]}
									<Link className="btn btn-black ml-auto" to="/onboard?plan=Standard">Start Trial</Link>
								</div>	
							</div>
						</div>
						<div className="w-1/2 px-16"> 
							<div className="text-white bg-gray-800 p-16">
								<h3 className="font-bold my-4">Graphic Design Pro</h3>
								<p>Best for solo entrepreneurs & small businesses.</p>
								<ul className="py-8 list-disc">
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>
									<li>Dedicated designer</li>

								</ul>
								<div className="flex flex-wrap">
									{{
										0: <div><div>$995/mo</div><div>Paid Monthly</div></div>,
										1: <div><div>$945/mo</div><div>Paid Quarterly</div></div>,
										2: <div><div>$833/mo</div><div>Paid Annually</div></div>
									}[billingSchedule]}
									<Link className="btn btn-black ml-auto" to="/onboard?plan=Standard">Start Trial</Link>
								</div>	
							</div>
						</div>
					</div>
				</section>

				<section className="container mx-auto pb-40">
					<h2 className="pb-16 text-center">All Plans Include</h2>
					<div className="flex flex-wrap">
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
					</div>
					<div className="flex flex-wrap">
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
						</div>
						<div className="w-1/4 px-8 py-16">
							<h4 className="font-bold">Unlimited Requests</h4>
							<p>Request as many designs as your heart desires. Even if you’ve already submitted 100.</p>
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
						<div className="w-1/2 bg-gray-500">
							1
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	)
};

export default Pricing
