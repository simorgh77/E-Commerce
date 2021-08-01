import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsCart from '../ProductsCart/ProductsCart';
import "./Swiper.style.css"
type IProducts={
  products:[
    id: string,
    name: string,
    price: number,
    image: string,
    featured: boolean,
    colors: [],
    company: string,
    description:string ,
    category:string,
  ]
}
type ISlide={
    slidesPerView:number,
    Products:IProducts |undefined,
setProducrs:Function

}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ({slidesPerView,Products,setProducrs}:ISlide) => {

  return (
    <Swiper
    spaceBetween={20}
    slidesPerView={3}
    navigation
    pagination={{ clickable: true }}
className="mr-5 flex-wrap"
    >
      
<div className='d-flex flex-wrap'>
     {
      Products?.products.map((item,index)=>(
       index<5 && <SwiperSlide  className='swiperslide' key={index}><ProductsCart item={item}/></SwiperSlide>
        ))
}
       </div>

    </Swiper>
  );
};