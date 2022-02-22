import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import { Grid, CircularProgress } from '@material-ui/core'
import useStyles from './styles'

function Posts({ setCurrentId }) {
    const classes = useStyles()
    const posts = useSelector((state) => state.posts);
    return (
        posts.length === 0 ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
            {
                posts.map((post) => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))
            }
            </Grid>
        )
    )
}

export default Posts
