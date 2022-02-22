import React from 'react'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { Container, Grid, Typography, Grow, AppBar} from '@material-ui/core'
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { getPosts } from './actions/posts';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])

    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit' className={classes.appBar}>
                <Typography variant='h2' align='center' className={classes.heading}>Memories</Typography>
                <Typography variant='h6' align='center'>Things end but memories stay forever &#128151;</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justifyContent='space-between' alignItems='center' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App
