import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { BsStarFill } from "react-icons/bs";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";
import "./Basket_product.style.css"
import { Button } from "react-bootstrap"
import { BsTrash } from "react-icons/bs";
import Humanize from "humanize-plus"
import { useHistory } from 'react-router';
import { Deletefrombasket, AddTobasket, Decreasebasket } from "../../store/reducers/basket.reducer/basket.reducer"
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
    offpercent:number
}
const Backet_product = () => {
    const history=useHistory()
    const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
    const dispatch = useDispatch<AppDispatch>()
    console.log(Basket);
    let total_price: number = 0
    let total_off:number=0
    return (
        <div className='w-100 mt-5'>
            <Container className='w-100 mt-5'>

                <Row className='w-100 m-0 mt-5'>
                    <Col md={12} className=' my-2 d-flex flex-wrap justify-content-between'>

                        <Col xs={12} md={9} className='d-flex flex-column 
                  rounded  '>
                            {
                                (Basket as IProducts[]).map((item, index) => (

                                    <Col md={12} key={item.id} className='bg-white d-flex flex-wrap my-3 align-content-between '>
                                        <Col xs={12} md={3}>
                                            <img src={item.image} style={{ border: 'none' }}
                                                className='avatar avatar-128 img-circle img-thumbnail'
                                                alt="image" />
                                        </Col>
                                        <Col xs={12} md={6} className='d-flex flex-column text-center justify-content-center'>
                                            <p>{item.name}</p>
                                            <p>{'????????:'} {item.company}</p>
                                            <p className='d-flex mx-auto aign-items-center'>{'????????????:'}
                                                <BsStarFill fill='rgb(254,165,105)' /> {item.rate}</p>

                                            <p> {item.isexist} {"???? ??????????"}</p>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <h3 className='d-flex flex-column h-100 justify-content-around text-center'>

                                                {Humanize.intComma(parseInt(item?.price as string))}{"??????????"}
                                                <div className='text-center w-100 mt-2 '>
                                                    <FiMinusSquare onClick={() => dispatch(Decreasebasket(item.id))}
                                                        style={{ cursor: 'pointer' }} />
                                                    {item.number}
                                                    <FiPlusSquare onClick={() => dispatch(AddTobasket(item))}
                                                        style={{ cursor: 'pointer' }} />
                                                </div>
                                                <div className='d-flex mx-auto mt-2'
                                                    onClick={() => dispatch(Deletefrombasket(item.id))}
                                                    style={{ cursor: 'pointer' }}>

                                                    <BsTrash />
                                                    <p style={{ fontSize: '20px' }}>{" ?????? ???????? "}</p>
                                                </div>
                                            </h3>

                                        </Col>
                                    </Col>
                                ))}



                        </Col>

                        {(Basket as IProducts[]).map((item, index) => {
                            total_price += parseInt(item.price) * item.number
                            total_off+=item.offpercent
                        }
                        )}




                        <Col xs={12} md={2} className='bg-secondary mt-3 flex-column
                   sticky-top finish_action rounded m-0 p-0  '
                            style={{boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.24)', maxHeight: '14rem', minWidth: '16rem', zIndex: 0, backgroundColor: 'rgb(215, 224, 224)' }}>

                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"???????? ????????????:"}</p>
                                <p>{Humanize.intComma(total_price)+"??????????"}</p>

                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"?????????? ????????????:"}</p>
                                <p>{total_off+'%'}</p>
                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"???????? ????:"}</p>
                                <p>{Humanize.intComma(total_price-(total_price * total_off/100))+"??????????"}</p>
                            </div>

                            <div className='w-100 text-center'>
                                <Button  onClick={()=>history.push('/shopping_page/shipping')} 
                                className='w-50 '
                                    style={{ backgroundColor: '#EF394E', border: 'none' }}>
                                    {"?????????? ????????"}</Button>
                            </div>
                        </Col>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Backet_product
