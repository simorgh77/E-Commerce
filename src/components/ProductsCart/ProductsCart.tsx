import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import "./ProductsCart.style.css"
import Humanize from "humanize-plus"
const ProductsCart = ({item}:any) => {
  const history=useHistory()
 
  
    return (
        <div className='w-100 h-100  d-flex text-center product_cart' >
           <Card className='product_cart_main '  style={{
           cursor:'pointer',minHeight:'18rem',backgroundColor:"transparent",border:'none'}} 
           onClick={()=>history.push(`/Product_Details${item.id}`)}>

             <div className='card-image'>
  <Card.Img variant="top" className="img-fluid product-img  h-100" src={item.image}
  style={{maxWidth:'59%',zIndex:-1}}
  />
  </div>
  <Card.Body className='d-flex w-100 h-50 flex-column justify-content-between '>
    <Card.Title >{item.name}</Card.Title>
  
    <Card.Text className=' w-100  d-flex flex-column justify-content-around'>
      <div className='w-100 mb-2'>
     {item.isexist}
     </div>
     <div className='p-2 mx-auto' style={{backgroundColor:'red',color:'white',fontSize:'12px' ,width:'42px',borderRadius:'100%'}}>
       {'%'+item.offpercent}
     </div>
       <div className=' mt-2 ' style={{color:'gray',textDecoration:'line-through red'}}>{Humanize.intComma(parseInt(item?.price as string))}{"تومان"}</div>
  

    </Card.Text>


    <div className='d-flex    w-100'>
      <div className='price w-100'>
    
      <div className='w-100'>{Humanize.intComma(parseInt(item?.price as string)-(parseInt(item?.price as string)*parseInt(item.offpercent)/100))}{"تومان"}</div>

      </div>
      <div className='w-100  d-flex justify-content-center align-items-end'>
 
<div >{item.rate}</div> 
  <BsStarFill style={{fill:'#FEA569',alignSelf:'center'}  } /> 

</div>
    </div>
 
  </Card.Body>
</Card> 
        </div>
    )
}

export default ProductsCart

