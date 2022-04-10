import React from 'react';
import{Card,Button,Form, Container ,Row, Col} from 'react-bootstrap';



const  UploadServices =()=>{

return(
    <>
    <img src="/images/backupload.jpg " style={{width:1358, height:200 }}/>
    <h3 style={{marginTop:-50 ,marginLeft:580, color:"white" }}> Upload Services </h3>

  < div style={{padding:45 , marginTop:20 , border:10}}>

    <Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label> First Name</Form.Label>
      <Form.Control type="name" placeholder="Enter  First Name" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>Last Name</Form.Label>
      <Form.Control placeholder="Enter the Lastname" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Description</Form.Label>
    <Form.Control placeholder="Enter the Description" />
  </Form.Group>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Area</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Upload Images </Form.Label>
      <Form.File id="exampleFormControlFile1"  style={{marginTop:5}}/>

    </Form.Group>
  </Form.Row>

 <br/><br/>

  <Button variant="primary" type="submit" style={{width:120 , }} > Add </Button>
  <Button variant="danger"  href="/insideservice" style={{width:120 , marginLeft:20}} color="secondary" type="submit"> Cancel </Button>
</Form>
</ div>
    </>
)



};

export default UploadServices