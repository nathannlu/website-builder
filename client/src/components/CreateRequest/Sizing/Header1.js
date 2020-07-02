import React from 'react';

export default function() {
	return (
		<Box fullWidth>
			<Box align="center" py={3}>
				<FormatSizeIcon style={{borderRadius: '5px', boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)', color:'#E6E6FD', padding:'10px', fontSize:'50px', backgroundColor: '#585BF2'}} />
			</Box>
		</Box>
		<Box pb={3}>
			{ changeRequestType ? (
			<FormControl>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={type}
					onChange={onSelectChange}
				>
					<MenuItem value={'Ad'}>Ad</MenuItem>
					<MenuItem value={'Branding'}>Branding</MenuItem>
					<MenuItem value={'Custom'}>Custom</MenuItem>
				</Select>
			</FormControl>
			) : (
				<Box>
					<Typography style={{fontWeight: 'bold'}} variant="body1">
						{type}
					</Typography>
					<Typography variant="body1">
						Not right? <Link onClick={() => setChangeRequestType(true)}>Change request type</Link>
					</Typography>
				</Box>
			)}
		</Box>
	);
};
