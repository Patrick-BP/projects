import React, { useState, useEffect } from 'react'
import { Avatar , Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import userStyles from './styles';
import Input from './Input';
import Icon from './Icon.js';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
const Auth = ()=>{


    const state = null;
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(false);
    const dispatch =  useDispatch();
    const navigate = useNavigate()
    const classes = userStyles()
    const handleShowPassword = ()=> setShowPassword((prev)=>!prev)
    const handleChange =()=>{}
    const handleSubmit = ()=>{}
    const switchMode = ()=>{
        setIsSignup((prev)=>!prev)
    }
    const GoogleSuccess = async (res)=>{
        console.log(res);
        const result = jwt_decode(res?.credential);
        const token = res?.credential;
        try{
            dispatch({type:'AUTH', data:{result, token}})
            navigate('/')
        }catch(error){
            console.log(error);
        }
    };
    const GoogleFailure = (error)=>{
        console.log(error);
        console.log("Google signin was unsuccessfull. Try again later");
    }
    return(
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign UP ' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container pacing={2}>
                        { isSignup && (
                            <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half/>
                            </>
                            
                       ) }
                         <Input name="email" label="email Address" handleChange={handleChange} type="email"/>
                        <Input name="password" label="password" handleChange={handleChange} handleShowPassword={handleShowPassword} type={showPassword? "text" :"password"}/>
                        {isSignup && <Input name="confirmPassord" label="Repeat Password" handleChange={handleChange} type="password"/>}

                    </Grid>
                  
                    <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary'>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId='127530739313-n6fh8midfkm6tcu6oino4l8hc3psihhe.apps.googleusercontent.com'
                        render = {renderProps=>(
                            <Button 
                            type='submit' 
                            className={classes.googleButton} 
                            fullWidth 
                            onClick={renderProps.onClick} 
                            disabled ={renderProps.disabled} 
                            color='primary' 
                            startIcon={<Icon />} 
                            variant="contained">
                                Google Sign In
                            </Button>
                            
                        )}
                        onSuccess={GoogleSuccess}
                        onFailure={GoogleFailure}
                        cookiePolicy="single_host_origin"
                    />
                    <Grid container justifyContent ='flex-end'>
                            <Button onClick={switchMode}>
                                {isSignup ? 'Already have an Account? SignIn' : "I don't have an Account Sign Up"}
                            </Button>
                    </Grid>
                </form>
            </Paper>

        </Container>
    )
}

export default Auth