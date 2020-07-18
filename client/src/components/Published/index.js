import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Editor, Frame } from '@craftjs/core';
import lz from 'lzutf8';

import { Container } from '../user/Container';
import { Button } from '../user/Button';
import { Image } from '../user/Image';
import { Text } from '../user/Text';
import { Biography } from '../user/Biography';
import { Footer } from '../user/Footer';
import { Features } from '../user/Features';

const Published = props => {
	const [json, setJson] = useState('');
	const [enabled, setEnabled] = useState(false);
	const { title, pageName } = props.match.params;

	useEffect(() => {
		axios.get(`/api/websites/${title}/${pageName}`).then(res => {
			const base64 = res.data.pages.find(page => page.pageName === pageName).pageData
			const uint8array = lz.decodeBase64(base64);
			const json = lz.decompress(uint8array);
			
			setJson(json);
			setEnabled(true);
		});
	},[])

	return (
		<div>
			<Editor enabled={false} resolver={{Image, Biography, Footer, Features, Button, Text, Container}}>
				{enabled && ( 
					<Frame data={json}>

					</Frame>
				)}
			</Editor>
		</div>
	);
};

export default Published;
