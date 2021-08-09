import React ,{useEffect,useState}from 'react'
import {Navbar,Nav,NavDropdown,
Form,FormControl,Button} from 'react-bootstrap'
import './Header.style.css'
import { BsSearch } from "react-icons/bs";
import {FaShoppingCart,FaUserPlus} from 'react-icons/fa'
import { transform } from '@babel/core';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import {useSelector} from 'react-redux'
import {RootState} from '../../store/store'
import Minimize_basket from "../Minimize_product_basket/Minimize_product_basket"
interface  Ichild{
  children: React.ReactNode
}
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
export const Header:React.FC<Ichild> = ({children}) => {
  const history=useHistory()

  const [hover_basket,sethover_basket]=useState<boolean>(false)
  const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
    return (
      <div className='mynav mt-3'>
        <Navbar className='myNavbar' expand="lg" >
      <div className='container-fluid align-items-center '>
      <Navbar.Brand href="#" >
     <img style={{width:'5rem',marginTop:'-25px'}} 
     src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Taha.svg" alt="" />
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
    <Nav

      className="mr-auto  my-lg-0 w-100 justify-content-around flex-column align-content-between"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <div className='p-0 mt-5 '>
        <div className='first d-flex justify-content-around'>
  
    <Form className="d-flex mt-0 p-0">
      <BsSearch id='SearchIcon'/>
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2 py-2 pr-5"
        aria-label="Search"
        style={{width:'50vw' , height:'8vh',paddingRight:'30px'}}
      />
    </Form>
    <div className='d-flex '>
      <Nav.Item className='d-flex flex-column' >
       
          <div className='shopping_parent btn' onClick={()=>history.push('/basket')}  onMouseEnter={() => sethover_basket(true)}
   onMouseLeave={()=>sethover_basket(false)} >
     {
hover_basket&& (Basket as IProducts[]).length>0&&<Minimize_basket sethover_basket={sethover_basket}/>}
        <span className='btn' >سبد خرید</span> 
        <FaShoppingCart  style={{fill:'gray',fontSize:'2rem'}} className='icons mx-2'/>
        <span className=' shopping_cart_number'>{(Basket as IProducts[]).length}
        </span>
        </div>
      
      </Nav.Item>
      <Nav.Item className='d-flex flex-column'>
        <Link to='/login'> 
        <div>
      <span className='btn'>ورود به حساب کاربری</span>
       <FaUserPlus style={{fill:'gray',fontSize:'2rem'}}  className='icons'/>  </div>
       </Link>
     
       </Nav.Item>
    </div>
    
       </div>

       <div className='w-100 second d-flex pt-4  justify-content-around'>
    <Nav.Item>
      {children}
    </Nav.Item>
    </div>
      </div>
    </Nav>
  </Navbar.Collapse>
        </div>
</Navbar>

</div>
    )
}
export default Header