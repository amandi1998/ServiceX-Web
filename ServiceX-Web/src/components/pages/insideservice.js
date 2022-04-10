import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MDBCol } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdbreact';
import {Grid } from '@material-ui/core';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'





const  Insideservice =()=>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return( 
  <>
  
    <Card className={classes.root} style={{marginLeft:100 , marginTop:30}} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary"  gutterBottom>
         <h4>Show Added Services</h4>
        </Typography>
       <Button variant="contained" href="/showaddedservices"color="primary"  style={{ }}> See Now </Button>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{marginLeft:350 , marginTop:-140}} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary"  gutterBottom>
         <h4>Upload a Service</h4>
        </Typography>
       <Button variant="contained" href="/uploadservice" color="primary" style={{ }}> See Now </Button>
      </CardContent>
    </Card>

    <Card className={classes.root} style={{marginLeft:600  ,marginTop:-140}} >
      <CardContent>
        <Typography className={classes.title} color="textSecondary"  gutterBottom>
         <h4> My Profile   </h4>
         <br/>
        </Typography>
       <Button variant="contained" href="/profile"  color="primary" style={{ }}> See Now </Button>
      </CardContent>
    </Card>
    <br></br>    <br></br>

<center>
<h3 >Services</h3> 
</center>
<br></br>

    <MDBCol md="6">
      <input className="form-control" type="text" style={{width:250, marginLeft:50}}  placeholder="Search Search for Hire" aria-label="Search for Hire " />
      <hr   style={{width:5000 }}/>
    </MDBCol>
    <br></br>

    <Card  style={{width:1200,   marginLeft:50}} >
      <CardContent>
       
<Container>
<Row>

    <Col>
<Card   variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/nursing.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Praveen Rathwaththa </h5>
      
      <h6> nursing</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>

    <Col>  
<Card variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/carpenting.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Sujatha perera </h5>
      
      <h6> Carpenting</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>

    <Col>  
<Card   variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/eldercare.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Samaya weerawardana</h5>
      
      <h6> Eldercare </h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>

    <Col>  
<Card  variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/concrete.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Muditha bashitha </h5>
      
      <h6> Construction</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>

    <Col>  
<Card  variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/ac_techniction.png" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Janaka Rathwaththa </h5>
      
      <h6> AC Tech </h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>



    <Col>  
<Card  variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/delivery.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Praveen sumudu </h5>
      
      <h6>Delivery</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>


    <Col>  
<Card   variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/gcutting.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Tharindu dananjaya</h5>
      
      <h6> Gardning</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>



    <Col>  
<Card  variant="outlined"style={{maxheight:400, marginTop:40, width:200}} >
    <CardContent>
      <img src="/images/painters.jpg" style={{width:170, marginLeft:-4,maxHeight:120,borderRadius:10}} />
      <h5> Mohan Savinda </h5>
      
      <h6> Painting</h6>
      
      <Button variant="outlined" href="" color="secondary" style={{ }}> Hire Now </Button> 
    </CardContent>
    </Card>
    </Col>
  </Row>
</Container>

      </CardContent>
    </Card>





  </>
      
    )
    }
    export default Insideservice
    const useStyles = makeStyles({
        root: {
          maxWidth:200,
          maxHeight:200,
        },
        body:{
          backgroundColor: "blue"
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
      