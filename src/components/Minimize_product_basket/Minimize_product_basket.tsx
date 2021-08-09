import React from 'react'
import "./Minimize-basket.style.css"
import {useSelector,useDispatch} from 'react-redux'
import {RootState,AppDispatch} from '../../store/store'
import { BsTrash } from "react-icons/bs";
import {Container ,Row} from 'react-bootstrap'
import {Deletefrombasket} from "../../store/reducers/basket.reducer/basket.reducer"
import { ReactElement } from 'react';
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
interface IBasket{
    sethover_basket:Function
}

const Minimize_product_basket:React.FC<IBasket> = (props) => {
    const dispatch = useDispatch<AppDispatch>()
    const Basket = useSelector<RootState>(state => state.BasketReducer.products)
   
    const handleDelete=(e:React.MouseEvent<SVGElement, MouseEvent> ,id:string)=>{
        e.stopPropagation();
        dispatch(Deletefrombasket(id))
    }


    return (
        <div className='basket-mini'>
            <Container>
                <Row onMouseEnter={() => props.sethover_basket(true)}
    onMouseLeave={() => props.sethover_basket(false)}>
           {(Basket as IProducts[]).map(item=>(
<div className='d-flex align-items-center basket-singel-product'>
               <img src={item.image} className='avatar avatar-12 img-circle img-thumbnail' 
               alt="image"   />
               <div>
               <p>{item.name}</p>
               <div className='d-flex justify-content-between '>
               <p> {"تعداد:"}{item.number} </p>
               <BsTrash onClick={(e)=>handleDelete(e,item.id)} />
               </div>
               </div>
               </div>
           ))}
           </Row>
           </Container>
        </div>
    )
}

export default Minimize_product_basket
