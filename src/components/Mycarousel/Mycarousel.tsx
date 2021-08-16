import React from 'react'
import {Carousel, Container,Row,Col, Button} from 'react-bootstrap'
import "./Mycarousel.style.css"
import carousel from "../../assest/img/carousel.jpg"
const Mycarousel= () => {
    return (
       <div className='carousel w-100 mx-auto'>
 <Carousel className='Carousel' fade variant='dark' >


  <Carousel.Item className="d-flex flex-wrap w-100" >
    <Col xs={12} md={8}>
    <img
      className="d-block w-100"
      src="https://cartzilla.createx.studio/img/home/hero-slider/03.jpg"
      alt="First slide"
  />
    </Col>

<Col xs={12} md={4}  style={{backgroundColor:'rgb(235,161,112'}} className='d-flex justify-content-center'>

  <div className=' w-100 h-100 d-flex justify-content-center 
  align-items-center align-content-between flex-column text-white addcarousel p-sm-5'>
<h3>
  {"عجله کن ! وقت تمام شد"}
</h3>
<h2 className='text-white'>
{"لباس های زنانه حراج شد"}
</h2>
    <span>
<input type="button" value="خرید لباس" className='btn-buy'/>
</span>
<span>


</span>
</div>
</Col>


  </Carousel.Item>



  <Carousel.Item className="d-flex flex-wrap">
  <Col xs={12} md={8}>
    <img
      className="d-block w-100"
      src="https://cartzilla.createx.studio/img/home/hero-slider/01.jpg"
      alt="First slide"   />
    </Col>

<Col xs={12} md={4} style={{backgroundColor:'rgb(58,175,210)'}}>
  <div className=' w-100 h-100 d-flex justify-content-center 
  align-items-center align-content-between flex-column text-white addcarousel p-sm-5'>
<span>
</span>
<h3>
  {"عجله کن ! وقت تمام شد"}
</h3>
<h2 className='text-white'>
{"لباس های زنانه حراج شد"}
</h2>
<input type="button" value="خرید لباس" className='btn-buy'/>
</div>
</Col>

  </Carousel.Item>
  <Carousel.Item className="d-flex flex-wrap">
  <Col xs={12} md={8} >
    <img
      className="d-block w-100"
      src="https://cartzilla.createx.studio/img/home/hero-slider/02.jpg"
      alt="First slide"   />
    </Col>

<Col xs={12} md={4} style={{backgroundColor:'rgb(245,177,176)'}}>
  <div className=' w-100 h-100 d-flex justify-content-center 
  align-items-center align-content-between flex-column text-white addcarousel p-sm-5'>
<span>

</span>
<h3>
  {"عجله کن ! وقت تمام شد"}
</h3>
<h2 className='text-white'>
{"لباس های زنانه حراج شد"}
</h2>
<input type="button" value="خرید لباس" className='btn-buy'/>
</div>
</Col>

  </Carousel.Item>
</Carousel>
       </div>
    )
}

export default Mycarousel
