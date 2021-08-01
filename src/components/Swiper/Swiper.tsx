import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import ProductsCart from '../ProductsCart/ProductsCart';

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
    spaceBetween={50}
    slidesPerView={slidesPerView}
    navigation
    pagination={{ clickable: true }}
    className="mt-5"
    >
      
     {
      Products?.products.map((item,index)=>(

       index<5 && <SwiperSlide key={index}><ProductsCart item={item}/></SwiperSlide>
        ))
}

    </Swiper>
  );
};