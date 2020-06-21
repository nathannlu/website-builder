import React, {useState, useEffect} from 'react';
import ReactFilestack from 'filestack-react';
import Switch from 'react-switch';
import axios from 'axios';

const RequestCustomAssets = props => {
	const [checkedCustomAssets, setCheckedCustomAssets] = useState(false);

	const onChangeCustomAssets = e => {
		setCheckedCustomAssets(e);
	}

	const deleteFile = handle => {
		axios.delete(`https://www.filestackapi.com/api/file/${handle}?key=AZEPTIQ8sRBehAsatbasfz&policy=eyJleHBpcnkiOjE5MTczMTE0MDAsImNhbGwiOlsicmVtb3ZlIl19&signature=55e89b22fee904304a4f47cdd73a4553f1ee9e91b06a682e29739acb5a85ab89`)

		props.setNewRequest(prevState => {
			prevState.description.customAssets = prevState.description.customAssets.filter(asset => asset.handle !== handle)
			return({...prevState});
		})
	}
	
	const onFileUpload = res => {
		console.log(res);
		if (res.filesFailed.length > 0) {
			alert('File upload failed. Please try again or contact support');
		} else if (res.filesUploaded.length > 0) {
			props.setNewRequest((prevState) => {
				const _temp = [...prevState.description.customAssets, ...res.filesUploaded]
				
				// Filter array and remove duplicates, then change newRequest state
				prevState.description.customAssets = Array.from(new Set(_temp.map(a => a.handle))).map(handle => {return _temp.find(a => a.handle === handle)})
				return({...prevState})
			});
		}
	}

	useEffect(() => {
		if (props.newRequest.description.customAssets.length > 0) setCheckedCustomAssets(true); 
	}, [])

	return (
		<div>
			<label className="flex flex-wrap pb-8">
				<div className="flex text-left items-center pb-6">
					<Switch onChange={onChangeCustomAssets} checkedIcon={false} uncheckedIcon={false} checked={checkedCustomAssets} />
					<span className="pl-4">{
						checkedCustomAssets ? 'Yes' : 'No'
					}</span>
				</div>
				<div className="w-full">
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
					{props.newRequest.description.customAssets.map((file, i) => (
						<div style={{display: 'inline-block'}}>
							{file.filename} <a onClick={() => deleteFile(file.handle)} className="text-red-500 cursor-pointer">x</a>
						</div>
					))}

					</div>
				</div>
			) : ('')}
		</div>	
	)
};

export default RequestCustomAssets
