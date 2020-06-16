import React from 'react';

const Footer = () => {
	return (
		<div>
			<section style={{backgroundColor: '#d8eacc'}}>
				<div className="container mx-auto flex flex-wrap items-center">
					<div className="w-1/2 pr-24 py-40">
						<div className="mb-16">	
							<h2 className="mb-6">More Questions?<br /> We're Happy To Help!</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius.</p>
						</div>
						<button className="btn btn-black">Contact Us</button>
					</div>

					<div className="w-1/2">
						<img src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.png" />	
					</div>
				</div>
			</section>
			<footer style={{backgroundColor: '#f6f6f4'}} className="">
				<div className="container mx-auto flex flex-wrap py-24">
					<div className="w-1/2">
						<div className="pb-16">
							<img src="/logo.png" style={{height: '35px'}} className="mb-6" />	
							<a className="underline" href="">support@graaphic.co</a>	
						</div>
						<div>
							<h4 className="mb-6">Address</h4>
							<div className="mb-6">
								<p>422 Richards St</p>
								<p>Vancouver, BC, V6B 2Z4</p>
							</div>
							<a className="underline" href="">Get Directions</a>	
						</div>
					</div>
					<div className="w-1/2 flex flex-wrap" style={{height: 'fit-content'}}>
						<h4 className="w-full mb-6">Sign up for updates</h4>
						<input className="flex-1" />
						<button className="btn btn-black">Sign up</button>
					</div>
				</div>
			</footer>
		</div>
	)
};

export default Footer;
