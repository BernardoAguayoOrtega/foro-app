import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
	root: {
		display: 'flex',
		margin: '1rem auto',
		width: '60%',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		padding: '1rem',
	},
	content: {
		flex: '0 1 auto',
	},
	controls: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: '1rem',
		paddingBottom: '1rem',
	},
}));
