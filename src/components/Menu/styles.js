//import make styles
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		color: 'white',
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	icon: {
		fontSize: '2rem',
	},
}));
