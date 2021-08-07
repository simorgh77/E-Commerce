import React,{useState,useEffect} from 'react'
import {Col,Button} from "react-bootstrap"
import axios from "axios";
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import MySwiper from "../../components/Swiper/Swiper"
import "./CategoriesSwiper.style.css"
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
  gender:string
}
interface Icategory{
    item?:{    
    category:string
    image:string,
    btn_color:string,
    description:string
    rtl:boolean
},
varient?:boolean
}
const CategoriesSwiper:React.FC<Icategory|undefined> = (props) => {



if(!props.varient){   return (
  
  <div className={`${props.item?.category} category bg-white w-100 d-flex 
  ${(props.item?.rtl)?'flex-row':'flex-row-reverse'} flex-wrap h-75 
  align-items-start`} >
        
      <>
             <Col xs={12} md={3} className='p-0 m-0'>
                    <div className={`${props.item?.category}_pic `} >
                      <div className='gendere_btn'>
                        <Button className={`for${props.item?.category}_btn w-100 rounded-0`} 
                        style={{backgroundColor:props.item?.btn_color,border:'none'}}
                        variant="outline-secondary">
                          {props.item?.description} <BsChevronCompactLeft />
                          </Button>
                      </div>
                      <div className='w-100 ' >
                        <img src={props.item?.image} alt={`for${props.item?.category}`}
                        className='w-100 img-fluid'style={{height:'56.5vh'}} /> 
                      </div>
                    </div>
                  </Col>
 
                  <Col  xs={12} md={9}  className='swiper d-flex align-items-end justify-content-center '>
    <MySwiper filter={props.item?.category}/>     
                  </Col>  

            </>
         
                </div>
              
    )
 }
 else{
   
   return(
<>
</>
  //   <Col  xs={12} className='swiper mb-5 h-100' >
  //    {/* {Products?.filter(item=>(
  //         item.gender=== props.item!.category &&
  //         <Col  xs={12} md={9} key={item.id} className='swiper p-0 m-0'>
  //                 <MySwiper  Products={item}/>
  //                 </Col>

  //               ))
  //                 } */}
                  

  // </Col>
   )
 }
 }

export default CategoriesSwiper
