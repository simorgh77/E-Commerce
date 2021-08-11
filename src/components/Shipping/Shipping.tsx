import React ,{useState,useEffect} from 'react'
import { Col,Form ,Button} from 'react-bootstrap'
import { Link} from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from 'react-router';
interface Ishipping{
  setstepperActive:Function
}
const Shipping :React.FC<Ishipping>= ({setstepperActive}) => {
  const history= useHistory() 

useEffect(() => {
 setstepperActive(1)
}, [])

    return (
        <div>
          <h2 className='text-black mt-4'>{"افزودن آدرس جدید"}</h2>

<div className='border-bottom '>
                <Col  md={12} className=' d-flex flex-wrap'>

                <Col xs={12} md={6} className='px-4'>

  <Form.Select className="mt-5 "  aria-label="Default select example">
  <option>{'استان را مشخص کنید'}</option>
  <option value="1">{"کرمان"}</option>
  <option value="2">{"تهران"}</option>
  <option value="3">{"مشهد"}</option>
  </Form.Select>
 

                </Col>

                <Col xs={12} md={6} className='px-4'>
            
                <Form.Select className="mt-5  "  aria-label="Default select example">
                  
  <option>{'شهر را مشخص کنید'}</option>
  <option value="1">{"رفسنحان"}</option>
  <option value="2">{"سیرجان"}</option>
  <option value="3">{"بم"}</option>
  </Form.Select>
 

                </Col>

                </Col>
                    


                <Col  md={12} className='d-flex flex-wrap '>

                <Col xs={12} md={6} className='mt-5 px-4'>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>{'نشانی پستی'}</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>

                    
</Col>
<Col xs={12} md={6} className='mt-5 px-4'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'کد پستی'}</Form.Label>
<Form.Control type="text" />

</Form.Group>               
</Col> 
                </Col> 
                
                <Col  md={6} className='d-flex  justify-content-between '>

                <Col xs={6} md={3} className='d-flex flex-wrap px-4 w-50'>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
<Form.Label>{'پلاک'}</Form.Label>
<Form.Control type="text" />

</Form.Group>           
                    
</Col>
<Col xs={6} md={3} className='d-flex flex-wrap px-4 w-50'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'واحد'}</Form.Label>
<Form.Control type="text" />

</Form.Group>           
                    
                </Col>
                </Col>
                </div>


                <Col  md={6} className='mt-4 px-4'>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'نام و نام خانوادگی گیرنده '}</Form.Label>
<Form.Control type="text" />

</Form.Group>    
                </Col>
                <Button style={{backgroundColor:'#56B68B',border:'none'}} 
                 onClick={()=>{history.push('/shopping_page/accept_info')}} variant="primary" className='my-4 w-100' size="lg">
    {"ادامه خرید"}
  </Button>
<div className='mb-4'>
                <Link className='mb-5' to='/basket' > <BsArrowRight style={{fontSize:'2rem'}}/> {"بازگشت به سبد خرید"} </Link>
                </div>
  
        </div>
    )
}

export default Shipping
