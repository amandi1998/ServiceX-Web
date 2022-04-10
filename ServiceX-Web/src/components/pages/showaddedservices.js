
import { colors } from '@material-ui/core';
import React from 'react';
import{Card,Button, Container ,Row, Col} from 'react-bootstrap';



const  Showaddedservices =()=>{

return(
        <>
        <img src="/images/backin.jpg " style={{width:1508, height:200 }}/>
        <h3 style={{marginTop:-50 ,marginLeft:30, color:"white" }}> Show Added Services </h3>
        
    <Container style={{marginTop:50}}>     
        <Row style={{padding:10 }}>
    <Col>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Janaka Thilakarathna</Card.Title>
    <Card.Text>
      Nursing
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>



    <Col>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Pramudya Thilakarathna</Card.Title>
    <Card.Text>
      Carpenting
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>




    <Col>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Janaka Thilakarathna</Card.Title>
    <Card.Text>
      Eldercare 
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>




    <Col style={{marginTop:10}}>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Savindya perera </Card.Title>
    <Card.Text>
      Nursing
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>



    <Col style={{marginTop:10}}>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Samara  Thilakarathna</Card.Title>
    <Card.Text>
      Gardning 
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>



    <Col style={{marginTop:10}}>
    
    <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Nimali Perera</Card.Title>
    <Card.Text>
      Nursing
    </Card.Text>
    <Button variant="danger">Remove Service</Button>

  </Card.Body>
</Card>
    
    </Col>



 

  </Row>
</Container>




        </>
        )
}

export default Showaddedservices