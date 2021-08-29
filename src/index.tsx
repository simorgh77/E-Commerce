import React from 'react';
import ReactDOM from 'react-dom';
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {makeServer} from './server/server'
import { Provider } from 'react-redux';
import store,{persistor} from './store/store';
import { PersistGate } from 'redux-persist/integration/react'
import AddressContext from './context/address_context/address.context';
import Searchtitle from './context/search_contex/search_contex';
if(process.env.NODE_ENV==="production"){
  makeServer({environment:'production'})
}
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
   <PersistGate loading={<div>...loading </div>} persistor={persistor}>
   <AddressContext>
     <Searchtitle>
    <App />
    </Searchtitle>
    </AddressContext>
    </PersistGate>
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
