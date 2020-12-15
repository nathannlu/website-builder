import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TemplateShowcase from '../../molecules/TemplateShowcase';

const New = props => {
	const [newWebsite, setNewWebsite] = useState({title: 'test'});

	// initialize name
	const mount = () => {
		console.log('mount');
		axios.get('/api/users', {
			token: props.token
		}).then((res) => {
			if (res.status === 200) {
				console.log(res);
				setNewWebsite({title: String(res.data.name)});
			} else {
				// TODO: error handling
			}
		});
	};
	useEffect(mount, []);

	const createWebsite = () => {
		console.log(newWebsite);
		axios.post('/api/websites', newWebsite).then(res => {
			if (res.status === 200) {
				props.history.push(`/builder/${newWebsite.title}/home`);
			}
			// @TODO Errror handling
		});
	}

	return (
		<div className="container mx-auto pt-40">
			<h1>
				New project...
			</h1>
			{/* <div>
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
			</div> */}
			<div className="w-2/3 mx-auto flex flex-wrap space-x-8 py-32">
				<TemplateShowcase
					src="https://d3e54v103j8qbb.cloudfront.net/template-assets/5c75aacdf20430c74e511659/thumbnails/1558042197606_undefined"
					onClick={() => createWebsite() }
				>
					<h3 className="mb-3">
						Real Estate Starter
					</h3>
					<p>
						Build a unique and professional website for your business in no time. Customize the team, work, blog, and contact pages to match your brand — and set your business apart.
					</p>
				</TemplateShowcase>

				<TemplateShowcase
					src="https://uploads-ssl.webflow.com/5cdaceba136d188604d0c7da/5ce306e4927f1aeb21e93ac6_blank-page-thumbnail.svg"
					onClick={() => props.history.push('/builder')}
				>
					<h3 className="mb-3">
						AI Generated
					</h3>
					<p>
						Let Agentsquare generate you a website — then customize to your liking.
					</p>
				</TemplateShowcase>
			</div>
		</div>
	)
};

export default New;
