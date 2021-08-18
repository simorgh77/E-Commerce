import React, { useEffect, useState,useContext } from 'react'
import {
  Navbar, Nav, NavDropdown,
  Form, FormControl, Button, Dropdown, Image,Offcanvas
} from 'react-bootstrap'
import './Header.style.css'
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart, FaUserPlus } from 'react-icons/fa'
import { transform } from '@babel/core';
import { right } from '@popperjs/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import Minimize_basket from "../Minimize_product_basket/Minimize_product_basket"
import { BsPersonFill } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import taha from '../../assest/img/brand1.png'
import { Search_context } from '../../context/search_contex/search_contex';
import { Logout_user } from "../../store/reducers/auth.reducer/auth.reducer"
interface Ichild {
  children: React.ReactNode
}
interface IProducts {
  id: string,
  name: string,
  price: string,
  image: string,
  isexist: string,
  rate: number,
  colors: [],
  company: string,
  description: string,
  category: string,
  gender: string,
  tag: string,
  number: number
}
export const Header: React.FC<Ichild> = ({ children }) => {
  const history = useHistory()
  const [show, setShow] = useState(false);
  const dispatch = useDispatch<AppDispatch>()
  const [hover_basket, sethover_basket] = useState<boolean>(false)
  const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
  const Is_login = useSelector<RootState>(state => state.persistedReducer.authReducer.Is_login)
  const userName = useSelector<RootState>(state => state.persistedReducer.authReducer.UserName)
  const {state,searchdispatch}:any=useContext(Search_context)
const [search,setsearch]=useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  }

  
  return (
    <div className='mynav mt-3'>
      {
      console.log(state)
      }
      <Navbar className='myNavbar d-flex ' expand="lg" >
        <div className='container-fluid align-items-center'>
          <Navbar.Brand href="/" className=' d-flex justify-content-end ' style={{width:'10rem'}}>
            <img className='d-flex justify-content-end' style={{ width: '10rem' ,height:'100%', marginTop: '-25px' }}
              src={taha} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle as='button' onClick={handleShow}  />
       
            <Nav

              className="mr-auto d-none d-lg-flex  my-lg-0 w-100 justify-content-around flex-column align-content-between"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <div className='p-0 mt-5 '>
                <div className='first d-flex justify-content-around'>

                  <Form className="d-flex mt-0 p-0">
                    <BsSearch id='SearchIcon' />
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="mr-2 py-2 pr-5"
                      aria-label="Search"
                      style={{ width: '50vw', height: '8vh', paddingRight: '30px' }}
                      value={state.searchTitle}
                      onClick={(e)=>history.push('/Product_Categoriessearch')}
                      onChange={(e)=>searchdispatch({type:'add_title',payload: e.target.value})}
                    />
                  </Form>
                  <div className='d-flex '>
                    <Nav.Item className='d-flex flex-column' >

                      <div className='shopping_parent btn' onClick={() => history.push('/basket')} onMouseEnter={() => sethover_basket(true)}
                        onMouseLeave={() => sethover_basket(false)} >
                        {
                          hover_basket && (Basket as IProducts[]).length > 0 && <Minimize_basket sethover_basket={sethover_basket} />}
                        <span className='btn' >سبد خرید</span>
                        <FaShoppingCart style={{ fill: 'gray', fontSize: '2rem' }} className='icons mx-2' />
                        <span className=' shopping_cart_number'>{(Basket as IProducts[]).length}
                        </span>
                      </div>

                    </Nav.Item>
                    <Nav.Item className='d-flex flex-column flex-wrap'>
                      {!Is_login ? <Link to='/login'>
                        <div>
                          <span className='btn mt-2'>ورود به حساب کاربری</span>
                          <FaUserPlus style={{ fill: 'gray', fontSize: '2rem' }} className='icons' />  </div>
                      </Link> : <div className=''>


                        <Dropdown className=' px-4'>
                          <Dropdown.Toggle variant="" id="dropdown-basic" >
                            <BsPersonFill style={{ fill: 'gray', color: "gray", fontSize: '2.3rem', cursor: 'pointer' }}
                              className='icons' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu className=''>
                            <Dropdown.ItemText >
                              <p className='text-end py-1' style={{ borderBottom: '1px solid lightgray' }}>
                                <img className="avatar avatar-16 mx-2  rounded-pill" style={{ width: '30px' }}
                                  src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg" />
                                {userName}
                              </p>
                            </Dropdown.ItemText>
                            <Dropdown.Item className='text-end  ' onClick={(e) => history.push('/basket')}><AiOutlineShop /> {" سفارش های من"}</Dropdown.Item>
                            <Dropdown.Item className='text-center  my-2' onClick={() => dispatch(Logout_user(''))}><BiLogOut />  {"خروج از حساب کاربری"}</Dropdown.Item>

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
      
        </div>
      </Navbar>








      
  

      <Offcanvas show={show} onHide={handleClose} className='text-end ' style={{width:'25rem'}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='mx-auto '>{"منو"}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
     
        <Navbar className='' expand="lg" >
        <div className='d-flex flex-column '>
            <Nav

              className="mr-auto d-flex flex-column align-items-center "

            >
              <div className='p-0 d-flex flex-column align-items-center '>
                <div className=' '>

                  <Form className="">
                    <BsSearch id='SearchIcon1' />
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                      style={{ width: '60vw', height: '5vh', paddingRight: '30px' }}
                    />
                  </Form>
                  <div className='d-flex justify-content-end flex-column'>
                    <Nav.Item className='d-flex flex-column mt-4' >

                      <div className='shopping_parent2 mt-1 btn d-flex  flex-column text-center' onClick={() => history.push('/basket')} onMouseEnter={() => sethover_basket(true)}
                        onMouseLeave={() => sethover_basket(false)} >
                        {
                          hover_basket && (Basket as IProducts[]).length > 0 &&
                           <div className='text-center bg-info w-100 '>
                             <Minimize_basket sethover_basket={sethover_basket} />
                        </div>
}
                        <FaShoppingCart style={{ fill: 'gray', fontSize: '2rem' }} className='icons mx-2' />
                        <span className=' shopping_cart_number1'>{(Basket as IProducts[]).length}
                        </span>
                      </div>

                    </Nav.Item>
                    <Nav.Item className='d-flex flex-column '>
                      {!Is_login ? <Link to='/login'>
                        <div>
                          <FaUserPlus style={{ fill: 'gray', fontSize: '2rem' }} className='icons' />  </div>
                          <span className='btn mt-2 d-none d-md-f flex-wrap'>ورود به حساب کاربری</span>
                      </Link> : <div className=''>


                        <Dropdown className=' px-4'>
                          <Dropdown.Toggle variant="" id="dropdown-basic" >
                            <BsPersonFill style={{ fill: 'gray', color: "gray", fontSize: '2.3rem', cursor: 'pointer' }}
                              className='icons' />

                          </Dropdown.Toggle>

                          <Dropdown.Menu className=''>
                            <Dropdown.ItemText >
                              <p className='text-end py-1' style={{ borderBottom: '1px solid lightgray' }}>
                                <img className="avatar avatar-16 mx-2  rounded-pill" style={{ width: '30px' }}
                                  src="https://lh3.googleusercontent.com/-JM2xsdjz2Bw/AAAAAAAAAAI/AAAAAAAAAAA/DVECr-jVlk4/photo.jpg" />
                                {userName}
                              </p>
                            </Dropdown.ItemText>
                            <Dropdown.Item className='text-end  ' onClick={(e) => history.push('/basket')}><AiOutlineShop /> {" سفارش های من"}</Dropdown.Item>
                            <Dropdown.Item className='text-center  my-2' onClick={() => dispatch(Logout_user(''))}><BiLogOut />  {"خروج از حساب کاربری"}</Dropdown.Item>

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
         
        </div>
      </Navbar>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default Header