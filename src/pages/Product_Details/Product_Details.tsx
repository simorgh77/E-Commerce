import React, { useState, useEffect, ChangeEvent } from 'react'
import { useParams } from 'react-router'
import "./Product_Details.style.css"
import { Container, Row, Col, Carousel, Button, Form, Image } from 'react-bootstrap'
import shoe from '../../assest/img/shoe.jpg'
import { BsStarFill } from "react-icons/bs";
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper'
import axios from 'axios'
import { AddTobasket } from '../../store/reducers/basket.reducer/basket.reducer'
import { useSelector, useDispatch } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { AiOutlineCheck } from "react-icons/ai";
import Humanize from "humanize-plus"
import Scrollspy from 'react-scrollspy'

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
  tag: string
  number: number
  offpercent: number
}

const Product_Details = () => {
  const dispatch = useDispatch<AppDispatch>()
  const BasketReducer = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
  const [Buybutton, setBuybutton] = useState<boolean>(false)
  const [Singleproduct, setSingleproduct] = useState<IProducts>()
  const { id } = useParams<{ id: string }>()
  const [Categoriesproducts, setCategoriesproducts] = useState<IProducts[]>()
  const [filter, setfilter] = useState({
    category: '',
    varient: ''
  })

  useEffect(() => {
    async function fetchsingleData() {
      await axios.get(`api/singleproduct/${id}`).then(res => {
        setSingleproduct(res.data.product)
        setfilter({ category: 'category', varient: `${Singleproduct?.category}` })
        console.log(res.data);

      }).catch(err => {
        console.log(err);
      })

    }
    async function fetchCategoriesData() {
      await axios.get(`api/products`).then(res => {
        setCategoriesproducts(res.data)
        console.log(res.data);

      }).catch(err => {
        console.log(err);
      })
    }
    fetchsingleData()
    fetchCategoriesData()

  }, [id])


  const handle_add_to_bascket = () => {
    setBuybutton(true)
    Singleproduct && dispatch(AddTobasket(Singleproduct))

  }


  return (

    <div className='mt-5 ' >
      <div className='header text-center pt-4 text-white '>
        <p>{Singleproduct?.name}</p>
      </div>
      <Container className=''>
        <Row className=' '>
          <Col md={12} className='bg-white d-flex 
            flex-wrap justify-content-between first-col'>
            <Col xs={12} md={4}>
              <div id='badge-ribbon' className='off text-center text-white d-flex justify-content-center align-items-center'
                style={{ fontSize: '1.5rem', position: 'absolute' }} >


                {'%' + Singleproduct?.offpercent}
                <br />
                {'حراج'}
              </div>


              <img
                className="d-block w-100"
                src={Singleproduct?.image}
                alt="First slide"

              />



              <div className='d-flex'>
                <div className='shadowpic'> <img className='img-fluid' src={Singleproduct?.image} alt="" /> </div>
                <div className='shadowpic'> <img className='img-fluid' src={Singleproduct?.image} alt="" /></div>
                <div className='shadowpic'><img className='img-fluid' src={Singleproduct?.image} alt="" /> </div>
                <div className='shadowpic'><img className='img-fluid' src={Singleproduct?.image} alt="" /> </div>
              </div>
            </Col>







            <Col xs={12} md={6} className='buy_card justify-content-around  rounded mt-2  m-0 d-flex flex-column '>
              <div className='name' style={{ fontWeight: 'bolder', fontSize: '20px' }}>{Singleproduct?.name}</div>
              <div className='description '>
                {Singleproduct?.description}
              </div>
              <div className='price mt-2'>

                <div style={{
                  color: 'gray', textDecoration: 'line-through'
                  , fontSize: '18px'
                }}>
                  {Humanize.intComma(parseInt(Singleproduct?.price as
                    string))} {'تومان'}</div>
                <div
                  className='w-100 d-flex flex-column mt-2' style={{ fontSize: '40px', color: '#F04D7D' }}>
                  <span>
                    {Humanize.intComma(parseInt(Singleproduct?.price as string) - (parseInt(Singleproduct?.price as string) * (Singleproduct?.offpercent as number) / 100))}{"تومان"}
                  </span>
                </div>
              </div>
              <span className='text-dark mt-2' style={{ fontSize: '25px' }}>
                <BsStarFill fill='rgb(254,165,105)' /> {Singleproduct?.rate}
              </span>

              <div className=''>
                {"انتخاب سایز:"} <Form.Select size="sm" className='' style={{ width: '25vw' }}>
                  <option disabled={true}>{'انتخاب سایز'}</option>
                  <option >{'S'}</option>
                  <option >{' M'}</option>
                  <option >{'L'}</option>
                  <option >{'XL'}</option>
                  <option >{'XXL'}</option>
                </Form.Select></div>



              {!Buybutton ? <div><Button onClick={handle_add_to_bascket}
                className='w-100 mt-3' style={{ backgroundColor: "rgb(239,57,78)", border: 'none' }}>
                {"افزودن به سبد خرید"}</Button></div> :
                <p className='text-center' style={{ color: 'green' }}>
                  {"به سبد خرید اضافه شد"}<AiOutlineCheck />
                </p>

              }
              <div className='gurantee  d-flex my-3 w-100'>
                <div className='w-50 d-flex align-items-center text-center flex-column flex-wrap mx-auto' style={{ color: 'gray', fontSize: '15px' }}><img className='img-fluid' src="https://www.digistyle.com/static/files/bc93f765.svg" width='20%' alt="" />{'ضمانت  چهارده روز بازگشت کالا'}</div>
                <div className='w-50 d-flex align-items-center text-center flex-column flex-wrap mx-auto' style={{ color: 'gray', fontSize: '15px' }}><img className='img-fluid' src="https://www.digistyle.com/static/files/c968eac8.svg" width='20%' alt="" />{"تحویل سریع و آسان"}</div>
                <div className='w-50 d-flex align-items-center text-center flex-column flex-wrap mx-auto' style={{ color: 'gray', fontSize: '14px' }}><img className='img-fluid' src="https://www.digistyle.com/static/files/bafc4f4a.svg" width='20% flex-wrap' alt="" />{"ضمانت اصل بودن کالا"}</div>
              </div>


            </Col>
          </Col>

          <Col md={12} className='mt-5'>
            <div className='bg-info text-center p-3'>
              {'محصولات مرتبط'}
            </div>

            <div className='bg-white'>
              <CategoriesSwiper varient={true} 
              filter={{ category: 'category', kind: `${Singleproduct?.category}` }} />
            </div>


          </Col>

          <Col md={12} className='bg-white '>

            <div className='w-100'>
              <Row>
                <Scrollspy
                  className="scrollspy d-flex  m-0 p-0 sticky-top"
                  items={['section-1', 'section-2', 'section-3', 'section-4', 'section-5']}
                  currentClassName="isCurrent">
                  <li><a href="#section-1">{'مشخصات محصول'}</a></li>
                  <li><a href="#section-2"> {'دیدگاه کاربران'}</a></li>

                </Scrollspy>
                <section id="section-1">
                  <h2 className='mt-3'>{"مشخصات محصول"}</h2>
                  <p className='text-end px-3' style={{ color: 'gray', fontSize: '20px' }}>{'مشخصات'}</p>
                  <div className='d-flex listofinfo' >
                    <ul className='m-0 text-end bold'>
                      <li>{"جنس"}</li>
                      <li>{"قد"}</li>
                      <li>{"یقه"}</li>
                      <li>{"آستین"}</li>
                      <li>{"طرح"}</li>
                      <li>{"توضیحات جنس"}</li>
                      <li>{"کشور تولید کننده"}</li>
                    </ul>
                    <ul>
                      <li>{"یشمی"}</li>
                      <li>{"تا زانو"}</li>
                      <li>{"برگردان"}</li>
                      <li>{"کوتاه"}</li>
                      <li>{"ساده"}</li>
                      <li>{"تهیه شده از پشم ها گوسفند"}</li>
                      <li>{"ایران"}</li>
                    </ul>
                  </div>
                </section>


                <section id="section-2">
                  <h2>{"دیدگاه کاربران"}</h2>

                  <Col md={12} className='d-flex flex-wrap'>
                    <Col xs={12} md={6} className='bg-white'>
                      <div className='text-center'>{"افزودن دیدگاه"}</div>
                      <Form className='mt-3 w-75  mx-auto' >
                        <Form.Group className="mb-5 mt-5" controlId="formBasicEmail">
                          <Form.Control className="mb-5 mt-5" type="text" placeholder="نام خود را وارد کنید" />
                          <Form.Control className=" mt-5" type="email" placeholder="ایمیل خود را وارد کنید" />
                          <Form.Text className="text-muted">
                            {"ما هیچگاه ایمیل شما را به اشتراک نمیگذاریم"}
                          </Form.Text>
                        </Form.Group>
                        <Form.Select aria-label="Default select example" className='mt-5'>
                          <option>{"امتیاز خود را وارد کنید"}</option>
                          <option value="1">5 {"ستاره"}</option>
                          <option value="2">4 {"ستاره"}</option>
                          <option value="3">3 {"ستاره"}</option>
                          <option value="3">2 {"ستاره"}</option>
                          <option value="3">1 {"ستاره"}</option>
                        </Form.Select>
                        <Button className='w-100 mt-3' variant="primary" type="submit">
                          {"ثبت نظر"}
                        </Button>
                      </Form>

                    </Col>
                    <Col xs={12} md={6} className='text-start text-center my-5' style={{ fontSize: 'small' }}>
                      <span className='m-2 ' style={{ fontSize: 'x-large' }}>{'نظرات'}</span>
                      <div className='user_detail d-flex align-items-center justify-content-around '>
                        <span>{"4 "}<BsStarFill fill='rgb(254,165,105)' /></span>
                        <h4 style={{ fontSize: '15px' }}>طاها خراسانی</h4>
                        <Image width='50px' src="https://cartzilla.createx.studio/img/shop/reviews/01.jpg"
                          roundedCircle />
                      </div>
                      <div className="review mt-2 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum quisquam natus doloribus dolore qui consequuntur, voluptatum aliquid voluptas laborum architecto ipsum ipsa, repudiandae, iure veniam aliquam magnam soluta. Necessitatibus.</div>
                      <div className='user_detail my-2 d-flex align-items-center justify-content-around '>
                        <span>{"4 "}<BsStarFill fill='rgb(254,165,105)' /></span>
                        <h4 style={{ fontSize: '15px' }}>طاها خراسانی</h4>
                        <Image width='50px' src="https://cartzilla.createx.studio/img/shop/reviews/01.jpg"
                          roundedCircle />
                      </div>
                      <div className="review mt-2 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum quisquam natus doloribus dolore qui consequuntur, voluptatum aliquid voluptas laborum architecto ipsum ipsa, repudiandae, iure veniam aliquam magnam soluta. Necessitatibus.</div>
                    </Col>
                  </Col>
                </section>
              </Row>
            </div>


          </Col>





        </Row>
      </Container>
    </div>
  )
}


export default Product_Details
