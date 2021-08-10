import React ,{useEffect}from 'react';
import  Header  from './components/Header/Header';
import Mynavbar from './components/Mynavbar/Mynavbar';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './App.css';
import routes from './routes/main.routes';
import { RouteComponentProps } from "react-router";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App w-100">
      <Router>
      <Header >
      <Mynavbar/>
      </Header>
<Switch>
      {routes.map(item=>(

<PrivateRoute  path={item.path} exact={item.exact} 
isRequired={item.isRequired} Page={item.page} />

      ))}
</Switch>

<div className="footer">
<Footer/>
</div>
</Router>

    </div>
    
  );
}

export default App;
