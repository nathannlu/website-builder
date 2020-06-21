import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';

const RequestCustomText = props => {
	const [checkedCustomText, setCheckedCustomText] = useState(false);

	const onChangeCustomText = e => {
		setCheckedCustomText(e);
	}

	const onChange = e => {
		const {name, value} = e.target;

		props.setDescription(prevState => {
			prevState[name] = value;

			return([...prevState]);
		});
	}

	useEffect(() => {
		if (props.newRequest.description.customText.length > 0) {
			setCheckedCustomText(true);
		}
	}, [])

	return (
		<div>
			<label className="flex items-center pb-8">
				<Switch onChange={onChangeCustomText} checkedIcon={false} uncheckedIcon={false} checked={checkedCustomText} />
				<span className="pl-4">{
					checkedCustomText ? 'Yes' : 'No'
				}</span>
			</label>

			{ checkedCustomText ? (
				<div className="text-left">
					<p className="pb-2">Include text copy exactly as you'd like it to appear in your design</p>
					<textarea className="border w-full" onChange={onChange} name="customText" placeholder="What is the exact copy you want on your design?">{props.newRequest.description.customText}</textarea>
				</div>
			) : ('')}
		</div>
	)
};

export default RequestCustomText;
