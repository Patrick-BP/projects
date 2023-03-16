import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Toolbar, Typography, Button}from '@material-ui/core';
import useStyles from './styles';
import memories from '../../images/memories.png';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBar = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{
        const token = user?.token

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location]);

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        navigate('/auth');
        setUser(null)
    }
    return(
        <AppBar position='static' color='inherit' className={classes.appBar}>
            <div className={classes.brandContainer}>
                <Typography variant="h2" component={Link} to="/" align="center" className={classes.heading}>Memories</Typography>
        <img src={memories} alt="memories" height='60' className={classes.images}></img>
            </div>
        <Toolbar className={classes.toolbar}>
            {user? (
                <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.picture} />
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary"  onClick={logout}>Logout</Button>
                </div>
            ):(
                <Button variant="contained" component={Link} to="/auth"  color="primary">Sign In</Button>
            )}
        </Toolbar>
      </AppBar>
    )
};

export default NavBar