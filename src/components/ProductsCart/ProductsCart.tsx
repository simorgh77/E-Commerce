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
  
    <Card.Text className=' w-100  d-flex justify-content-between'>
      <div className='w-100'>
     {item.isexist}
     </div>
     
  

    </Card.Text>


    <div className='d-flex  mt-3  w-100'>
      <div className='w-100'>{Humanize.intComma(parseInt(item?.price as string))}{"تومان"}</div>
      <div className='w-100 d-flex justify-content-center'>
 
 {item.rate}
  <BsStarFill style={{fill:'#FEA569'}  } /> 

</div>
    </div>
 
  </Card.Body>
</Card> 
        </div>
    )
}

export default ProductsCart

