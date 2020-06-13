import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
	return (
		<div>
			<header className="w-full bg-gray-500" style={{height: '700px'}}>
				<div className="container mx-auto h-full flex flex-wrap items-center">
					<div className="w-1/2 pr-24">
						<h2 className="mb-4">Pricing Page</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
					</div>
					<div className="w-1/2">
						<img src="https://via.placeholder.com/500" />
					</div>
				</div>
			</header>
			<main>
				<section className="container mx-auto py-24">
					<div className="text-center pb-16">
						<h3 className="mb-4">Plans</h3>
						<p>No contract. 14 days money back guarantee. Cancel anytime.</p>
					</div>	
					<div className="flex flex-wrap">
						<div className="w-1/2 px-16"> 
							<div className="bg-gray-300 text-center py-16">
								<h5>Basic</h5>
								<p>$499/mo</p>
								<Link to="/onboard?plan=Standard">Start Trial</Link>
							</div>
						</div>

						<div className="w-1/2 px-16">
							<div className="bg-gray-300 text-center py-16">
								<h5>Premium</h5>
								<p>$799/mo</p>
								<Link to="/onboard?plan=Premium">Start Trial</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
};

export default Pricing
