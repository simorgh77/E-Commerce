import React,{useState,useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsCart from '../ProductsCart/ProductsCart';
import "./Swiper.style.css"
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
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
    tag:string,
    offpercent:number
}
interface IFilter{
  category:string
  kind:string
}
type ISlide={
  filter:IFilter|undefined
varient:boolean|undefined
}
interface IObjectKeys {
  [key: string]: IProducts[];
}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MySwiper:React.FC<ISlide> =({filter,varient}) => {

  const [Products, setProducts] = useState<IProducts[]>()

  useEffect(() => {
  async function fetchData() {
    await axios.get('api/products').then(res => {
      
      setProducts(res.data.products) 
    }).catch(err => {
      console.log(err);
    })
    
  }
  fetchData()
}, [])
const history=useHistory()


  return (
    <Swiper
    spaceBetween={window.innerWidth < 500 ? 2: 0}
    slidesPerView={window.innerWidth < 500 ? 1: 3.5}
    navigation
    pagination={{ clickable: true }}
      className="w-100  h-100  flex-wrap "
    >
      
<div className='h-100 w-100  flex-wrap' >

       {
         Products?.map((item,index)=>(
           item[filter?.category as keyof IProducts]===filter?.kind as string&& 
             <>
           <SwiperSlide  className='swiperslide d-flex flex-column h-100 '>
            <Button className='d-none showbtn' onClick={()=>history.push(`/Product_Details${item.id}`)}>
              {"مشاهده محصول"}
            </Button>
   <ProductsCart key={index} item={item} />
         </SwiperSlide>
   </>
         ))
        }
      

       </div>

    </Swiper>
  );
};
export default MySwiper