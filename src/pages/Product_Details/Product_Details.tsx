import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import "./Product_Details.style.css"
import { Container,Row,Col,Carousel,Button,Form,Image} from 'react-bootstrap'
import shoe from '../../assest/img/shoe.jpg'
import { BsStarFill } from "react-icons/bs";
import CategoriesSwiper from '../../components/CategoriesSwiper/CategoriesSwiper'
import axios from 'axios'
import { AddTobasket } from '../../store/reducers/basket.reducer/basket.reducer'
import {useSelector,useDispatch} from 'react-redux'
import { TypedUseSelectorHook} from 'react-redux'
import {RootState,AppDispatch} from '../../store/store'
import { AiOutlineCheck } from "react-icons/ai";
import Humanize from "humanize-plus"
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
    tag:string
    number:number
}

const Product_Details = () => {
  const dispatch = useDispatch<AppDispatch>()
const BasketReducer = useSelector<RootState>(state =>state.persistedReducer.BasketReducer.products)
const [Buybutton, setBuybutton] = useState<boolean>(false)
  const[Singleproduct,setSingleproduct]=useState<IProducts>()
  const {id}= useParams <{id:string}>()
  const [Categoriesproducts, setCategoriesproducts]=useState<IProducts[]>()
  
useEffect(() => {
  async function fetchsingleData() {
    await axios.get(`api/singleproduct/${id}`).then(res => {
      setSingleproduct(res.data.product)
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



const handle_add_to_bascket=()=>{
  setBuybutton(true)
Singleproduct &&dispatch(AddTobasket(Singleproduct))

}
 
    return (
        <div className='mt-5'>
             <div className='header text-center text-white '>
                <p>{Singleproduct?.name}</p>
             </div>
         <Container  className=''>
             <Row className=' '>
            <Col md={12} className='bg-white d-flex 
            flex-wrap justify-content-between first-col'>
              <Col xs={12} md={4}>
              <Carousel variant='dark'>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src={Singleproduct?.image}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Singleproduct?.image}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Singleproduct?.image}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
              </Col>


              <Col xs={12} md={4} className='d-flex flex-column justify-content-around' >
              <Form.Select className='w-50 mx-auto' aria-label="Default select example">
  <option>{"انتخاب سایز"}</option>
  <option value="sm">sm</option>
  <option value="md">md</option>
  <option value="lg">lg</option>
  <option value="xlg">xlg</option>
  <option value="xxlg">xxlg</option>
</Form.Select>
              <Form.Select className='w-50 mt-2 mx-auto' aria-label="Default select example">
  <option>{"تعداد"}</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</Form.Select>
<div className='d-flex flex-column mx-auto mt-2'>
    <div className='mx-auto'>{'رنگ'}</div>
    <div className='d-flex '>
<Form.Check type="radio" name='color' style={{border:'red'}} aria-label="radio 1" />
<Form.Check type="radio" name='color' style={{color:'red'}} aria-label="radio 2" />
<Form.Check type="radio" name='color' style={{color:'red'}} aria-label="radio 3" />
<Form.Check type="radio" name='color' style={{color:'red'}} aria-label="radio 4" />
</div>
</div>
              </Col>




              <Col xs={12} md={4} className='buy_card rounded mt-2  m-0 d-flex flex-column justify-content-around'>
                 <div className='d-flex justify-content-between'>{"فروشنده"} 
                 <div> {Singleproduct?.rate} <BsStarFill fill='rgb(254,165,105)'/></div></div>
                 <div>{"قنبری و دوستان"}</div>
                 <div>{"گارانتی اصالت و سلامت فیزیکی کالا"}</div>
                 <div>{" 40 درصد رضایت خریداران"}</div>
                 <div>{"وضعیت انبار :"}{Singleproduct?.isexist}</div>
                 <div>{Humanize.intComma(parseInt(Singleproduct?.price as string))} {'تومان'}</div>


               { !Buybutton?<div><Button  onClick={handle_add_to_bascket}
                 className='w-100'style={{backgroundColor:"rgb(239,57,78)",border:'none'}}>
                     {"افزودن به سبد خرید"}</Button></div>: 
                     <p className='text-center' style={{color:'green'}  }>
                       {"به سبد خرید اضافه شد"}<AiOutlineCheck/>
                     </p> 
                    
                     }
              </Col>
                </Col>
             
             <Col md={12} className='mt-5'> 
             <div className='bg-info text-center p-3'>
                 {'محصولات مرتبط'}
             </div>
             
              
                <CategoriesSwiper varient={true} filter={Singleproduct?.category}/>

              
             
             </Col>



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
             <Col xs={12} md={6} className='text-start text-center my-5' style={{fontSize:'small'}}>
             <span className='m-2 ' style={{fontSize:'x-large'}}>{'نظرات'}</span>
                 <div className='user_detail d-flex align-items-center justify-content-around '> 
                 <span>{"4 "}<BsStarFill fill='rgb(254,165,105)'/></span>
                 <h4 style={{fontSize:'15px'}}>طاها خراسانی</h4>
                 <Image width='50px' src="https://cartzilla.createx.studio/img/shop/reviews/01.jpg"
                  roundedCircle />
                  </div>
                  <div className="review mt-2 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum quisquam natus doloribus dolore qui consequuntur, voluptatum aliquid voluptas laborum architecto ipsum ipsa, repudiandae, iure veniam aliquam magnam soluta. Necessitatibus.</div>
                 <div className='user_detail my-2 d-flex align-items-center justify-content-around '> 
                 <span>{"4 "}<BsStarFill fill='rgb(254,165,105)'/></span>
                 <h4 style={{fontSize:'15px'}}>طاها خراسانی</h4>
                 <Image width='50px' src="https://cartzilla.createx.studio/img/shop/reviews/01.jpg"
                  roundedCircle />
                  </div>
                  <div className="review mt-2 px-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rerum quisquam natus doloribus dolore qui consequuntur, voluptatum aliquid voluptas laborum architecto ipsum ipsa, repudiandae, iure veniam aliquam magnam soluta. Necessitatibus.</div>
             </Col>
             </Col>
             </Row>
         </Container>
        </div>
    )
}


export default Product_Details
