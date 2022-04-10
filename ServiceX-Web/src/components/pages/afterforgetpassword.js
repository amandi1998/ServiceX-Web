import { Grid,Avatar,TextField, Button, Icon, Typography} from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { green, lightBlue } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const  Afterforgetpassword =()=>{
    const classes = useStyles();

    return (
     
      <div className={classes.root} style={{justifyContent:"center"}}>

        <Paper elevation={3} style={{Width:500, maxHeight:450}}>

                <img src="/images/email.jpg"  style={{maxHeight:300, Width:350, marginTop:2, marginLeft:250}}/>
        <center>


        <h3 > We Have send the you rhe Email to reset your password .</h3>
        <h4 style={{color:"lightBlue" , fontStyle:"strong"}} >Check your Emails </h4>

        <br/>
        <Button variant="outlined" color="primary" >
      <Link style={{textDecoration:"none"}}  to={"/login"}>Go To Login</Link>
      </Button>
        </center>


   
      


        </Paper>
     
      
      </div>
     
    );
  }




export default Afterforgetpassword
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(100),
        
      },
    },
  }));
  