import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {TextField} from '@material-ui/core'
import {Link} from 'react-router-dom';




const  Forgetpassword =()=>{
  const classes = useStyles();
 
  return(

    <center>

    <Card className={classes.root} variant="outlined" align="center" >
    <CardContent>
      <br></br>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h3> Forget password</h3>
      </Typography>
      <img src ="/images/forget.jpg" style={{maxWidth: 125, maxHeight:130}}/>

      <Typography className={classes.pos} color="textSecondary">
      <h5> PLease enter your Email here </h5>
      </Typography>
      <Typography variant="body1" component="p">
        We will help you to get backUp 
        <br />
        <br></br>
        <TextField label="Email" placeholder="Enter your Email" style={{width:300}}  required/>
      </Typography>
    </CardContent>
    <br></br>
    <CardActions>
   
      <Button variant="outlined" color="primary" style={{ marginLeft:120 }} >
      <Link     style={{textDecoration:"none"}}  to={"/afterforgetpassword"}>Send Now !</Link>
      </Button>
 
    </CardActions>
  </Card>


</center>
  )
  }
export default  Forgetpassword



const useStyles = makeStyles({
  root: {
    maxWidth: 375,
    marginTop:60,
    height:500,
    justifyContent:"center"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});