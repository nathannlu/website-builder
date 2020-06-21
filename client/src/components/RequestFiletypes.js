import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';

const RequestFiletypesPanel = ({props, setFormStage, newRequest, setNewRequest, createNewRequest}) => {
	const [checkedJpg, setCheckedJpg] = useState(false);
	const [checkedPng, setCheckedPng] = useState(false);
	const [checkedPdf, setCheckedPdf] = useState(false);

	const onSubmit = e => {
		e.preventDefault();
			setFormStage(5);
	}

	useEffect(() => {
		setNewRequest((prevState) => {
			prevState.filetypes.jpg = checkedJpg;	
			prevState.filetypes.png = checkedPng;	
			prevState.filetypes.pdf = checkedPdf;	

			return ({...prevState})
		})
		console.log(newRequest);
	}, [checkedJpg,checkedPng,checkedPdf])

	useEffect(() => {
		newRequest.filetypes.jpg ? setCheckedJpg(true) : setCheckedJpg(false);
		newRequest.filetypes.png ? setCheckedPng(true) : setCheckedPng(false);
		newRequest.filetypes.pdf ? setCheckedPdf(true) : setCheckedPdf(false);
	}, [])

	return (
		<div className="flex flex-wrap">
			<div className="pr-8 flex items-center">	
				<Switch onChange={e => setCheckedJpg(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedJpg} />
				<span className="pl-4">.jpg</span>
			</div>
			<div className="pr-8 flex items-center">	
				<Switch onChange={e => setCheckedPng(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedPng} />
				<span className="pl-4">.png</span>
			</div>
			<div className="pr-8 flex items-center">	
				<Switch onChange={e => setCheckedPdf(e)} checkedIcon={false} uncheckedIcon={false} checked={checkedPdf} />
				<span className="pl-4">.pdf</span>
			</div>
		</div>
	)
};

export default RequestFiletypesPanel;
