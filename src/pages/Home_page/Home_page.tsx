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
import pant from "../../assest/img/pant.jpg"
import scarf from "../../assest/img/scarf.jpg"
import brand from "../../assest/img/brand.jpg"
import Tshirt from "../../assest/img/Tshirt.jpg"
import shoe from "../../assest/img/shoe.jpg"
import glass from "../../assest/img/glass.jpg"
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
interface IProducts {
    id: string,
    name: string,
    price: number,
    image: string,
    featured: boolean,
    colors: [],
    company: string,
    description: string,
    category: string,
    gendre:string

}
interface IBrands{
  id:string
  name:string
  image:string
}
const Home_page = () => {
  const history = useHistory()
  const [Products, setProducts] = useState<IProducts[]>()
  const [brands, setbrands] = useState<IBrands[]>()
  useEffect(() => {

    async function fetchbrandsData() {
      await axios.get('api/brands').then(res => {
        setbrands(res.data.brands)   
      }).catch(err => {
        console.log(err);
     })
    }
    fetchbrandsData()
  }, [])
  return (
    <>
      <div className="carousel mt-5 text-center">
        <Mycarousel />
      </div>

        <Container className='w-100 '>
          <Row className='w-100 m-0  '>
            <div className="homepage w-100  p-0 m-0">
              <div className="gender_categories
                mt-5 w-100">

                {categories.map((item,index)=>(

                  <CategoriesSwiper 
                   item={item} key={index}/>
                  
                ))}
                  
              </div>
            </div>





            <div className="best_brands mt-5 w-100 d-flex flex-wrap flex-column">


    <span className='bg-secondry w-100 text-center bg-info' style={{fontSize:'3rem'}}>{"برند های ویژه"}  </span>
 <Col md={12} className='d-flex flex-wrap '>
   

   { brands?.map((item:IBrands)=>(
   <Col xs={6} md={3} className='d-flex m-md-0 justify-content-around 
   align-content-around flex-wrap' onClick={()=>history.push(`/Product_Categories${item.name}`)}>
   
     <Brands src={item.image} />
     
   </Col>
   ))
}


</Col>


            </div>

            <div className="new_arrival d-flex flex-column mt-5 w-100  my-5">
            <span className=' bg-info text-center '
             style={{fontSize:'3rem'}}>{"جدیدترین ها "} </span>
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper   varient={true}/>
              </Col>
              </div>



<div className='w-100   d-flex flex-wrap flex-column'>
<div className=' bg-info  text-center '
             style={{fontSize:'3rem'}}>{"گالری محصولات "} </div>
             <div className='d-flex  flex-wrap'>
    
  <Col xs={12} md={4} className='products_galary'>
<img src={pant} className='img-fluid w-100' alt="pant photo"
 style={{height:'50vh'}} />
  </Col>
  <Col xs={12} md={8} className='d-flex'>
  <div className='w-100 '>
  <Col xs={3} md={2} className='w-100 products_galary'>
  <img src={scarf} className='img-fluid w-100' alt="pant photo"
 style={{height:'25vh'}} />
  </Col>
  <Col xs={3} md={2} className='w-100 products_galary'>
  <img src={Tshirt} className='img-fluid w-100' alt="pant photo"
 style={{height:'25vh'}} />
  </Col>
  </div>

  <div className='w-100 '>
  <Col xs={3} md={2} className='w-100 products_galary'>
  <img src={shoe} className='img-fluid w-100' alt="pant photo"
 style={{height:'25vh'}} />
  </Col>
  <Col xs={3} md={2} className='w-100 products_galary'>
  <img src={glass} className='img-fluid w-100' alt="pant photo"
 style={{height:'25vh'}} />
  </Col>
  </div>

</Col>
</div>
</div>

            <div className="w-100 d-flex flex-column Best_selllers my-5">
            <span className='bg-info text-center ' style={{fontSize:'3rem'}}>{"شگفت انگیز"}</span>  
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper   varient={true}/>
              </Col>
            </div>

      
           


             <div className="offer_of_day d-flex flex-column">
             <span className='bg-info text-center ' style={{fontSize:'3rem'}}>{"حراج روز"}</span>  
              <Col xs={12} className='bg-white 'style={{height:'55vh'}} >    
    <CategoriesSwiper   varient={true}/>
              </Col>
             </div>


</Row>
</Container>
</>

  
  );
};
export default Home_page;
