import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';

const RequestDescriptionPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
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
	}

	useEffect(() => {
		if (newRequest.description.customText.length > 0) setCheckedCustomText(true)
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
						<button className="btn btn-black">Add files</button>
					</div>
				) : ('')}
			</section>

			<button className="btn mt-8 btn-primary">Continue</button>

		</form>
	)
};			
export default RequestDescriptionPanel;
