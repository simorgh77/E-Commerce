import React from 'react'
import {Card,Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import "./ProductsCart.style.css"
const ProductsCart = ({item}:any) => {
  const history=useHistory()
  {
  console.log(item)
   }

  
    return (
        <div className='w-100 h-100 product_cart'>
           <Card className='product_cart_main w-100 h-75'  style={{
           cursor:'pointer',backgroundColor:"transparent",border:'none'}} 
           onClick={()=>history.push(`/Product_Details${item.id}`)}>

             <div className='w-100 h-75'>
  <Card.Img variant="top" className="img-fluid w-100 h-100" src={item.image}
  />
  </div>
  <Card.Body className='d-flex w-100 h-50 flex-column justify-content-between '>
    <Card.Title >{item.name}</Card.Title>
  
    <Card.Text className=' w-100  d-flex justify-content-between'>
      <div className='w-100'>
     {item.description}
     </div>
     
  

    </Card.Text>


    <div className='d-flex justify-content-between mt-3 w-100'>
      <div className='w-100'>{item.price+"تومن"}</div>
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

