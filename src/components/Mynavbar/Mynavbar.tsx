import React from 'react'
import {Nav,DropdownButton,Dropdown,NavDropdown} from 'react-bootstrap'
import "./Mynavbar.style.css"
const Mynavbar = () => {
    return (
        <div>
            <Nav >
  <Nav.Item>
  <NavDropdown id="dropdown-button" title="جدید ترین ها" className="btn">
  <Dropdown.Item href="#/action-1">کیف</Dropdown.Item>
  <Dropdown.Item href="#/action-2">کفش</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>

  
  <Nav.Item>
  <NavDropdown id="dropdown-button" title="مردانه" className="btn">
  <Dropdown.Item href="#/action-1">کیف</Dropdown.Item>
  <Dropdown.Item href="#/action-2">کفش</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


  <Nav.Item>
  <NavDropdown id="dropdown-button" title="زنانه" className="btn">
  <Dropdown.Item href="#/action-1">کیف</Dropdown.Item>
  <Dropdown.Item href="#/action-2">کفش</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>



  <Nav.Item>
    <NavDropdown id="dropdown-button" title="بچگانه" className="btn">
  <Dropdown.Item href="#/action-1">کیف</Dropdown.Item>
  <Dropdown.Item href="#/action-2">کفش</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


  <Nav.Item>
    <NavDropdown id="dropdown-button" title="نوزاد" className="btn">
  <Dropdown.Item href="#/action-1">کیف</Dropdown.Item>
  <Dropdown.Item href="#/action-2">کفش</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>


  <Nav.Item>
     <NavDropdown id="dropdown-button" title="برند ها" className="btn">
  <Dropdown.Item href="#/action-1">nike</Dropdown.Item>
  <Dropdown.Item href="#/action-2">puma</Dropdown.Item>
  <Dropdown.Item href="#/action-3">ساعت</Dropdown.Item>
  <Dropdown.Item href="#/action-3">دامن</Dropdown.Item>
</NavDropdown>
  </Nav.Item>

  
</Nav>
        </div>
    )
}

export default Mynavbar
