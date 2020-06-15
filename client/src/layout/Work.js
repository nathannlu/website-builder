import React from 'react';

const Work = () => {
	return (
		<div>
			<header className="w-full bg-gray-500" style={{height: '700px'}}>
				<div className="container mx-auto h-full flex flex-wrap items-center">
					<div className="w-1/2 pr-24">
						<h2 className="mb-4">I'm fuckign naked.</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
					</div>
					<div className="w-1/2">
						<img src="https://opendoodles.s3-us-west-1.amazonaws.com/bikini.png" />
					</div>
				</div>
			</header>
		</div>
	)
};

export default Work;
