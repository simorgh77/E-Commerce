import React,{MouseEventHandler} from 'react'
import {Card,Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import "./ProductsCart.style.css"
import Humanize from "humanize-plus"
import { BsBag } from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux'
import { AddTobasket } from '../../store/reducers/basket.reducer/basket.reducer'
import { RootState, AppDispatch } from '../../store/store'
const ProductsCart = ({item}:any) => {
  const history=useHistory()
  const dispatch = useDispatch<AppDispatch>()
  const BasketReducer = useSelector<RootState>
  (state => state.persistedReducer.BasketReducer.products)
 const handleclick=(e:React.MouseEvent)=>{
   history.push('./Basket')
   item&& dispatch(AddTobasket(item))
   e.stopPropagation()
 }
    return (
        <div className='w-100 h-100 d-flex text-center  align-items-center' id='product_cart'>
           <Card className='product_cart_main w-100 h-100 d-flex flex-fill p-0 m-0'  style={{
           cursor:'pointer',backgroundColor:"transparent",border:'none'}} 
          onClick={()=>history.push(`./Product_Details${item.id}`)} >

             <div className='card-image w-100'>
  <Card.Img variant="top" className="img-fluid product-img h-25" src={item.image}
  style={{maxWidth:'59%',minHeight:'20vh',maxHeight:'25vh',zIndex:-1}}
  />
  </div>
  <Card.Body className='d-flex w-100 h-50 flex-column justify-content-between '>
    <Card.Title >{item.name}</Card.Title>
            
    <Card.Text className=' w-100  d-flex flex-column justify-content-around'>
      <div className='w-100 mb-2'>
     {item.isexist}
     </div>
     <div className='p-2 mx-auto' 
     style={{backgroundColor:'red',color:'white',fontSize:'12px' ,width:'42px',borderRadius:'100%'}}>
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
    <Button className=' showbtn' onClick={handleclick}>
              {"افزودن به سبد خرید"} <BsBag/>
            </Button>
  </Card.Body>
</Card> 
        </div>
    )
}

export default ProductsCart

