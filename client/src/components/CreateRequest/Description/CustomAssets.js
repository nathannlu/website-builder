import React, {useState, useEffect} from 'react';
import ReactFilestack from 'filestack-react';
import { Typography, Grid, TextField, Button, Box, Switch, Fade } from '@material-ui/core';
import axios from 'axios';

const RequestCustomAssets = props => {
	const [hasCustomAssets, setHasCustomAssets] = useState(false);

	const onChangeCustomAssets = e => {
		setHasCustomAssets(e);
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
		if (props.newRequest.description.customAssets.length > 0) setHasCustomAssets(true); 
	}, [])

	return (
		<Box>
			<Typography variant="h5">
				Do you have any assets to upload?
			</Typography>

			<Switch
				checked={hasCustomAssets}
				onChange={e => setHasCustomAssets(e.target.checked)}
				name=""
			/>
			{hasCustomAssets ? 'Yes' : 'No'}
			<Box>
			{ hasCustomAssets && (
				<Box>
					<ReactFilestack
						apikey={'AZEPTIQ8sRBehAsatbasfz'}
						action="pick"
						componentDisplayMode={{
							type: 'button',
							customText: 'Add files',
							customClass: 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary'
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
				</Box>
			) }
			</Box>
		</Box>
	)
};

export default RequestCustomAssets
