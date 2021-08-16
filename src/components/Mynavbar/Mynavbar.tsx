import React,{useState} from 'react'
import {Nav,DropdownButton,Dropdown,NavDropdown} from 'react-bootstrap'
import "./Mynavbar.style.css"
import { useHistory } from 'react-router'
import { render } from '@testing-library/react'
const Mynavbar = () => {
const history=useHistory()

  const [newestShow,setnewestShow]=useState(false)
  const [manShow,setmanShow]=useState(false)
  const [womanShow,setwomanShow]=useState(false)
  const [kidShow,setkidShow]=useState(false)
  const [babyShow,setbabyShow]=useState(false)
  const[rerender,setrerender]=useState(false)
    return (

        <div>
            <Nav >
  <Nav.Item className="dropdown">
  <NavDropdown id="dropdown-button dropdown"
   title="جدید ترین ها" className="btn hover" show={newestShow}
   onMouseEnter={()=>setnewestShow(true)}
   onMouseLeave={()=>setnewestShow(false)} >
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categoriespants?category=tag&varient=newest')} >
    شلوار</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categoriesshirt?category=tag&varient=newest')}  >پیراهن</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categoriesshoes?category=tag&varient=newest')} >کفش</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categoriesbag?category=tag&varient=newest')}
   >کیف</Dropdown.Item>
</NavDropdown>
  </Nav.Item>

  <Nav.Item>
  <NavDropdown id="dropdown-button" title="مردانه" className="btn hover" 
   show={manShow}
   onMouseEnter={()=>setmanShow(true)}
   onMouseLeave={()=>setmanShow(false)}>
  <Dropdown.Item 
  onClick={()=>{history.push
    ('/Product_Categoriesman?category=category&varient=pants');setrerender(!render)}}>شلوار</Dropdown.Item>
  <Dropdown.Item 
  onClick={()=>{history.push
    ('/Product_Categoriesman?category=category&varient=shirt');setrerender(!render)}}>پیراهن</Dropdown.Item>
  <Dropdown.Item 
  onClick={()=>{history.push
    ('/Product_Categoriesman?category=category&varient=shoes');setrerender(!render)}}>کفش</Dropdown.Item>
  <Dropdown.Item 
  onClick={()=>{history.push
    ('/Product_Categoriesman?category=category&varient=bag');setrerender(!render)}}>کیف</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


  <Nav.Item>
  <NavDropdown id="dropdown-button" title="زنانه" className="btn hover" 
   show={womanShow}
   onMouseEnter={()=>setwomanShow(true)}
   onMouseLeave={()=>setwomanShow(false)}>
  <Dropdown.Item   onClick={()=>{history.push
    ('/Product_Categorieswoman?category=category&varient=pants');Mynavbar()}}>شلوار</Dropdown.Item>
  <Dropdown.Item   onClick={()=>{history.push
    ('/Product_Categorieswoman?category=category&varient=shirt');Mynavbar()}}>پیراهن</Dropdown.Item>
  <Dropdown.Item   onClick={()=>history.push
    ('/Product_Categorieswoman?category=category&varient=shoes')}>کفش</Dropdown.Item>
  <Dropdown.Item   onClick={()=>history.push
    ('/Product_Categorieswoman?category=category&varient=bag')}>کیف</Dropdown.Item>
</NavDropdown>
  </Nav.Item>



  <Nav.Item>
    <NavDropdown id="dropdown-button" title="بچگانه" className="btn hover" 
     show={kidShow}
     onMouseEnter={()=>setkidShow(true)}
     onMouseLeave={()=>setkidShow(false)}>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categorieskid?category=category&varient=pants')}>شلوار</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categorieskid?category=category&varient=shirt')}>پیراهن</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categorieskid?category=category&varient=shoes')}>کفش</Dropdown.Item>
  <Dropdown.Item onClick={()=>history.push
    ('/Product_Categorieskid?category=category&varient=bag')}>کیف</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


  <Nav.Item >
    <NavDropdown id="dropdown-button" title="نوزاد" className="btn hover" 
     show={babyShow}
     onMouseEnter={()=>setbabyShow(true)}
     onMouseLeave={()=>setbabyShow(false)} >
  <Dropdown.Item  onClick={()=>history.push
    ('/Product_Categoriesbaby?category=category&varient=pants')}>شلوار</Dropdown.Item>
  <Dropdown.Item  onClick={()=>history.push
    ('/Product_Categoriesbaby?category=category&varient=shirt')}>پیراهن</Dropdown.Item>
  <Dropdown.Item  onClick={()=>history.push
    ('/Product_Categoriesbaby?category=category&varient=shoes')}>کفش</Dropdown.Item>
  <Dropdown.Item  onClick={()=>history.push
    ('/Product_Categoriesbaby?category=category&varient=bag')}>کیف</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


 

  
</Nav>
        </div>
    )
}

export default Mynavbar
