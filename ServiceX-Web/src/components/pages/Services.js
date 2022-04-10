import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'
import Cards from '../Cards';
import image1 from '/repo/react-servicepro-website/src/img/car2.jpg'
import image2 from '/repo/react-servicepro-website/src/img/car1.jpg'
import image3 from '/repo/react-servicepro-website/src/img/car3.jpg'


export default function Services() {
  return(
//Carousel start ............ 
    
 <>

    <Carousel>
  <Carousel.Item style={{height:300}}>
    <img
      className="d-block w-100"
      src={image2}
      alt="First slide"/>
    <Carousel.Caption>
      <h3 > Serch for your need !! </h3>
      <p>Garanteed and Safest Way To Solve you  Problms </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:300}}>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"/>

    <Carousel.Caption>
      <h3>More Friendly, More Safe </h3>
      <p>Providing The Reliable Service To All Our Customers </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{height:300}}>  
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"/>

    <Carousel.Caption>
      <h3>Only One Click Of A Button </h3>
      <p> Use Our Mobile App To Reach Even Faster ! </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
 
<Cards/>


 
 </>



//Carousel end .............. 
  
  

  )

}


