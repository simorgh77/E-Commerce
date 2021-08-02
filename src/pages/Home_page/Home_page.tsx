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
import brand from "../../assest/img/brand.jpg"
import CategoriesSwiper from "../../components/CategoriesSwiper/CategoriesSwiper";
import categoriesSwiper from "../../components/CategoriesSwiper/CategoriesSwiper";
import axios from "axios";
const categories=[
    {
      category:"man",
      image:for_man,
      btn_color:"rgb(199,211,199)",
      description:'پوشاک مردانه',
      rtl:true
  },
    {
      category:"woman",
      image:for_woman,
      btn_color:"rgb(241,238,229)",
      description:'پوشاک زنانه',
      rtl:false
  },
    {
      category:"kid",
      image:for_kid2,
      btn_color:"rgb(243,226,216)",
      description:'پوشاک بچگانه',
      rtl:true
  },
    {
      category:"baby",
      image:for_baby4,
      btn_color:"rgb(164,153,163)",
      description:'پوشاک نوزاد',
      rtl:false
  }
]
type IProducts = {
  products: [
    id: string,
    name: string,
    price: number,
    image: string,
    featured: boolean,
    colors: [],
    company: string,
    description: string,
    category: string,
  ]
}
const Home_page = () => {
  
  const history = useHistory()
  const [Products, setProducts] = useState<IProducts>()
  useEffect(() => {
    async function fetchData() {
      await axios.get('api/products').then(res => {
        setProducts(res.data)
      }).catch(err => {
        console.log(err);
      })

    }
    fetchData()
  }, [])



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





            <div className="best_brands mt-5 w-100 d-flex flex-wrap flex-column">


    <span className='bg-secondry text-center bg-info' style={{fontSize:'3rem'}}>{"برند های ویژه"}  </span>
 
  <Col  md={12} className='d-flex  justify-content-around align-content-around flex-wrap'>
   
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/01.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/04.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/04.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/12.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/12.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/05.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/09.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/09.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/09.png'}/>
    <Brands src={'https://cartzilla.createx.studio/img/shop/brands/09.png'}/>


    </Col>

            </div>

            <div className="new_arrival d-flex flex-column mt-5 w-100  my-5">
            <span className=' bg-info text-center '
             style={{fontSize:'3rem'}}>{"جدیدترین ها "} </span>
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper  varient={true}/>
              </Col>
              </div>



            <div className="w-100 d-flex flex-column Best_selllers my-5">
            <span className='bg-info text-center ' style={{fontSize:'3rem'}}>{"شگفت انگیز"}</span>  
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper  varient={true}/>
              </Col>
            </div>

      
           


             <div className="offer_of_day d-flex flex-column">
             <span className='bg-info text-center ' style={{fontSize:'3rem'}}>{"حراج روز"}</span>  
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper  varient={true}/>
              </Col>
             </div>


</Row>
</Container>
</>

  
  );
};
export default Home_page;
