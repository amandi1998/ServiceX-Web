import React from 'react'
import { Grid,Avatar,TextField, Button, Icon, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { lightGreen } from '@material-ui/core/colors';
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card';
import DeleteIcon from '@material-ui/icons/Delete';
import Popper from '@material-ui/core/Popper';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';



const  Profile =()=>{
    const classes = useStyles();
return(
  <>
    <img src="/images/back.jpg" style={{ width:5000, height:170}}/>
    <img src="/images/white.jpg" style={{ height:135,width:135,marginTop:-56, marginLeft:70}} />
    <img src="/images/avatar.jpg" style={{ height:125,width:125,marginTop:-56, borderRadius:10, marginLeft:-130}} />
    

    <h3 style={{marginLeft:230, marginTop:-60 }}> Thilan Hettiarachchi</h3>
  
    <div className={classes.root} style={{justifyContent:"left" }}>

    <Paper elevation={3} style={{Width:500, maxHeight:300, marginLeft:80}}>
        <div style={{marginTop:20,marginLeft:60 }}>
        <h4>Name :</h4>
        <h5 style={{marginLeft:150, marginTop:-33}}>Thilan Hettiarachchi </h5>
        <br></br>
        <h4>Area :</h4>
        <h5 style={{marginLeft:150, marginTop:-33}}> Moratuwa  </h5>
        <br></br>
        <h4>Contact  :</h4>
        <h5 style={{marginLeft:150, marginTop:-33}}> 0757319269</h5>
        <br></br>
        <h4>Email :</h4>
        <h5 style={{marginLeft:150, marginTop:-33}}>Thilanrox@gmail.com </h5>


     <Button variant="contained" href="" color="primary" style={{marginLeft:540, marginTop:10,width:180 , height:30 }} > Change Password </Button>

        </div>
     


    </Paper>
    <Card className={classes.root}  variant="outlined"style={{justifyContent:"right" , height:270, marginTop:40, width:300}} >
    <CardContent>
    <Button fullWidth variant="outlined" color="primary" href=""  style={{marginTop:-45}}>Change name
    </Button>
    <Button fullWidth variant="outlined" color="primary" href="" style={{marginTop:-10}}>Change Area
    </Button>
    <Button fullWidth variant="outlined" color="primary" href="" style={{marginTop:5}}>Change Contact
    </Button>
    <Button fullWidth variant="outlined" color="primary" href="" style={{marginTop:5}}>Change Email
    </Button>
   
      <Button  variant="contained"  fullWidth color="secondary" className={classes.button}  style={{marginTop:4}} startIcon={<DeleteIcon />}>Delete account</Button>

    </CardContent>
    </Card>
    </div>
   


    
  

    </>
  
)
}
export default Profile

const useStyles = makeStyles((theme) => ({
    root: {

      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
          
        margin: theme.spacing(6),
        width: theme.spacing(100),
        height: theme.spacing(60),
        
      },
    },
  }));
  