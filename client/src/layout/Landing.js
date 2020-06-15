import React from 'react';

const Landing = () => {
	return (
		<div>
			<header style={{backgroundColor: '#fbeeca'}} className="w-full bg-gray-300">
				<div className="container mx-auto h-full flex flex-wrap items-center" style={{height: '700px'}}>
					<div className="w-1/2 pr-24">
						<h1 className="mb-8">Design is Expensive and Time Consuming.<br/> It Doesn't Have to Be.</h1>
						<p className="mb-12">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
						<button className="btn btn-black">Request a demo</button>
					</div>
					<div className="w-1/2">
						<img src="https://opendoodles.s3-us-west-1.amazonaws.com/reading-side.png" />
					</div>
				</div>
				<div style={{height: '250px', backgroundColor: '#f6f6f4'}}> 
					<div className="container mx-auto h-full flex flex-wrap text-center items-center">
						<div className="w-full">	
							<h5 className="font-bold mb-12">
								You'll be in good company
							</h5>

							<div className="flex flex-wrap justify-between">
								<img style={{height: '50px'}} src="https://seeklogo.com/images/P/pornhub-logo-739358CF45-seeklogo.com.png" />
								<img style={{height: '50px'}} src="https://seeklogo.com/images/P/pornhub-logo-739358CF45-seeklogo.com.png" />
								<img style={{height: '50px'}} src="https://seeklogo.com/images/P/pornhub-logo-739358CF45-seeklogo.com.png" />
								<img style={{height: '50px'}} src="https://seeklogo.com/images/P/pornhub-logo-739358CF45-seeklogo.com.png" />
								<img style={{height: '50px'}} src="https://seeklogo.com/images/P/pornhub-logo-739358CF45-seeklogo.com.png" />
							</div>	
						</div>	
					</div>
				</div>
			</header>
			<main>
				<section className="container mx-auto flex flex-wrap">
					<div className="w-1/2 pr-24 py-40 sticky top-0 h-full">
						<h2 className="mb-6">A New Approach to Graphic Design.<br/>Simple. Scalable. Reliable.</h2>
						<p>
							Whether you have considered hiring an in house designer, tried to manage a freelancer, or even worked with one of those “other design sites,” we know it sucks. Design Pickle is all about making your life easier. AKA not suck. All for one flat rate.
						</p>
						<ul className="pt-8">
							<li className="py-4 font-bold">A dedicated, professional, designer</li>
							<li className="py-4 opacity-50 font-bold">Unlimited Requests and Revisions</li>
							<li className="py-4 opacity-50 font-bold">Ridiculously Fast Turnarounds</li>
							<li className="py-4 opacity-50 font-bold">Easy and Streamlined Communication</li>
							<li className="py-4 opacity-50 font-bold">World Class Customer Support</li>
						</ul>
					</div>
					<div className="w-1/2 pl-24 pt-40">
						<div className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.png" />
							<h5 className="mb-4">A dedicated, professional, designer</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.png" />
							<h5 className="mb-4">Unlimited Requests and Revisions</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.png" />
							<h5 className="mb-4">Ridiculously Fast Turnarounds</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.png" />
							<h5 className="mb-4">Easy and Streamlined Communication</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.png" />
							<h5 className="mb-4">World Class Customer Support</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>

					</div>
				</section>

				<section style={{backgroundColor: '#d8eacc'}}>
					<div className="container mx-auto flex flex-wrap">
						<div className="w-1/2">
							<img src="https://opendoodles.s3-us-west-1.amazonaws.com/levitate.png" />
						</div>

						<div className="w-1/2 pl-24 py-40">
							<h2 className="mb-8">We Walk the Walk, But Our Customers Talk the Talk.</h2>
							<p>
								Whether you’re just starting out or growing sales into the millions, learn from some of our most successful Design Pickle clients on how they grew their business through our unlimited graphic design support.
							</p>
						</div>
					</div>
				</section>

				<section className="py-40 flex flex-wrap container mx-auto text-center">
					<div className="w-full pb-16">
						<h2 className="w-1/2 mx-auto">Whatever You Need, We’ve Got the Right Plan for You.</h2>
					</div>	
					<div className="w-1/2 px-8">
						<div className="bg-green-500 h-full p-12">
							<h3 className="text-white font-bold">Graphic Design</h3>

							<ul className="text-left my-12">
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
							</ul>

							<button className="btn btn-black">Get Demo</button>
						</div>
					</div>
					<div className="w-1/2 px-8">
						<div className="bg-gray-800 h-full p-12">
							<h3 className="text-white font-bold">Graphic Design Pro</h3>

							<ul className="text-left my-12">
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
								<li className="bg-white p-8 mb-6">
									Static graphics like flyers, infographics, social media graphics and more
								</li>	
							</ul>

							<button className="btn btn-black">Get Demo</button>
						</div>
					</div>

				</section>

				<section className="bg-green-500">
					<div className="container mx-auto flex flex-wrap">
						
						<div className="w-1/2 pr-24 py-40">
							<h2 className="mb-8">You made it to the bottom of the page! Go fuck yourself.</h2>
							<button className="btn btn-black">View Pricing</button>
						</div>

						<div className="w-1/2">
							<img src="https://via.placeholder.com/400" />
						</div>

					</div>
				</section>
			</main>

			<footer style={{height: '250px'}} className="container mx-auto">
				lockie is kinda gay	
			</footer>
		</div>
	)
};

export default Landing
