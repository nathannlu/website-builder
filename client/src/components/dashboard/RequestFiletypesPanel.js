import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';

const RequestFiletypesPanel = ({props, setFormStage, newRequest, setNewRequest}) => {
	const [checkedJpg, setCheckedJpg] = useState(false);
	const [checkedPng, setCheckedPng] = useState(false);
	const [checkedPdf, setCheckedPdf] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
		setNewRequest((prevState) => {
			prevState.filetypes.jpg = checkedJpg;	
			prevState.filetypes.png = checkedPng;	
			prevState.filetypes.pdf = checkedPdf;	

			return ({...prevState})
		})
		setFormStage(5);	
	}

	useEffect(() => {
		newRequest.filetypes.jpg ? setCheckedJpg(true) : setCheckedJpg(false);
		newRequest.filetypes.png ? setCheckedPng(true) : setCheckedPng(false);
		newRequest.filetypes.pdf ? setCheckedPdf(true) : setCheckedPdf(false);

	}, [])

	return (
		<form onSubmit={onSubmit}>
			<div className="text-left">
				<button onClick={() => setFormStage(3)}>&larr; Back</button>
			</div>
			<div className="w-full mb-8">
				<img className="mx-auto" src="https://jar.designpickle.com/assets/requests/size-241f17a4e9dbed6bf360f85939bd7f863356e8515fd558f294081b35336022ba.png" />
			</div>

			<h3 className="font-bold mb-8">What file types do you need?</h3>	
			<div className="pb-6 flex items-center justify-center">	
				<Switch onChange={e => setCheckedJpg(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedJpg} />
				<span className="pl-4">.jpg</span>
			</div>
			<div className="pb-6 flex items-center justify-center">	
				<Switch onChange={e => setCheckedPng(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedPng} />
				<span className="pl-4">.png</span>
			</div>
			<div className="pb-6 flex items-center justify-center">	
				<Switch onChange={e => setCheckedPdf(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedPdf} />
				<span className="pl-4">.pdf</span>
			</div>

			<button className="btn mt-8 btn-primary">Continue</button>
		</form>
	)
};

export default RequestFiletypesPanel;
