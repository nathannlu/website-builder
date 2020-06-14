import React from 'react';

const Landing = () => {
	return (
		<div>
			<header className="w-full bg-gray-300">
				<div className="container mx-auto h-full flex flex-wrap items-center" style={{height: '700px'}}>
					<div className="w-1/2 pr-24">
						<h2 className="mb-4">Landing Page</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
					</div>
					<div className="w-1/2">
						<img src="https://via.placeholder.com/500" />
					</div>
				</div>
				<div className="bg-gray-500" style={{height: '250px'}}> 
					<div className="container mx-auto h-full flex flex-wrap text-center items-center">
						<div className="w-full">	
							<h5 className="font-bold mb-12">
								You'll be in good company
							</h5>

							<div className="flex flex-wrap justify-between">
								<img src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2020061103" />
								<img src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2020061103" />
								<img src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2020061103" />
								<img src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2020061103" />
								<img src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.png?cache=2020061103" />
							</div>	
						</div>	
					</div>
				</div>
			</header>
			<main>
				<section className="container mx-auto flex flex-wrap">
					<div className="w-1/2 pr-24 py-24 sticky top-0 h-full">
						<h2 className="mb-8">A New Approach to Graphic Design. Simple. Scalable. Reliable.</h2>
						<p>
							Whether you have considered hiring an in house designer, tried to manage a freelancer, or even worked with one of those “other design sites,” we know it sucks. Design Pickle is all about making your life easier. AKA not suck. All for one flat rate.
						</p>
						<ul>
							<li>A dedicated, professional, designer</li>
						</ul>
					</div>
					<div className="w-1/2 bg-gray-500" style={{height: '1500px'}}>1</div>
				</section>

				<section className="bg-green-500">
					<div className="container mx-auto flex flex-wrap">
						<div className="w-1/2">
							<img src="https://via.placeholder.com/500" />
						</div>

						<div className="w-1/2 pl-24 py-40">
							<h2 className="mb-8">We Walk the Walk, But Our Customers Talk the Talk.</h2>
							<p>
								Whether you’re just starting out or growing sales into the millions, learn from some of our most successful Design Pickle clients on how they grew their business through our unlimited graphic design support.
							</p>
						</div>
					</div>
				</section>

				<section className="py-24 flex flex-wrap container mx-auto text-center">
					<div className="w-full pb-16">
						<h2 className="w-1/2 mx-auto">Whatever You Need, We’ve Got the Right Plan for You.</h2>
					</div>	
					<div className="w-1/2 bg-green-500">
						1
					</div>
					<div className="w-1/2 bg-gray-800">
						2
					</div>
				</section>
			</main>
		</div>
	)
};

export default Landing
