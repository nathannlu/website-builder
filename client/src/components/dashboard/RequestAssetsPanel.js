import React, {useState, useEffect} from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Modal, {closeStyle} from 'simple-react-modal';

const RequestAssetsPanel = ({setFormStage, props, newRequest, setNewRequest}) => {
	const [unsplashImages, setUnsplashImages] = useState([]);
	const [unsplashQuery, setUnsplashQuery] = useState('');

	const [findAssetsForMe, setFindAssetsForMe] = useState(false);
	const [modalShow, setModalShow] = useState(false);

	const unsplash = new Unsplash({
		accessKey: 'QAJw0oq2FWWywXYv4_rb1QqSjVt7o1oETrJsIdLCnUU',
		secret: '0yVCQRTp4x4ayKtcO9Hrrcq9Ob-HXjCfyQyOgB-XLwU',
	})

	const searchImages = (e) => {
		if(e) e.preventDefault();
		unsplash.search.photos(unsplashQuery, 1)
			.then(toJson)
			.then(json =>{
				setUnsplashImages(json.results);	
			});
	}
	
	const onSubmit = e => {
		e.preventDefault();
		searchImages();
		setModalShow(true);	
	}

	const onChange = e => {
		const {name, value} = e.target;

		setNewRequest((prevState) => {
			prevState.assets[name] = value;	
			return({...prevState})
		});
	}

	return (
		<div>
			<form onSubmit={onSubmit} className="mb-16">
				<div className="text-left">
					<button type="button" onClick={() => setFormStage(2)}>&larr; Back</button>
				</div>
				<div className="w-full mb-8">
					<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				</div>

				<h3 className="font-bold mb-8">Do you need additional assets?</h3>	

				{!findAssetsForMe ? (
					<div>
						<div className="flex w-full mb-8">
							<input placeholder="Search for assets" value={unsplashQuery} onChange={e => setUnsplashQuery(e.target.value)} />	
							<button className="btn btn-black">search</button>
						</div>
						
						<a type="button" onClick={() => setFindAssetsForMe(true)} className="link">Find stock assets for me</a>
					</div>
				) : (
					<div>	
						<textarea className="w-full border mb-8" onChange={onChange} value={newRequest.assets.findForMeDescription} name="findForMeDescription" placeholder="Any special requests for the images you want?"></textarea>	
						<a type="button" onClick={() => setFindAssetsForMe(false)} className="link">Search for assets</a>
					</div>
				)}
			</form>

			<Modal 
				containerStyle={{width:'800px', padding: '4rem'}}
				closeOnOuterCLick={true} 
				show={modalShow}
			>
				<a style={closeStyle} onClick={() => setModalShow(false)}>X</a>	
				<div className="flex flex-wrap">
					<form className="w-full flex" onSubmit={e => searchImages(e)}>
						<input value={unsplashQuery} onChange={e => setUnsplashQuery(e.target.value)} />
						<button className="btn btn-black">Search</button>
					</form>
					{
						unsplashImages.map((image,i) => (
							<div className="w-1/3" style={{height: '200px'}} key={i}>
								<img style={{width: '100%',height: '100%', objectFit: 'cover'}} src={image.urls.thumb} />	
							</div>
						))
					}
				</div>
			</Modal>

			<button className="btn btn-primary" onClick={() => setFormStage(4)}>Continue</button>
		</div>
	)
};

export default RequestAssetsPanel
