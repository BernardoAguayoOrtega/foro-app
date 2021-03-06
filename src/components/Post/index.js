//import react and its hooks
import React, { useContext, useEffect, useState } from 'react';
// use params hook
import { useParams } from 'react-router-dom';
//import context
import { Context } from '../../utils/Context';
//import use styles hook
import { useStyles } from './styles';
//import the card component
import Card from '@material-ui/core/Card';
//import card content component
import CardContent from '@material-ui/core/CardContent';
//import typography component
import Typography from '@material-ui/core/Typography';
//use spring animations
import { Spring } from 'react-spring/renderprops';
//import commits
import { Commits } from '../Commits';

//create post component and export it
const Post = () => {
	//use params hook
	const params = useParams();
	//use context
	const { posts } = useContext(Context);
	//use stat to save the post
	const [post, setPost] = useState(undefined);
	//use state to save the title specific post
	const [title, setTitle] = useState('');
	//use state to save the content of specific post
	const [content, setContent] = useState('');
	//use state for last update
	const [lastUpdate, setLastUpdate] = useState('');

	//use effect to find the post
	useEffect(() => {
		//save the post
		setPost(posts.find((post) => post._id === params.post));
	}, [params.post, post, posts]);

	//use effect to set the title and the content
	useEffect(() => {
		//save the title
		setTitle(post?.title);
		//save the content
		setContent(post?.content);
		//save the last update
		setLastUpdate(post?.updatedAt);
	}, [post]);

	//use styles
	const classes = useStyles();

	return (
		<>
			<Card aria-label='post' className={classes.root} variant='outlined'>
				{/*Card container up*/}
				<CardContent aria-label='content of the post'>
					{/*Card content down*/}
					{/*title*/}
					<Typography
						aria-label='title of the post'
						align='center'
						className={classes.title}
						variant='h1'>
						{title}
					</Typography>
					{/*content with an animation*/}
					<Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
						{(props) => (
							<div style={props}>
								{
									<Typography
										aria-label='content of the post'
										className={classes.post}
										variant='body1'
										component='p'>
										{content}
									</Typography>
								}
							</div>
						)}
					</Spring>
					{/*last update*/}
					<Typography
						aria-label='last update of the post'
						align='right'
						className={classes.lastUpdate}
						variant='body2'
						component='p'>
						lasted update: {lastUpdate}
					</Typography>
				</CardContent>
			</Card>
			{/*the commits, pass data to the commits*/}
			<Commits post={post?._id} />
		</>
	);
};

export default Post;
