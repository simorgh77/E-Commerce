import React,{useState,useEffect} from 'react'
import { Pagination ,Col,Container,Row,Navbar,Nav,NavDropdown,Form} from 'react-bootstrap'
import ProductCart from "../../components/ProductsCart/ProductsCart"
import {useParams,Link} from "react-router-dom"
import axios from "axios"
import { BsFilterRight } from "react-icons/bs";
import "./Product_categories.style.css"
interface IProducts{
  id: string,
  name: string,
  price: number,
  image: string,
  featured: boolean,
  colors: [],
  company: string,
  description:string ,
  category:string,
  gender:string,
  tag:string
}


const Product_Categories = () => {
const {caregories} =useParams<{caregories:string}>()

const [Categoriesproducts, setCategoriesproducts]=useState<IProducts[]>()

useEffect(() => {
  async function fetchCategoriesData() {
    await axios.get(`api/products/${caregories}`).then(res => {
      setCategoriesproducts(res.data)
    }).catch(err => {
      console.log(err);
    })
    
  }
  fetchCategoriesData()
}, [caregories])

    return (
<Container className=' ' fluid>
    <Row className='mt-5 w-100 m-0 ' >
 <div className='bg-info text-white text-center w-100'>{caregories}</div>

 <Col  md={2} className='d-none d-lg-flex flex-column mt-3 bg-white'>
<Col md={12} className=''>
<span>{"جستجو در نتایج:"}</span>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="نام محصول را وارد کنید" />
  </Form.Group>
  </Form>
<span>{"جستجو در برند ها:"}</span>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="text" placeholder="نام برند را وارد کنید" />
  </Form.Group>
  </Form>
</Col>
<Col md={12} className='bg-white' style={{maxHeight:'10%', overflowY:'scroll'}}>
<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label={"نایک"} />
    <Form.Check type="checkbox" label={"پاما"} />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
    <Form.Check type="checkbox" label="nike" />
  </Form.Group>
</Col>

 </Col>
 <Col xs={12} md={10} className='mt-3 d-flex flex-column'>
   <Col  md={10} className='d-flex mx-auto w-100 '>

<Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='w-100 p-0 m-0  '>
  <Container>
  <Navbar.Brand className='d-flex'> <BsFilterRight fontSize={30}/>  <div className='d-sm-none d-lg-flex'> {"مرتب سازی بر اساس:"}</div>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link >{"پرفروش ترین "}</Nav.Link>
      <Nav.Link >      {'مرتبط ترین '}</Nav.Link>
      <Nav.Link >     {'پر بازدید ترین'}</Nav.Link>
      <Nav.Link >      {'جدید ترین'}</Nav.Link>
      <Nav.Link >{'ارزان ترین'}</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 </Col >
 <Col md={10} className='d-flex flex-wrap bg-white w-100'>
 {Categoriesproducts?.map((item,index)=>(
<Col xs={12} md={3} className='d-flex p-3'>
   <ProductCart item={item}/>
   </Col>
 ))}
 

 </Col>
 </Col>

    </Row>
</Container>
    )
}

export default Product_Categories























// const style={
//     width:"20vw",
//     height:"60%",
//     backgroundColor:'white',
//     boxShadow:"5px 5px 21px 5px rgba(0,0,0,0.45)",
//     borderRadius:"15px", 
// }