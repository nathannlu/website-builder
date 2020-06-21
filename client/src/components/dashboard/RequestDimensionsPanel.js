import React, {useState, useEffect} from 'react';
import Select from 'react-select';

const Option = props => {
	const setSelection = e => {
		props.setSelection({
			type: props.type,
			size: props.dimensions
		})
	}

	return (
		<div 
			style={{borderColor: '#00465a'}}
			onClick={setSelection} 
			className={props.selection.type === props.type ? "p-4 w-1/3 mx-auto border-2" : "p-6 w-1/3 mx-auto"}
		>
			<div style={{backgroundColor: '#f6f6f4'}} className="rounded-lg border p-8">
				<h4 className="pb-4">{props.type}</h4>
				<img className="mx-auto py-8" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				<p>{props.dimensions}</p>
			</div>
		</div>
	)
};

const RequestDimensionsPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
	const [selection, setSelection] = useState({});
	const options = [
		{value: 'ad', label: 'Ad'},
		{value: 'branding', label: 'Branding'},
	]

	const onSubmit = e => {
		e.preventDefault();

		setFormStage(2);	
	}

	const onChange = e => {
		const {name, value} = e.target;
		setNewRequest((prevState) => {
			prevState['dimensions'][name] = value	
			return({...prevState});
		})
	}

	useEffect(() => {
		setNewRequest(prevState => {
			prevState.dimensions = selection;	

			return ({...prevState});
		})
	}, [selection])

	return (
		<form onSubmit={onSubmit} >
			<div className="text-left">
				<button type="button" onClick={() => setFormStage(0)}>&larr; Back</button>
			</div>
			<div className="w-full mb-8">
				<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			</div>
			
			<h3 className="font-bold mb-8">What size should your design be?</h3>
			<div className="w-full text-left">
{/*
				<p className="font-bold">Request type</p>
		<Select options={options} />*/}
			</div>

			<div className="flex flex-wrap">
				<Option selection={selection} setSelection={setSelection} type={'Post'} dimensions={'1200x1200'} />
				<Option selection={selection} setSelection={setSelection} type={'Canvas Ad'} dimensions={'1200x628'} />
				<Option selection={selection} setSelection={setSelection} type={'Cover Photo'} dimensions={'820x312'} />

				<Option selection={selection} setSelection={setSelection} type={'Event Cover'} dimensions={'1920x1080'} />
				<Option selection={selection} setSelection={setSelection} type={'Slideshow Ad'} dimensions={'1280x720'} />
				<Option selection={selection} setSelection={setSelection} type={'Video Thumbnail'} dimensions={'1200x675'} />
				
				<div className="p-6 w-1/3 mx-auto">
					<div style={{backgroundColor: '#f6f6f4'}} className="rounded-lg border p-8">
						<h4 className="pb-4">Custom</h4>
						<img className="mx-auto py-8" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
						<small className="pb-4 inline-block">What are the dimensions</small>	
						<input type="text" onChange={onChange} value={newRequest.dimensions.size} name="size" />
					</div>
				</div>
			</div>
			
			

			<button className="btn mt-8 btn-primary">Continue</button>
		</form>
	)
}

export default RequestDimensionsPanel;
