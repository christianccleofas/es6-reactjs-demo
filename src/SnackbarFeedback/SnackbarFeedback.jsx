import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarFeedback = ({ isSnackbarFeedbackOpen, handleClose, openCartDrawer }) => {
	return (
		<Snackbar open={isSnackbarFeedbackOpen} autoHideDuration={2000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="success">
				Successfully added to cart.
                <span style={{ cursor: "pointer", marginLeft: "7px", textDecoration: "underline", fontWeight: "600" }} onClick={openCartDrawer}>Click to view cart</span>
			</Alert>
		</Snackbar>
	)
}

export default SnackbarFeedback;