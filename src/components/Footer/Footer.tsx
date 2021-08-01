import React from 'react'
import {InputGroup,FormControl,Button} from "react-bootstrap"
import { FaInstagram ,FaTwitter ,FaLinkedin} from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='d-flex flex-column'  style={{backgroundColor:'#2b3445'}}>
        <div 
        className="d-flex justify-content-around ">
            
<div className="list d-flex justify-content-around mt-5 w-75" >
<ul className="text-center text-white" style={{ listStyleType: "none"}}>
<h1>sdf</h1>
  <li className="">An item</li>
  <li className="">A second item</li>
  <li className="">A third item</li>
  <li className="">A fourth item</li>
  <li className="">And a fifth one</li>
</ul>
<ul className="text-center text-white" style={{ listStyleType: "none"}}>
<h1>sdf</h1>
  <li className="">An item</li>
  <li className="">A second item</li>
  <li className="">A third item</li>
  <li className="">A fourth item</li>
  <li className="">And a fifth one</li>
</ul>
<ul className="text-center text-white" style={{ listStyleType: "none"}}>
<h1>sdf</h1>
  <li className="">An item</li>
  <li className="">A second item</li>
  <li className="">A third item</li>
  <li className="">A fourth item</li>
  <li className="">And a fifth one</li>
</ul>
<ul className="text-center text-white" style={{ listStyleType: "none"}}>
<h1>sdf</h1>
  <li className="">An item</li>
  <li className="">A second item</li>
  <li className="">A third item</li>
  <li className="">A fourth item</li>
  <li className="">And a fifth one</li>
</ul>
<ul className="text-center text-white" style={{ listStyleType: "none"}}>
<h1>sdf</h1>
  <li className="">An item</li>
  <li className="">A second item</li>
  <li className="">A third item</li>
  <li className="">A fourth item</li>
  <li className="">And a fifth one</li>
</ul>
</div>
<div className="icons my-auto h-50">
    <h2 className='text-white d-flex w-100 justify-content-around '> مارا دنبال کنید</h2>
            <FaInstagram style={{fill:"lightgray",fontSize:"2.5rem"}} />
            <FaTwitter style={{fill:"lightgray",fontSize:"2.5rem"}}/>
            <FaLinkedin style={{fill:"lightgray",fontSize:"2.5rem"}}/>
            </div>
        </div>
<div className="email mx-auto ">
    <h4 className="text-white mb-3 text-center">{"از تخفیفات ما با خبر شوید"}</h4>
<InputGroup className="mb-3 w-100 d-flex justify-contetn-around">
    <FormControl
      placeholder="ایمیل خود را وارد نمایید"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button id="button-addon2" className='bg-success text-dark rounded'>
     {"ثبت"}
    </Button>
  </InputGroup>

</div>

        <div className="copyright text-white w-100 bg-dark text-center p-3 sticky-bottom">
            کلیه حقوق سایت متعلق به طه خراسانی میباشد
        </div>
        </footer>
    )
}

export default Footer
