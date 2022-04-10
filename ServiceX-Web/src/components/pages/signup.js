import { Grid, Paper,Avatar,TextField, Button, Icon,Typography} from '@material-ui/core'
import React from 'react'
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Forgetpassword from './forgetpassword';
import {Link} from 'react-router-dom';


const  Signup =()=>{
   
   const PaperStyle={padding : 25, height:'82vh',  width:340, margin:"20px auto" }
    return(
       
       <Grid>
           <Paper elevation={10} style={PaperStyle}>
             <Grid align="center">
               <Avatar style={{backgroundColor:"green"}}><AccountCircleSharpIcon/></Avatar>
               <br/>
               <h3>Signup </h3>

               <TextField label="Name" placeholder="Enter your Name" fullWidth  required/>
                   <br/>
               <TextField label="Phone No" placeholder="Enter your Mobile No" fullWidth  required/>
              <br/>
             <TextField label="Email" placeholder="Enter your Email" fullWidth  required/>
             <br/><br/>
             <TextField label="Password" placeholder="Enter your Password" type="password" fullWidth  required/>
             <br/>
               </Grid>
       
       <br/>
       <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"/>
        }label="Remember me "/>
         
         <br/><br/>
          <Button type='submit' color='primary' variant="contained" fullWidth >Sign In </Button>               

            <br/><br/>
          <Typography>
          Already Have An Account?
          <Link to={"/login"}> Login Now ! </Link>
          </Typography>
           </Paper>
       </Grid>
    )
} 
export default  Signup