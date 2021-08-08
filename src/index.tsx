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
import store from './store/store';
if(process.env.NODE_ENV==="development"){
  makeServer({environment:'development'})
}
ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
