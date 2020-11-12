import React, { useEffect } from 'react';

const New = props => {
	return (
		<div className="container mx-auto pt-40">
			<h1>
				New project...
			</h1>
			<div>
				<div className="flex flex-wrap bg-white rounded shadow" style={{width: '270px'}}>
					<div style={{height: '300px'}}>
						<img src="https://d3e54v103j8qbb.cloudfront.net/template-assets/5faa3e865a517f4a447a214b/thumbnails/1604992682383_undefined" />
					</div>
					<div className="self-bottom bg-white px-8 py-6">
						<h6>
							RealtyNinja
						</h6>
						<p>
							Appeals to commercial Real Estate clients.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default New;
