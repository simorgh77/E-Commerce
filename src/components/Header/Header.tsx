import React ,{useEffect,useState}from 'react'
import {Navbar,Nav,NavDropdown,
Form,FormControl,Button,Dropdown,Image} from 'react-bootstrap'
import './Header.style.css'
import { BsSearch } from "react-icons/bs";
import {FaShoppingCart,FaUserPlus} from 'react-icons/fa'
import { transform } from '@babel/core';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {RootState,AppDispatch} from '../../store/store'
import Minimize_basket from "../Minimize_product_basket/Minimize_product_basket"
import { BsPersonFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import {Logout_user} from "../../store/reducers/auth.reducer/auth.reducer"
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
  const dispatch = useDispatch<AppDispatch>()
  const [hover_basket,sethover_basket]=useState<boolean>(false)
  const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
  const Is_login = useSelector<RootState>(state => state.persistedReducer.authReducer.Is_login)
  const userName = useSelector<RootState>(state => state.persistedReducer.authReducer.UserName)
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
        {!Is_login ? <Link to='/login'> 
        <div>
      <span className='btn mt-2'>ورود به حساب کاربری</span>
       <FaUserPlus style={{fill:'gray',fontSize:'2rem'}}  className='icons'/>  </div>
       </Link> :    <div className=''>
   
       
       <Dropdown className=' px-4'>
  <Dropdown.Toggle variant="" id="dropdown-basic" >
       <BsPersonFill style={{fill:'gray',color:"gray",fontSize:'2.3rem' ,cursor:'pointer'}}  
       className='icons'/> 
  
  </Dropdown.Toggle>

  <Dropdown.Menu className=''>
  <Dropdown.ItemText >
<p className='text-end py-1' style={{borderBottom:'1px solid lightgray'}}>
  <img className="avatar avatar-16 mx-2  rounded-pill" style={{width:'30px'}}
   src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg"/>
  {userName}
  </p>
  </Dropdown.ItemText>
            <Dropdown.Item className='text-end  '  onClick={(e)=>history.push('/basket')}><AiOutlineShop/> {" سفارش های من"}</Dropdown.Item>
    <Dropdown.Item className='text-center  my-2'  onClick={()=>dispatch(Logout_user(''))}><BiLogOut/>  {"خروج از حساب کاربری"}</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
       
        </div>
       
     }
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