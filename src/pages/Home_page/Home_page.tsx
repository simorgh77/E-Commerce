import React, { useState, useEffect } from "react";
import Mycarousel from "../../components/Mycarousel/Mycarousel";
import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./Home_page.style.css";
import Brands from "../../components/Brands/Brands";
import Swiper from "../../components/Swiper/Swiper";
import for_man from "../../assest/img/for_man.jpg"
import for_woman from "../../assest/img/for_woman.jpg"
import for_kid2 from "../../assest/img/for_kid2.jpg"
import for_baby4 from "../../assest/img/for_baby4.jpg"
import CategoriesSwiper from "../../components/CategoriesSwiper/CategoriesSwiper";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import categoriesSwiper from "../../components/CategoriesSwiper/CategoriesSwiper";

const categories=[
    {
      category:"man",
      image:for_man,
      btn_color:"rgb(199,211,199)",
      description:'پوشاک مردانه'
  },
    {
      category:"woman",
      image:for_woman,
      btn_color:"rgb(241,238,229)",
      description:'پوشاک زنانه'
  },
    {
      category:"kid",
      image:for_kid2,
      btn_color:"rgb(243,226,216)",
      description:'پوشاک بچگانه'
  },
    {
      category:"baby",
      image:for_baby4,
      btn_color:"rgb(164,153,163)",
      description:'پوشاک نوزاد'
  }
]
const Home_page = () => {

  const history = useHistory()
 

  return (
    <>
      <div className="carousel mt-5 text-center">
        <Mycarousel />
      </div>

        <Container className='w-100 container-fluid '>
          <Row className='w-100 m-0   '>
            <div className="homepage w-100  p-0 m-0">
              <div className="gender_categories  mt-5 w-100 ">

                {categories.map((item,index)=>(

                  <CategoriesSwiper  key={index} item={item}/>

                ))}
                  
              </div>
            </div>
          </Row>
        </Container>
</>

                /* <div className="man flex-wrap w-100 bg-info m-0">
                  <Col xs={12} md={3} className=""
                    onClick={() => history.push('/Product_Categoriesمردانه')} >
                    <div className="man_pic text-center bg-dark " >
                      <div>
                        <Button className='for_man_btn w-100 rounded-0' variant="outline-secondary">
                          {'پوشاک مردانه'} <BsChevronCompactLeft /></Button>
                      </div>
                      <div className='w-100 p-0 m-0'>
                        <img src={for_man} alt="for_man" className='img-fluid' style={{ width: '100%' }} />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={9} style={{  backgroundColor: 'white', width: '75%' }} className="m-0 h-100 p-0 my-auto">
                    <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs} />
                  </Col>

                </div>






                <div className="woman flex-row-reverse flex-wrap ">
                  <Col xs={12} md={3} className="my-auto"
                    onClick={() => history.push('/Product_Categoriesمردانه')} >
                    <div className="man_pic text-center bg-dark " >
                      <div>
                        <Button className='for_woman_btn w-100 rounded-0' variant="outline-secondary">
                          <BsChevronCompactRight />{'پوشاک زنانه'}</Button>
                      </div>
                      <div >
                        <img src={for_woman} alt="for_man" className='img-fluid' style={{ width: '100%', maxHeight: '20rem' }} />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={8} style={{ maxHeight: '100%', backgroundColor: 'white', width: '75%' }} className="mr-5 h-100 p-0 my-auto">
                    <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs} />
                  </Col>

                </div>

                <div className="kid  flex-wrap ">
                  <Col xs={12} md={3} className="my-auto"
                    onClick={() => history.push('/Product_Categoriesمردانه')} >
                    <div className="man_pic text-center bg-dark " >
                      <div>
                        <Button className='for_kid_btn w-100 rounded-0' variant="outline-dark">
                          {'پوشاک بچگانه'} <BsChevronCompactLeft /></Button>
                      </div>
                      <div >
                        <img src={for_kid2} alt="for_man" className='img-fluid' style={{ width: '100%', height: '51vh' }} />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={8} style={{ maxHeight: '100%', backgroundColor: 'white', width: '75%' }} className="mr-5 h-100 p-0 my-auto">
                    <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs} />
                  </Col>

                </div>


                <div className="baby flex-row-reverse justify-content-center flex-wrap w-100 bg-info">
                  <Col xs={12} md={4} className="my-auto w-100 bg-danger"
                    onClick={() => history.push('/Product_Categoriesمردانه')} >
                    <div className="man_pic text-center bg-dark w-100" >
                      <div>
                        <Button className='for_baby_btn w-100 rounded-0' variant="outline-secondary">
                          <BsChevronCompactRight />{'پوشاک نوزاد'}</Button>
                      </div>
                      <div >
                        <img src={for_baby4} alt="for_baby2" className='img-fluid' style={{ width: '100%', maxHeight: '20rem' }} />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={8} style={{ maxHeight: '100%', backgroundColor: 'white', width: '100%' }} className="mr-5 h-100 p-0 my-auto">
                    <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs} />
                  </Col>

                </div> */

                /*
            <div className="best_brands mt-5">
<div>
<span>برند های ویژه</span>
  <Col  md={12} className='d-flex justify-content-around align-content-around flex-wrap'>
   
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    </Col>
    </div>

            </div>

            <div className="new_arrival mt-5  ">
                  <span>جدیدترین ها</span>
              <Swiper slidesPerView={4} Products={Products} setProducrs={setProducrs}/>
            </div>







            <div className="Best_selllers">
            <span>شگفت انگیز</span>
            <Swiper slidesPerView={4} Products={Products} setProducrs={setProducrs}/>
            </div>

            <Col md={12} className='mt-5'>
              <span >محصولات</span>
            <div className="products my-5">

              <Col md={4} >
            <div className="one">
                </div>
                </Col>

                <Col md={8} className="">
              <div className="four h-100">
                    <div className="first "></div>
                    <div className="second"></div>
                    <div className="third"></div>
                    <div className="fourth"></div>
              </div>
              </Col>
            </div>
            </Col>
            <div className="offer_of_day">
            <span>حراج روز</span>
            <Swiper slidesPerView={4} Products={Products} setProducrs={setProducrs}/>
            </div>


            <div className="customer_reviews">
            <span>نظرات کاربران</span>
            <Swiper slidesPerView={4} Products={Products} setProducrs={setProducrs}/> */
           
        
  
  );
};
export default Home_page;
