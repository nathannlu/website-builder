import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const Work = () => {
	const work = [0,1,2,3,4,5,6,7];	
	return (
		<div>
			<Helmet>
				<title>Work - Graaphic</title>
			</Helmet>
			<header className="w-full" style={{backgroundColor: '#fbeeca', height: '500px'}}>
				<div className="container mx-auto h-full flex flex-wrap items-center">
					<div className="text-center mx-auto w-2/3 pr-24">
						<h1 className="mb-4">View Some of Our Latest Creations For Real Clients</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor venenatis varius. Maecenas molestie scelerisque odio, ut elementum odio venenatis tempus. Nullam sit amet augue vel erat porttitor blandit nec ut nisi.
						</p>
					</div>
				</div>
			</header>
			<main>
				<section className="flex flex-wrap container mx-auto py-24">
					{work.map(i => (
						<div className="w-1/3 p-4">
							<div className="border" style={{height: "35rem", objectFit: 'contain', overflow: 'hidden'}}>
								<img src={"/work/hostgenius_" + i + '.jpg'} />
							</div>
						</div>	
					))}
				</section>
			</main>
			<Footer />
		</div>
	)
};

export default Work;
