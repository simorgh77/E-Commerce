import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/store'
import {Col,Button,InputGroup,FormControl} from 'react-bootstrap'
import Humanize from "humanize-plus"
import { AiOutlineUser ,AiOutlineClockCircle} from "react-icons/ai";
import { BiLocationPlus,BiPhone } from "react-icons/bi";
import {Link} from 'react-router-dom'
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from 'react-router';
interface Iaccept{
    setstepperActive:Function
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
const Accept_info:React.FC<Iaccept> = ({setstepperActive}) => {
    const history=useHistory()
    let total_price=0
    const Basket = useSelector<RootState>(state => state.persistedReducer.BasketReducer.products)
    const username = useSelector<RootState>(state => state.persistedReducer.authReducer.UserName)
    const dispatch = useDispatch<AppDispatch>()
    useEffect(() => {
        setstepperActive(2)
       }, [])
       
    return (
        <div style={{color:'#616161'}}>
            <Col md={12} className=' my-2 d-flex flex-wrap justify-content-between'>

                <Col xs={12} md={8}  className=''>

                <Col  md={12}  className='pb-4'>
<h3>{"خلاصه سفارش:"}</h3>


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
                                            <div className='text-center w-100 mt-2 '>
                                                    
                                                    {item.number +"عدد"}
                                         
                                                </div>
                                        </Col>
                                        <Col xs={12} md={3}>
                                            <h4 className='d-flex flex-column h-100 justify-content-around text-center'>

                                                {Humanize.intComma(parseInt(item?.price as string))}{"تومان"}
                                                
                                               
                                            </h4>

                                        </Col>
                                    </Col>
                                ))}
</Col>

<Col  md={12}  className='border-top pt-4'>


            <h4>{"مشخصات گیرنده و زمان ارسال"}</h4>        

            <p><BiLocationPlus/> {"کرمان - رفسنحان -خیابان شهریار-پلاک 9"}</p>
            <p> <AiOutlineUser/>{"طاها  خراسانی"}</p>
            <p><BiPhone/> {"09130812891"}</p>
            <p> <AiOutlineClockCircle/> {"بین 4 تا 10 روز کاری"}</p>
            <p>{"ارسال توسط پست"}</p>
        
</Col>

                </Col>
                    
{(Basket as IProducts[]).map((item, index) => {
                            total_price += parseInt(item.price) * item.number
                        }
                        )}




                        <Col xs={12} md={2} className=' mt-3 flex-column
                   sticky-top finish_action rounded bg-secondary py-2 rounded  align-content-around'
                            style={{ maxHeight: '25rem', minWidth: '18rem', zIndex: 0,boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.24)'}}>

                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"قیمت کالاها:"}</p>
                                <p>{Humanize.intComma(total_price)} {"تومان"}</p>

                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"تخفیف کالاها:"}</p>
                                <p className='px-3'>{"10درصد"}</p>
                            </div>
                            <div className='d-flex justify-content-around mt-3'>
                                <p>{"قیمت کل:"}</p>
                                <p>{Humanize.intComma(total_price * 0.9)} {"تومان"}</p>
                            </div>

                            <div className='d-flex justify-content-around mt-3'>
                                
                                <p>{"هزینه ارسال:"}</p>

                                <p>{Humanize.intComma(12000)} {"تومان"}</p>
                                </div> 


                            <div className='d-flex justify-content-around mt-3'>
                                
                                <p>{"مبلغ قابل پرداخت:"}</p>

                                <p>{Humanize.intComma(12000+total_price)} {"تومان"}</p>
                                </div> 

                                <div>

                                <InputGroup className="mb-3 px-4">
    <FormControl
      placeholder=" کد تخفیف  "
      aria-describedby="basic-addon2"
   
    />
    <Button variant="outline-success"  id="button-addon2" >
      {"اعمال کد"}
    </Button>
  </InputGroup>

                                    </div>    
                                    <div  className='text-center'>                       
  <Button variant="success" onClick={()=>{history.push('/shopping_page/payment_gate');setstepperActive(3)}} className='w-75 rounded-pill'>{"پرداخت آنلاین و ثبت سفارش "}</Button>{' '}
  </div>
                        </Col>
                </Col>
                <div className='py-5'>
<Link to='/shopping_page/shipping' > <BsArrowRight style={{fontSize:'2rem'}}/> {"بازگشت به مشخصات گیرنده"}  </Link>
</div>  
        </div>
    )
}

export default Accept_info
