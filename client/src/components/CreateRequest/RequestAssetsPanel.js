import React, {useState, useEffect} from 'react';
import Unsplash, {toJson} from 'unsplash-js';
import Modal, {closeStyle} from 'simple-react-modal';
import Checkbox from '../Checkbox';

const RequestAssetsPanel = ({setFormStage, props, newRequest, setNewRequest}) => {
	const [unsplashImages, setUnsplashImages] = useState([]);
	const [unsplashQuery, setUnsplashQuery] = useState('');
	const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

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
				console.log(json.results);
			});
	}
	
	const onSubmit = e => {
		e.preventDefault();
		if(unsplashQuery.length > 0) {
			searchImages();
			setModalShow(true);	
		} else {
			alert('Input cannot be empty');
		}
	}

	const onChange = e => {
		const {name, value} = e.target;

		setNewRequest((prevState) => {
			prevState.assets[name] = value;	
			return({...prevState})
		});
	}

	const onSelect = e => {
		const {name, value} = e.target;
		console.log(name, value)
	}

	const toggleCheckbox = label => {
		if(selectedCheckboxes.includes(label)) {
			setSelectedCheckboxes(selectedCheckboxes.filter(arrItem => arrItem !== label))
		} else {
			setSelectedCheckboxes([...selectedCheckboxes, label]);
		}
	}

	const deleteImage = image => {
		setSelectedCheckboxes(selectedCheckboxes.filter(arrItem => arrItem !== image))
	}

	const submitImageSelection = e => {
		e.preventDefault();
	}

	const continueButtonHandler = e => {
		e.preventDefault();

		setNewRequest(prevState => {
			prevState.assets.unsplashAssets = selectedCheckboxes;	
			prevState.assets.findForMe = findAssetsForMe;
			return({...prevState});
		})
		setFormStage(4);
	}

	useEffect(() => {
		setSelectedCheckboxes(newRequest.assets.unsplashAssets);
	}, [])

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
						<div className="flex flex-wrap">
							{selectedCheckboxes.map((image,i) => (
								<div className="w-1/5 flex flex-wrap" key={i}>
									<img className="w-full" style={{height: '100px', objectFit: 'cover'}} src={JSON.parse(image).thumb} />
									<button type="button" onClick={() => deleteImage(image)} className="w-full">Delete</button>
								</div>
							))}
						</div>
						
						{selectedCheckboxes.length > 0 ? ('') : (
							<a type="button" onClick={() => setFindAssetsForMe(true)} className="link">Find stock assets for me</a>
						)}
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
				closeOnOuterClick={true} 
				show={modalShow}
			>
				<a style={closeStyle} onClick={() => setModalShow(false)}>X</a>	
				<div>
					<h3 className="mb-8">Select images</h3>
					{/*
					<form className="w-full flex" onSubmit={e => searchImages(e)}>
						<input value={unsplashQuery} onChange={e => setUnsplashQuery(e.target.value)} /> 
						<button className="btn btn-black">Search</button>
					</form>
					*/}
					<form onSubmit={submitImageSelection}>
					{unsplashImages.length > 0 ? (
						<div className="flex flex-wrap">
							{
								unsplashImages.map((image,i) => (
									<div className="w-1/3"  key={i}>
									{/* rerender component when user researches */}
										<Checkbox 
											label={`{"id": "${image.id}", "thumb":"${image.urls.thumb}"}`} 
											checked={selectedCheckboxes.includes(`{"id": "${image.id}", "thumb":"${image.urls.thumb}"}`)} 
											handleCheckboxChange={toggleCheckbox}
											key={i}
											image={image.urls.thumb}
										/>
									</div>
								))
							}
						</div>	
						) : (
							<div className="w-full py-40 text-center" style={{backgroundColor: '#f6f6f4'}}>
								<p>No images found</p>
							</div>
						)}
						<div className="w-full mt-8">
							<button onClick={() => setModalShow(false)} className="btn btn-black">Select {selectedCheckboxes.length} image(s)</button>
						</div>
					</form>
				</div>
			</Modal>
			<button className="btn btn-primary" onClick={continueButtonHandler}>Continue</button>
		</div>
	)
};

export default RequestAssetsPanel
