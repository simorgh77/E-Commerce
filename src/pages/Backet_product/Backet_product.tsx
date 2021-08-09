import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {RootState,AppDispatch} from '../../store/store'
import {Col,Container,Row,Image} from 'react-bootstrap'
import { BsStarFill } from "react-icons/bs";
import { FiMinusSquare ,FiPlusSquare} from "react-icons/fi";
import "./Basket_product.style.css"
import {Button} from "react-bootstrap"
import { BsTrash } from "react-icons/bs";
import Humanize from "humanize-plus"
import {Deletefrombasket,AddTobasket,Decreasebasket} from "../../store/reducers/basket.reducer/basket.reducer"
interface IProducts{
    id: string,
    name: string,
    price: string,
    image: string,
    isexist: string,
    rate:number,
    colors: [],
    company: string,
    description:string ,
    category:string,
    gender:string,
    tag:string,
    number:number
}
const Backet_product = () => {
  
    const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
    const dispatch = useDispatch<AppDispatch>()
   console.log(Basket);
    let total_price:number=0
    return (
        <div className='w-100  mt-5'>
<Container className='w-100  mt-5'>

    <Row className='w-100 m-0  mt-5'>
    <Col md={12} className=' my-2 d-flex flex-wrap justify-content-between'>
                      
                  <Col xs={12} md={9} className='d-flex flex-column 
                  rounded '>
{             
                  (Basket as IProducts[]).map((item,index)=>( 
 
                    <Col md={12} key={item.id} className='bg-white d-flex flex-wrap my-3 align-content-between '>
                        <Col xs={12} md={3}>
                          <img src={item.image} style={{border:'none'}}
                           className='avatar avatar-128 img-circle img-thumbnail' 
                           alt="image" />
                        </Col>
                        <Col xs={12} md={6} className='d-flex flex-column text-center justify-content-center'>
                            <p>{item.name}</p>
                            <p>{'شرکت:'} {item.company}</p>
                            <p className='d-flex mx-auto aign-items-center'>{'امتیاز:'} 
                            <BsStarFill fill='rgb(254,165,105)'/> {item.rate}</p>

                            <p> {item.isexist} {"در انبار"}</p>
                        </Col>
                        <Col xs={12} md={3}>
<h3 className='d-flex flex-column h-100 justify-content-around text-center'>
    
{Humanize.intComma(parseInt(item?.price as string))}{"تومان"}
<div className='text-center w-100 mt-2 '>
<FiMinusSquare onClick={()=>dispatch(Decreasebasket(item.id))}
style={{cursor:'pointer'}}/>
{item.number}
<FiPlusSquare onClick={()=>dispatch(AddTobasket(item))} 
style={{cursor:'pointer'}} />
</div>
<div className='d-flex mx-auto mt-2' 
onClick={()=>dispatch(Deletefrombasket(item.id))} 
style={{cursor:'pointer'}}>

<BsTrash/>
    <p  style={{fontSize:'20px'}}>{" حذف کالا "}</p>
</div>
</h3>

                        </Col>
                    </Col>
                  ))}



                  </Col>

                 { (Basket as IProducts[]).map((item,index)=>
                {
                   total_price+=parseInt(item.price)*item.number
                } 
                 )}
              
                  

                  
                  <Col xs={12} md={2} className='bg-white mt-3 flex-column
                   sticky-top finish_action rounded m-0 p-0  mx-1 '
                    style={{ maxHeight:'14rem',minWidth:'18rem',backgroundColor:'rgb(215, 224, 224)'}}>
                      
                      <div className='d-flex justify-content-around mt-3'>
                          <p>{"قیمت کالاها:"}</p>
                          <p>{Humanize.intComma(total_price)}</p>

                      </div>
                      <div className='d-flex justify-content-around mt-3'>
                          <p>{"تخفیف کالاها:"}</p>
                          <p>{"10%"}</p>
                      </div>
                      <div className='d-flex justify-content-around mt-3'>
                          <p>{"قیمت کل:"}</p>
                          <p>{Humanize.intComma( total_price*0.9)}</p>
                      </div>

<div>
                      <Button className='w-100 px-3'
                       style={{backgroundColor:'#EF394E',border:'none'}}>
                           {"اتمام خرید"}</Button>
                           </div> 
                  </Col>
             
            </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Backet_product
