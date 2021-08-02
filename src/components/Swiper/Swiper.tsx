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
    setProducts:Function

}
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default ({slidesPerView,Products,setProducts}:ISlide) => {

  return (
    <Swiper
    spaceBetween={window.innerWidth < 500 ? 2: 50}
    slidesPerView={window.innerWidth < 500 ? 3: 2.5}
    navigation
    pagination={{ clickable: true }}
      className="w-100 flex-wrap "
    >
      
<div className=' w-100 d-flex flex-wrap ' >
     {
      Products?.products.map((item,index)=>(
       index<5 && <SwiperSlide  className='swiperslide ' key={index}><ProductsCart item={item}/></SwiperSlide>
        ))
}
       </div>

    </Swiper>
  );
};