import react from 'react'
import {Card,Col,Container,Row} from 'react-bootstrap'

const  Servicem =()=>{
   return(

    <>
        <img src="/images/bgservices.png" style={{ width:5000, height:170}}/>
        <h2 style={{marginTop:-50 ,marginLeft:580, color:"white" }}> Services </h2>
        <Card style={{width:1000,  marginLeft:200, marginTop:40 }}> 
        
        
        
            <Card.Body>
            <Container>        
                   <Row>
                   <Col sm>
                <img  src="/images/avatar.jpg"   style={{ width:150, height:150,borderRadius:50}} />

                   </Col>
                   <Col sm>
                    <h5>Provider :</h5>  
                    <h5 style={{marginLeft:150 ,marginTop:-30}}> Nursing </h5> 
                    <br/>
                    <h5>Area :</h5>
                    <h5 style={{marginLeft:150 ,marginTop:-30}}> Colombo </h5> 
                    <br/>
                    <h5>Description :</h5>
                    <h5 style={{marginLeft:150 ,marginTop:-30}}> Nursing for hiring for certain areas  </h5> 
                    <br/>
                    <h5>Contact :</h5>
                    <h5 style={{marginLeft:150 ,marginTop:-30}}> 0772658455 </h5> 
                    <br/>
                    
                   </Col>
                 </Row>
                 <Row>
                    <Col>
                     <img src="/images/nursing1.jpg" style={{ borderRadius:10,width:180, height:180 }}/>
                    </Col>
                    <Col>
                    <img src="/images/nursing.jpg" style={{borderRadius:10, width:180, height:180 }}/>
                     </Col>
                     <Col>
                     <img src="/images/eldercare.jpg" style={{ width:180, borderRadius:10,height:180 }}/>
                     </Col>
                     <Col>
                     <img src="/images/painters.jpg" style={{ width:180, height:180,borderRadius:10 }}/>
                     </Col>

                 </Row>
               </Container>
               </Card.Body>
        </Card>


    </>
   )



} 
export default  Servicem