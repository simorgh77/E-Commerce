import React,{useState,useEffect} from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsCart from '../ProductsCart/ProductsCart';
import "./Swiper.style.css"
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
type ISlide={
filter:string|undefined
varient:boolean|undefined
}
interface AgeMap {
    [name: string]: number
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

  return (
    <Swiper
    spaceBetween={window.innerWidth < 500 ? 2: 2}
    slidesPerView={window.innerWidth < 500 ? 1: 2.5}
    navigation
    pagination={{ clickable: true }}
      className="w-100  h-100  flex-wrap "
    >
      
<div className='h-100 w-100  flex-wrap' >

       {
         Products?.map((item,index)=>(
           !varient? item.gender===filter&& 
           
           <SwiperSlide  className='swiperslide  d-flex h-100 ' >
            
   <ProductsCart key={index} item={item}/>
         </SwiperSlide>
         :
   item.tag ===filter&&
         <SwiperSlide  className='swiperslide  d-flex h-100 ' >
   <ProductsCart key={index} item={item}/>
         </SwiperSlide>
         ))
        }
      

       </div>

    </Swiper>
  );
};
export default MySwiper