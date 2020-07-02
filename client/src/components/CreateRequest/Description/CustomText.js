import React from 'react';

const CustomText = props => {
	return (
		<Box pb={4}>
			<Typography variant="h5">
				Does your design need to include text?
			</Typography>

			<Switch
				checked={hasCustomText}
				onChange={e => setHasCustomText(e.target.checked)}
			/>
			{hasCustomText ? 'Yes' : 'No'}
			<Box>
				{hasCustomText && (
					<TextField
						variant="outlined"
						margin="normal"
						fullWidth
						placeholder="What is the exact copy you want on your design?"
						multiline
						rows={5}
					/>
				)}
			</Box>
		</Box>
	)
};

export default CustomText
