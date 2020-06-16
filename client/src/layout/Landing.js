import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Footer from '../components/Footer.js';

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
							<li className="py-4 font-bold"><Link to="#block-0">A dedicated, professional, designer</Link></li>
							<li className="py-4 opacity-50 font-bold"><Link to="#block-1">Unlimited Requests and Revisions</Link></li>
							<li className="py-4 opacity-50 font-bold"><Link to="#block-2">Ridiculously Fast Turnarounds</Link></li>
							<li className="py-4 opacity-50 font-bold"><Link to="#block-3">Easy and Streamlined Communication</Link></li>
							<li className="py-4 opacity-50 font-bold"><Link to="#block-4">World Class Customer Support</Link></li>
						</ul>
					</div>
					<div className="w-1/2 pl-24 pt-40">
						<div id="block-0" className="mb-40">
							<img className="mb-8 p-16" src="https://opendoodles.s3-us-west-1.amazonaws.com/clumsy.png" />
							<h5 className="mb-4">A dedicated, professional, designer</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div id="block-1" className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/meditating.png" />
							<h5 className="mb-4">Unlimited Requests and Revisions</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div id="block-2" className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/sprinting.png" />
							<h5 className="mb-4">Ridiculously Fast Turnarounds</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div id="block-3" className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.png" />
							<h5 className="mb-4">Easy and Streamlined Communication</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>
						<div id="block-4" className="mb-40">
							<img className="mb-8" src="https://opendoodles.s3-us-west-1.amazonaws.com/loving.png" />
							<h5 className="mb-4">World Class Customer Support</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
							</p>
						</div>

					</div>
				</section>

				<section style={{backgroundColor: '#f6f6f4'}}>
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
						<div style={{backgroundColor: "#fbeeca"}} className="h-full p-12">
							<h3 className="text-black font-bold">Graphic Design</h3>

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

				<section>
					<hr />
					<div className="container mx-auto py-24 text-center">
						<h2 className="pb-16">Check Out Some of Our Work</h2>	
						<div className="flex flex-wrap pb-16">
							<div style={{height: '200px'}} className="w-1/3 bg-gray-300">1</div>
							<div className="w-1/3 bg-gray-500">1</div>
							<div className="w-1/3 bg-gray-800">1</div>
						</div>
						<button className="btn btn-black">View More Work</button>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
};

export default Landing
