import React from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

const QuantityButtonGroup = ({ qty }) => {
	const [quantity, setQuantity] = React.useState(qty = 0);
	return (
		<div style={{ flex: '1' }}>
			<IconButton className="test" size="small" onClick={setQuantity(quantity - 1)}>
				<RemoveIcon fontSize="small" />
			</IconButton>
			<span className="grp-btn-text">{setQuantity}</span>
			<IconButton className="test" size="small">
				<AddIcon fontSize="small" />
			</IconButton>
		</div>
	)
}

export default QuantityButtonGroup;