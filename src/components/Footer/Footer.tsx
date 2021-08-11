import React from 'react'
import { Form, FormControl, Button, ListGroup } from "react-bootstrap"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap'
import { BsChevronCompactLeft } from "react-icons/bs";
import "./footer.style.css"
const Footer = () => {
  return (
    <footer className='d-flex flex-column w-100' style={{ backgroundColor: '#2b3445' }}>


      <Container className='w-100 h-100'>
        <Row className='w-100 mx-auto d-flex text-white'>
        <Col xs={12} md={12} style={{fontSize:'110%'}} 
        className='  text-center w-100 d-flex flex-column justify-content-between '>
          <Col xs={9} md={12} className=' mb-3 mt-4 mx-auto'>{"مارا در شبکه های اجتماعی دنبال کنید"}</Col>
          <Col xs={3} md={12} className='w-100 d-flex my-auto mx-auto justify-content-around' 
          style={{fontSize:'2rem'}} ><FaInstagram/> <FaTwitter/> <FaLinkedin/> </Col>
        </Col>


        <Col  md={12} className='mt-5 d-flex flex-wrap'>
          <Col xs={6} md={12} className='d-flex flex-wrap'>
            
            <ul className='d-flex flex-wrap  w-100 justify-content-between'>
            <li className=''>{" پشتیبانی مشتریان "}</li>
            <li className=''>{"سوالات متداول"}</li>
            <li className=''>{"شرایط اقساطی"}</li>
            <li className=''>{"شرایط مرجوعی"}</li>
            </ul></Col>
          <Col xs={6} md={12} className='d-flex flex-wrap '>

          <ul className='d-flex flex-wrap w-100 justify-content-between '>
            <li className=''>{"شرایط استفاده"}</li>
            <li className=''>{"حریم خصوصی"}</li>
            <li className=''>{"درباره ما"}</li>
            <li className=''>{"تماس با ما"}</li>
            </ul>
          </Col>
        </Col>




        <Col md={12} className='d-flex'>
           <Col md={4} className='text-center'><img className=' ' src="https://www.keshmoon.com/images/template/footer/follow-up-icon.svg" alt="" /> <span>{"پیگیری سفارش"}</span></Col>
           <Col md={4} className='text-center'><img className=' ' src="https://www.keshmoon.com/images/template/footer/shipping-icon.svg" alt="" /> <span>{"اطلاعات ارسال"}</span></Col>
           <Col md={4} className='text-center'><img className=' ' src="https://www.keshmoon.com/images/template/footer/return-icon.svg" alt="" /> <span>{"اطلاعات مرجوعی"}</span></Col>
        </Col>
        <Col  md={12} className='d-flex flex-column justify-content-center mt-5'>
<Col md={6}></Col>
          <Form>
  <Form.Group className="mb-3 w-75 mx-auto" controlId="formBasicEmail">
    <Form.Control type="email" className='text-center' placeholder="برای پیگیری اخبار ایمیل خود را وارد نمایید" />
  </Form.Group>
  </Form>
          <input type="button" value="ثبت ایمیل" className='btn btn-success  mx-auto ' />
        </Col>

        </Row>
      </Container>





      <div className="copyright text-white w-100 bg-dark text-center p-3 sticky-bottom">
        کلیه حقوق سایت متعلق به طه خراسانی میباشد
      </div>
    </footer>
  )
}

export default Footer
