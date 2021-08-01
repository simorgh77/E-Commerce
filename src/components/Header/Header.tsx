import React ,{useEffect}from 'react'
import {Navbar,Nav,NavDropdown,
Form,FormControl,Button} from 'react-bootstrap'
import './Header.style.css'
import { BsSearch } from "react-icons/bs";
import {FaShoppingCart,FaUserPlus} from 'react-icons/fa'
import { transform } from '@babel/core';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { async } from 'q';
interface Ichild{
  children: React.ReactNode
}
export const Header:React.FC<Ichild> = ({children}) => {
  

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
        <Link to='/bascket'>
          <div className='shopping_parent'>
        <span className='btn'>سبد خرید</span> 
        <FaShoppingCart style={{fill:'gray',fontSize:'2rem'}} className='icons mx-2'/>
        <span className=' shopping_cart_number'>0</span>
        </div>
      </Link>
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