import React, {useState, useEffect} from 'react';
import ReactFilestack from 'filestack-react';
import Switch from 'react-switch';
import axios from 'axios';

const RequestDescriptionPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
	const [description, setDescription] = useState(['']); 
	const [checkedCustomText, setCheckedCustomText] = useState(false);
	const [checkedCustomAssets, setCheckedCustomAssets] = useState(false);
	const onSubmit = e => {
		e.preventDefault();

		setFormStage(3);	
	}
	const onChangeCustomText = e => {
		setCheckedCustomText(e);
	}
	const onChangeCustomAssets = e => {
		setCheckedCustomAssets(e);
	}

	const onChange = e => {
		const {name, value} = e.target;
		setNewRequest((prevState) => {
			prevState.description[name] = value;	
			return({...prevState})
		});
		/*
		setDescription(prevState => {
			prevState[name] = value;
			return([...prevState]);
		})
		*/
	}

	const deleteFile = handle => {
		axios.delete(`https://www.filestackapi.com/api/file/${handle}?key=AZEPTIQ8sRBehAsatbasfz&policy=eyJleHBpcnkiOjE5MTczMTE0MDAsImNhbGwiOlsicmVtb3ZlIl19&signature=55e89b22fee904304a4f47cdd73a4553f1ee9e91b06a682e29739acb5a85ab89`)

		setNewRequest(prevState => {
			prevState.description.customAssets = prevState.description.customAssets.filter(asset => asset.handle !== handle)
			return({...prevState});
		})
	}
	
	const onFileUpload = res => {
		console.log(res);
		if (res.filesFailed.length > 0) {
			alert('File upload failed. Please try again or contact support');
		} else if (res.filesUploaded.length > 0) {
			setNewRequest((prevState) => {
				const _temp = [...prevState.description.customAssets, ...res.filesUploaded]
				
				// Filter array and remove duplicates, then change newRequest state
				prevState.description.customAssets = Array.from(new Set(_temp.map(a => a.handle))).map(handle => {return _temp.find(a => a.handle === handle)})
				return({...prevState})
			});
		}
	}

	const addInputField = () => {
		setDescription(description.concat(''));
		console.log(description);
	}

	useEffect(() => {
		if (newRequest.description.customText.length > 0) setCheckedCustomText(true);
		if (newRequest.description.customAssets.length > 0) setCheckedCustomAssets(true); 
	}, [])

	return (
		<form onSubmit={onSubmit}>
			<section className="mb-16">
				<div className="text-left">
					<button type="button" onClick={() => setFormStage(1)}>&larr; Back</button>
				</div>
				<div className="w-full mb-8">
					<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				</div>

				<div className="mb-8">
					<h3 className="font-bold mb-6">What are you looking for?</h3>	
					<p>
						Use sentences or paragraphs below to share your request. When you press enter, we'll create a new line for you. After you're done, we'll take each line and create a request checklist for your designer.
					</p>
				</div>
		<input onChange={onChange} value={newRequest.description.content} name="content" />
				{/*
					description.map((e, i) => (
						<div key={i}>
							<input onChange={onChange} name={i} value={description[i]} type="text" />
						</div>
					))
				<button type="button" onClick={() => addInputField()}>Add input field</button>

				*/}
			</section>
			
			<section className="mb-12">
				<label className="flex items-center pb-8">
					<h4 className="pr-8">Does your design need to include text?</h4>
					<Switch onChange={onChangeCustomText} checkedIcon={false} uncheckedIcon={false} checked={checkedCustomText} />
					<span className="pl-4">{
						checkedCustomText ? 'Yes' : 'No'
					}</span>
				</label>
				{ checkedCustomText ? (
					<div className="text-left">
						<p className="pb-2">Include text copy exactly as you'd like it to appear in your design</p>
						<textarea className="border w-full" onChange={onChange} name="customText" placeholder="What is the exact copy you want on your design?">{newRequest.description.customText}</textarea>
					</div>
				) : ('')}
			</section>

			<section className="mb-16">
				<label className="flex flex-wrap pb-8">
					<div className="flex w-full text-left items-center pb-6">
						<h4 className="pr-8">Do you have any assets to upload?</h4>
						<Switch onChange={onChangeCustomAssets} checkedIcon={false} uncheckedIcon={false} checked={checkedCustomAssets} />
						<span className="pl-4">{
							checkedCustomAssets ? 'Yes' : 'No'
						}</span>
					</div>
					<div>
						<p>Content, photos, fonts, logos, etc</p>
					</div>
				</label>
				{ checkedCustomAssets ? (
					<div className="text-left">
					
						<ReactFilestack
							apikey={'AZEPTIQ8sRBehAsatbasfz'}
							action="pick"
							componentDisplayMode={{
								type: 'button',
								customText: 'Add files',
								customClass: 'btn btn-black'
							}}
							clientOptions={{
								security: {
									policy: 'eyJjYWxsIjpbInBpY2siXSwiZXhwaXJ5IjoxOTE3MzExNDAwfQ==',
									signature: '9720077e2b6d7d5715613cf4e113a0597f56f6b4162bc2d4ec22d3e0fcb12581' 
								}
							}}
							onSuccess={onFileUpload}
						/>
						
						<div>
						{newRequest.description.customAssets.map((file, i) => (
							<div style={{display: 'inline-block'}}>
								{file.filename} <a onClick={() => deleteFile(file.handle)} className="text-red-500 cursor-pointer">x</a>
							</div>
						))}

						</div>
					</div>
				) : ('')}
			</section>

			<button className="btn mt-8 btn-primary">Continue</button>

		</form>
	)
};			
export default RequestDescriptionPanel;
