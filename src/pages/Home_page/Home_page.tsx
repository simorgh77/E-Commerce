import React ,{useState,useEffect}from "react";
import Mycarousel from "../../components/Mycarousel/Mycarousel";
import { Col, Container, Row,Button } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./Home_page.style.css";
import Brands from "../../components/Brands/Brands";
import Swiper from "../../components/Swiper/Swiper";
import axios from "axios";
import  for_man  from "../../assest/img/for_man.jpg"
import  for_woman  from "../../assest/img/for_woman.jpg"
import  for_kid2  from "../../assest/img/for_kid2.jpg"
import  for_baby4  from "../../assest/img/for_baby4.jpg"

import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
type IProducts={
  products:[
    id: string,
    name: string,
    price: number,
    image: string,
    featured: boolean,
    colors: [],
    company: string,
    description:string ,
    category:string,
  ]
}
const Home_page = () => {
  
    const history=useHistory()
    const [Products,setProducrs]=useState<IProducts>()
    useEffect(() => {
  async function fetchData() {
    await  axios.get('api/products').then(res=>{
      setProducrs(res.data)
       }).catch(err=>{
         console.log(err); 
       })
        
      }
      fetchData()
}, [])



  return (
    <>
      <div className="carousel mt-5">
          <Mycarousel />

      </div>

{       
      <Container >
        <Row >
          <div className="homepage">
            <div className="gender_categories mt-5 ">
              <div className="man flex-wrap ">
                <Col xs={12} md={3} className="my-auto"
                onClick={()=>history.push('/Product_Categoriesمردانه')} >
                  <div className="man_pic text-center bg-dark " >
                    <div>
                      <Button className='for_man_btn w-100 rounded-0' variant="outline-secondary">
                        {'پوشاک مردانه'} <BsChevronCompactLeft /></Button>
                        </div>
                        <div >
                    <img src={for_man} alt="for_man" className='img-fluid'style={{width:'100%',maxHeight:'20rem'}}/>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8} style={{maxHeight:'100%',backgroundColor:'white',width:'75%'}} className="mr-5 h-100 p-0 my-auto">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>
              
              </div>






              <div className="woman flex-row-reverse flex-wrap ">
                <Col xs={12} md={3} className="my-auto"
                onClick={()=>history.push('/Product_Categoriesمردانه')} >
                  <div className="man_pic text-center bg-dark " >
                    <div>
                      <Button className='for_woman_btn w-100 rounded-0' variant="outline-secondary">
                         <BsChevronCompactRight />{'پوشاک زنانه'}</Button>
                        </div>
                        <div >
                    <img src={for_woman} alt="for_man" className='img-fluid'style={{width:'100%',maxHeight:'20rem'}}/>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8} style={{maxHeight:'100%',backgroundColor:'white',width:'75%'}} className="mr-5 h-100 p-0 my-auto">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>
              
              </div>
 
             <div className="kid  flex-wrap ">
                <Col xs={12} md={3} className="my-auto"
                onClick={()=>history.push('/Product_Categoriesمردانه')} >
                  <div className="man_pic text-center bg-dark " >
                    <div>
                      <Button className='for_kid_btn w-100 rounded-0' variant="outline-dark">
                      {'پوشاک بچگانه'} <BsChevronCompactLeft /></Button>
                        </div>
                        <div >
                    <img src={for_kid2} alt="for_man" className='img-fluid'style={{width:'100%',height:'51vh'}}/>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8} style={{maxHeight:'100%',backgroundColor:'white',width:'75%'}} className="mr-5 h-100 p-0 my-auto">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>
              
              </div>
            
              
              <div className="baby flex-row-reverse flex-wrap ">
                <Col xs={12} md={3} className="my-auto"
                onClick={()=>history.push('/Product_Categoriesمردانه')} >
                  <div className="man_pic text-center bg-dark " >
                    <div>
                      <Button className='for_baby_btn w-100 rounded-0' variant="outline-secondary">
                         <BsChevronCompactRight />{'پوشاک نوزاد'}</Button>
                        </div>
                        <div >
                    <img src={for_baby4} alt="for_baby2" className='img-fluid'style={{width:'100%',maxHeight:'20rem'}}/>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={8} style={{maxHeight:'100%',backgroundColor:'white',width:'75%'}} className="mr-5 h-100 p-0 my-auto">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>
              
              </div>
 
  {/*
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
            <Swiper slidesPerView={4} Products={Products} setProducrs={setProducrs}/> */}
            </div> 
          </div>
        </Row>
      </Container> 
      } 
    </>
  );
};
export default Home_page;
