import React from 'react'
import Posts from '../../Components/Posts/Posts';
import Form from '../../Components/Form/Form.js'
import useStyles from './styles.js'
import {getPosts} from '../../actions/posts'
import { useDispatch } from 'react-redux';
import { useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
const Home = ()=>{

    const [currentId, setCurrentId] = useState(null)
    const classes = useStyles();
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getPosts())
    },[dispatch, currentId]);
    return(
        <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId = {setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
            </Grid>
          </Grid>
        </Container>

      </Grow>
    )
}

export default Home