import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Visibility from '@material-ui/icons/Visibility';
import userStyles from './styles';

function Input({name, handleChange, handleShowPassword, type, autoFocus, label,  half}) {
    const classes = userStyles()
  return (
    <Grid item xs={12} sm={half ? 6 : 12} className={classes.root}>
        <TextField
        
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps={name==='password' ? {
                endAdornment:(
                <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                    {type === 'password' ? <Visibility />:<VisibilityOff/>}
                    </IconButton>
                 </InputAdornment>
                ),   
            }: null}
        />
    </Grid>
  )
}

export default Input