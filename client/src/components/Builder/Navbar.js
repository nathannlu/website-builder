import React, {useState, useEffect} from 'react';
import {Button as MaterialButton, FormControlLabel, Switch, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Snackbar} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import {useEditor} from '@craftjs/core';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';
import axios from 'axios';


const Navbar = props => {
	const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

	useEffect(() => {
		console.log(query);
	}, [])

  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState(null);

	return (
		<div className="fixed" style={{zIndex: 99, bottom: '28px', left: '50%', transform: 'translateX(-50%)'}}>
			<MaterialButton
				className="copy-state-btn"
				variant="contained"
				color="seconday"
				onClick={() => {
					const json = query.serialize();
					props.saveToDatabase(lz.encodeBase64(lz.compress(json)));
					copy(lz.encodeBase64(lz.compress(json)));
					setSnackbarMessage("Progress saved!")
				}}
			>
				<SaveIcon className="mr-2" />
				Save changes
			</MaterialButton>
			<Snackbar
				autoHideDuration={1000}
				anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
				open={!!snackbarMessage}
				onClose={() => setSnackbarMessage(null)}
				message={<span>{snackbarMessage}</span>}
			/>
		</div>
	)
};

export default Navbar;
