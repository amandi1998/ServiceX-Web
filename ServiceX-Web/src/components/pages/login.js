import { Grid, Paper,Avatar,TextField, Button, Icon, Typography} from '@material-ui/core'
import React from 'react'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';

const  Login =()=>{
   
   const PaperStyle={padding : 25, height:'80vh',  width:340, margin:"20px auto" }
    return(
       
       <Grid>
           <Paper elevation={10} style={PaperStyle}>
             <Grid align="center">
               <Avatar style={{backgroundColor:"green"}}><LockOutlinedIcon/></Avatar>
               <h4>Sign In </h4>

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
          <br/>  <br/><br/>
          <Typography>

         <Link to = {"/forgetpassword"}> Forget Password?</Link>

          </Typography>
          <br/>
          <Typography>
          Dont Have An Account?
          <Link to={"/signup"}>Create now!</Link>

          </Typography>
           </Paper>
       </Grid>
    )
} 
export default  Login