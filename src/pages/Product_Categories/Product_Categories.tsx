import React, { useState, useEffect, useContext } from 'react'
import { Pagination, Col, Container, Row, Navbar, Modal, Form,Button } from 'react-bootstrap'
import ProductCart from "../../components/ProductsCart/ProductsCart"
import { useParams, Link, useLocation } from "react-router-dom"
import axios from "axios"
import { BsFilterRight } from "react-icons/bs";
import "./Product_categories.style.css"
import CategoryHook from '../../components/customHooks/CategorieHook'
import { Search_context } from '../../context/search_contex/search_contex';
interface IProducts {
  id: string,
  name: string,
  price: number,
  image: string,
  featured: boolean,
  brand: string,
  description: string,
  category: string,
  gender: string,
  tag: string,
  offpercent: number
}
interface IBrands {
  id: string
  name: string
  image: string
}

const Product_Categories = () => {
  const [brands, setbrands] = useState<IBrands[]>()
  const { caregories } = useParams<{ caregories: string }>()
  const query = useLocation().search
  const { state, searchdispatch }: any = useContext(Search_context)
  const [Products, setProducts] = CategoryHook('api/products', caregories, query)
  const [Categoriesproducts, setCategoriesproducts] = useState<IProducts[]>()
  const [search, setsearch] = useState('')
  const [brandsearch, setbrandsearch] = useState('')
  const [radiochange, setradiochange] = useState('')
  const [filter, setfilter] = useState<number>(-1)
  const [filterActive, setfilterActive] = useState<number>(-1)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Addfilter = (product: IProducts[]) => {

    if (filter === 3) {
      return product.filter(item => item.tag === 'newest')
    }
    if (filter === 4) {
      return product.sort((a, b) => (a.price - (a.price * a.offpercent / 100))
        - (b.price - (b.price * b.offpercent / 100)))
    }
    if (filter === 5) {
      return product.sort((a, b) => (b.price - (b.price * b.offpercent / 100))
        - (a.price - (a.price * a.offpercent / 100)))
    }
    if (filter === 2) {
      return product.sort((a, b) =>b.offpercent-a.offpercent )
    }
    else {
      return product
    }

  }
  useEffect(() => {

    async function fetchbrandsData() {
      await axios.get('api/brands').then(res => {
        setbrands(res.data.brands)
      }).catch(err => {
        console.log(err);
      })
    }
    fetchbrandsData()
  }, [])

  console.log(filter);


  return (
    <Container className=' ' fluid>
      <Row className='mt-5 w-100 m-0 ' >





        <Col md={2} className=' d-flex flex-column mt-3 '>


       
      <Button variant="secondary" className='d-blobk d-lg-none' onClick={handleShow}>
      {"جستجو پیشرفته"}<BsFilterRight  fontSize={30} />
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <Col md={12} className='bg-white mb-3 text-center rounded' style={{ minHeight: '8rem', boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.3)' }}>
            <Form >
              <Form.Label className='mt-2 border-bottom  mb-2 p-2 w-100'>{"جستجو در نتایج:"} </Form.Label>
              <Form.Group className="mb-3 mt-2 px-2" controlId="formBasicEmail">
                <Form.Control type="text" className='text-center' value={search} onChange={(e) => setsearch(e.target.value)} placeholder="نام محصول را وارد کنید" />
              </Form.Group>
            </Form>

          </Col>
          <Col md={12} className='bg-white rounded' style={{ maxHeight: '15rem', overflowY: 'auto', boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.3)' }}>
            <Form.Group className="mb-3 mt-2 px-2" controlId="formBasicCheckbox">
              <Form.Label className='border-bottom mb-2 p-2 w-100'>
                {"جستجو بر اساس برند"}
              </Form.Label>
              <Form.Control type="text" className=' mx-auto mb-3 text-center px-5'
                value={brandsearch} onChange={(e) => setbrandsearch(e.target.value)}
                placeholder="نام برند" />

              <Form.Check type="radio" value={''} label={"All"} name="group1"
                onChange={(e) => setradiochange(e.target.value)} />
              {brands?.map((item, index) => (

                item.name.includes(brandsearch) &&
                <Form.Check type="radio" value={item.name} label={item.name} key={item.id} name="group1"
                  onChange={(e) => setradiochange(e.target.value)} />
              ))}

            </Form.Group>
          </Col>
        </Modal.Body>
        
      </Modal>

          <Col md={12} className='bg-white d-none d-lg-block mb-3 text-center rounded' style={{ minHeight: '8rem', boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.3)' }}>
            <Form >
              <Form.Label className='mt-2 border-bottom  mb-2 p-2 w-100'>{"جستجو در نتایج:"}</Form.Label>
              <Form.Group className="mb-3 mt-2 px-2" controlId="formBasicEmail">
                <Form.Control type="text" className=' mx-auto' value={search} onChange={(e) => setsearch(e.target.value)} placeholder="نام محصول را وارد کنید" />
              </Form.Group>
            </Form>

          </Col>
          <Col md={12} className='bg-white d-none d-lg-block  rounded' style={{ maxHeight: '15rem', overflowY: 'auto', boxShadow: '5px 5px 15px 5px rgba(0,0,0,0.3)' }}>
            <Form.Group className="mb-3 mt-2 px-2" controlId="formBasicCheckbox">
              <Form.Label className='border-bottom mb-2 p-2 w-100'>
                {"جستجو بر اساس برند"}
              </Form.Label>
              <Form.Control type="text" className=' mx-auto mb-3 text-center px-5'
                value={brandsearch} onChange={(e) => setbrandsearch(e.target.value)}
                placeholder="نام برند" />

              <Form.Check type="radio" value={''} label={"All"} name="group1"
                onChange={(e) => setradiochange(e.target.value)} />
              {brands?.map((item, index) => (

                item.name.includes(brandsearch) &&
                <Form.Check type="radio" value={item.name} label={item.name} key={item.id} name="group1"
                  onChange={(e) => setradiochange(e.target.value)} />
              ))}

            </Form.Group>
          </Col>

        </Col>
        <Col xs={12} md={10} className='mt-3 d-flex flex-column'>
          <Col md={10} className='d-flex mx-auto w-100 '>

            <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className='w-100 p-0 m-0  '>
              <Container>
                <Navbar.Brand className='d-flex mt-0'>
                  <BsFilterRight className='d-none d-lg-block' fontSize={30} />
                  <div className='d-sm-none d-lg-flex'> {"مرتب سازی بر اساس:"}</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mt-2' />
                <Navbar.Collapse id="responsive-navbar-nav" >
                  <ul className="me-auto d-block d-lg-flex mt-4 " >

                   
                   
                    <li className={filterActive == 2 ? `filters text-center p-2 text-white rounded-pill` : 'filters'} value={2} onClick={(e: any) => { setfilter(e.target.value); setfilterActive(e.target.value) }} style={{ backgroundColor: filterActive === 2 ? '#00bfd6' : '' }}>     {'پرتخفیف ترین'}</li>
                    <li className={filterActive == 3 ? `filters text-center p-2 text-white rounded-pill` : 'filters'} value={3} onClick={(e: any) => { setfilter(e.target.value); setfilterActive(e.target.value) }} style={{ backgroundColor: filterActive === 3 ? '#00bfd6' : '' }}>      {'جدید ترین'}</li>
                    <li className={filterActive == 4 ? `filters text-center p-2 text-white rounded-pill` : 'filters'} value={4} onClick={(e: any) => { setfilter(e.target.value); setfilterActive(e.target.value) }} style={{ backgroundColor: filterActive === 4 ? '#00bfd6' : '' }}>{'ارزان ترین'}</li>
                    <li className={filterActive == 5 ? `filters text-center p-2 text-white rounded-pill` : 'filters'} value={5} onClick={(e: any) => { setfilter(e.target.value); setfilterActive(e.target.value) }} style={{ backgroundColor: filterActive === 5 ? '#00bfd6' : '' }}>{'گران ترین'}</li>

                  </ul>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col >
          <Col md={10} className='d-flex flex-wrap bg-white w-100'>
            {
              state.state ? Products && Addfilter(Products as unknown as IProducts[]).map((item: IProducts) =>

              (


                item.name.includes(state.state) && item.name.includes(search.toLocaleLowerCase()) &&
                  radiochange ? item.brand === radiochange &&
                <Col xs={12} md={3} className='d-flex p-3'>
                  <ProductCart item={item} />
                </Col> :
                  item.name.includes(state.state) && item.name.includes(search.toLocaleLowerCase()) &&
                  <Col xs={12} md={3} className='d-flex p-3'>
                    <ProductCart item={item} />
                  </Col>
              ))



                : Products && Addfilter(Products as unknown as IProducts[]).map((item: any) => (

                  item.name.includes(search.toLocaleLowerCase()) &&
                    radiochange ? item.brand === radiochange &&
                  <Col xs={12} md={3} className='d-flex p-3'>
                    <ProductCart item={item} />
                  </Col> :
                    item.name.includes(search.toLocaleLowerCase()) &&
                    <Col xs={12} md={3} className='d-flex p-3'>
                      <ProductCart item={item} />
                    </Col>
                ))

            }




          </Col>
        </Col>

      </Row>
    </Container>
  )
}

export default Product_Categories
























function useQuery(): any {
  throw new Error('Function not implemented.')
}
// const style={
//     width:"20vw",
//     height:"60%",
//     backgroundColor:'white',
//     boxShadow:"5px 5px 21px 5px rgba(0,0,0,0.45)",
//     borderRadius:"15px", 
// }