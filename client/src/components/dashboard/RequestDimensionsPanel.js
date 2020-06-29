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
			className="p-6 w-1/3 mx-auto"
		>
			<div style={{backgroundColor: '#f6f6f4'}}
			className={props.selection.type === props.type ? "border-2 rounded-lg p-8" : "rounded-lg border p-8"}>
				<h4 className="pb-4">{props.type}</h4>
				<img className="mx-auto py-8" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				<p>{props.dimensions}</p>
			</div>
		</div>
	)
};

const CustomOption = ({newRequest, onChange}) => {
	return (
		<div className="p-6 w-1/3 mx-auto">
			<div style={{backgroundColor: '#f6f6f4'}} className="rounded-lg border p-8">
				<h4 className="pb-4">Custom</h4>
				<img className="mx-auto py-8" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
				<small className="pb-4 inline-block">What are the dimensions</small>	
				<input type="text" onChange={onChange} value={newRequest.dimensions.size} name="size" />
			</div>
		</div>
	)
};

const RequestDimensionsPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
	const [selection, setSelection] = useState({});
	const [requestType, setRequestType] = useState('ad');
	const [changeRequestType, setChangeRequestType] = useState(false);
	const options = [
		{value: 'ad', label: 'Ad'},
		{value: 'branding', label: 'Branding'},
		{value: 'custom', label: 'Custom'}
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
			<div className="w-full mb-6">
				<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			</div>
			<div className="w-full text-left mb-8">
				{changeRequestType ? <Select options={options} defaultValue={options[0]} onChange={e => setRequestType(e.value)} /> : (
					<div>
						Design request is current set to: <span className="font-bold">{requestType}</span>
						<p>
							Not right? <span className="link" onClick={()=>setChangeRequestType(true)}>Change request type</span>
						</p>
					</div>
				)}
			</div>
		
			<h3 className="font-bold mb-8">What size should your design be?</h3>

			<div className="flex flex-wrap">
				{
					{
						'ad': <Option selection={selection} setSelection={setSelection} type={'Post'} dimensions={'1200x1200'} />,
						'branding': <Option selection={selection} setSelection={setSelection} type={'Cover Photo'} dimensions={'820x312'} />,
						'custom': <CustomOption newRequest={newRequest} onChange={onChange} /> 
					}[requestType]
				}
				{/*
				<Option selection={selection} setSelection={setSelection} type={'Post'} dimensions={'1200x1200'} />
				<Option selection={selection} setSelection={setSelection} type={'Canvas Ad'} dimensions={'1200x628'} />
				<Option selection={selection} setSelection={setSelection} type={'Cover Photo'} dimensions={'820x312'} />

				<Option selection={selection} setSelection={setSelection} type={'Event Cover'} dimensions={'1920x1080'} />
				<Option selection={selection} setSelection={setSelection} type={'Slideshow Ad'} dimensions={'1280x720'} />
				<Option selection={selection} setSelection={setSelection} type={'Video Thumbnail'} dimensions={'1200x675'} />
				*/}
				

			</div>
			
			

			<button className="btn mt-8 btn-primary">Continue</button>
		</form>
	)
}

export default RequestDimensionsPanel;
