import React from 'react'
import useStyles from './styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; 
import moment from 'moment'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/posts'

function Post({ post, setCurrentId }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const deletePostConfirm = () => {
        
        if(window.confirm("Did you create this post? Press ok only if you are creator of this post")) {
            if(window.confirm("Are you sure you want to delete this post?")) {
                dispatch(deletePost(post._id))
            }
        }
        else {
            window.alert("Sorry you can't delete this post")
        }
    }
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='h6'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{ color: 'white' }} 
                    size='small' 
                    onClick={() => setCurrentId(post._id)}
                >
                    <MoreHorizIcon fontSize='default'/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant='body1' color='textPrimary' component='p'>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize='small'/>
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={deletePostConfirm}>
                    <DeleteIcon fontSize='small'/>
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
