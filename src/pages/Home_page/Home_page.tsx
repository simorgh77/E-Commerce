import React ,{useState,useEffect}from "react";
import Mycarousel from "../../components/Mycarousel/Mycarousel";
import { Col, Container, Row } from "react-bootstrap";
import { Link,useHistory } from "react-router-dom";
import "./Home_page.style.css";
import Brands from "../../components/Brands/Brands";
import Swiper from "../../components/Swiper/Swiper";
import axios from "axios";

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
      <Container>
        <Row>
          <div className="homepage">
            <div className="gender_categories mt-5">
              <div className="man flex-wrap">
                <Col xs={12} md={4} onClick={()=>history.push('/Product_Categoriesمردانه')} >
                  <div className="man_pic text-center" >
                      <button className='btn btn-transparent bold'>{'مردانه'}</button>
                  </div>
                </Col>
                <Col xs={12} md={8} className="m-0 p-0 ">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>
              
              </div>

              {/* <div className="woman flex-row-reverse">
                <Col xs={12} md={8} className="m-0 p-0 ">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>

                <Col xs={12} md={4} onClick={()=>history.push('/list_woman')} >
                <div className="woman_pic text-center">
                <span className='mx-auto'>زنانه</span>
                      
                  </div>
                </Col>
              </div>

              <div className="kid ">
                <Col xs={12} md={8} className="m-0 p-0 ">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>

                <Col xs={12} md={4} onClick={()=>history.push('/list_kid')} >
                <div className="kid_pic text-center">
                <span className='mx-auto'>بچگانه</span>
                      </div>
                </Col>
              </div>

              <div className="baby flex-row-reverse">
                <Col xs={12} md={8} className="m-0 p-0 ">
                  <Swiper slidesPerView={3} Products={Products} setProducrs={setProducrs}/>
                </Col>

                <Col xs={12} md={4} onClick={()=>history.push('/list_baby')} >
                <div className="baby_pic text-center">
                <span className='mx-auto'>نوزاد</span>
                      </div>      
                </Col>
              </div>
             </div>


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