import React from 'react';

const Footer = () => {
	return (
		<div>
			<section style={{backgroundColor: '#d8eacc'}}>
				<div className="container mx-auto flex flex-wrap items-center">
					<div className="w-1/2 pr-24 py-40">
						<h2 className="mb-16">More Questions? That's Okay. We're Happy To Help!</h2>
						<button className="btn btn-black">Contact Us</button>
					</div>

					<div className="w-1/2">
						<img src="https://opendoodles.s3-us-west-1.amazonaws.com/zombieing.png" />	
					</div>
				</div>
			</section>
			<footer style={{height: '250px'}} className="container mx-auto flex flex-wrap py-16">
				<div className="w-2/5">
					<img src="/logo.png" className="" />	
				</div>
				<div className="w-3/5 flex flex-wrap">
					<div className="w-1/4">
						<div className="font-bold uppercase">
							Products
						</div>
					</div>
					<div className="w-1/4">
						<div className="font-bold uppercase">
							Products
						</div>
					</div>
					<div className="w-1/4">
						<div className="font-bold uppercase">
							Products
						</div>
					</div>
					<div className="w-1/4">
						<div className="font-bold uppercase">
							Products
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
};

export default Footer;
