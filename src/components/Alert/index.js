//import react and its hook
import React, { useContext } from 'react';
//import alert
import { Alert as Alerts } from '@material-ui/lab';
//import context
import { Context } from '../../utils/Context';

//crete and export alert component
export const Alert = () => {
	//use context hook
	const { showError, error } = useContext(Context);

	return (
		<>
			{showError && (
				<Alerts aria-label='alert' severity='error'>
					{error}
				</Alerts>
			)}
		</>
	);
};
