import React ,{useState,useEffect} from 'react'
import { Col,Form ,Button,Alert, FormGroup} from 'react-bootstrap'
import { Link} from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useHistory } from 'react-router';
import { GrStar } from "react-icons/gr";
import { BiShapePolygon } from 'react-icons/bi';
const { shahr, ostan } = require('iran-cities-json');
interface Ishipping{
  setstepperActive:Function
}
const Shipping :React.FC<Ishipping>= ({setstepperActive}) => {


  const [Shipping_info,setShipping_info]=useState({
    province:'',
    city:'',
    postAddress:'',
    postalCode:'',
    plaque:'',
    unity:'',
    familyName:'',
    mobile:''
  })
  const [confirm,setconfirm]=useState({
    province:true,
    city:true,
    postAddress:true,
    postalCode:true,
    plaque:true,
    familyName:true,
    mobile:true
  })
  const history= useHistory() 

const handleChange=(e:any)=>{
  console.log(e);
  
setShipping_info({...Shipping_info,[e.target.name]:e.target.value})
console.log(e.target.value);

if(e.target.name==='province'){
  setcity(e.target.value)
}

}

const [city,setcity]=useState()


useEffect(() => {
 setstepperActive(1)
}, [])



const handleSubmit=()=>{

const _confirm={
 ...confirm
}
  if(!Shipping_info.city)
  {
    _confirm.city=false
  }
  if(!Shipping_info.province)
  {
    _confirm.province=false
  }
  if(!Shipping_info.mobile)
  {
    _confirm.mobile=false
  }
  if(!Shipping_info.postAddress)
  {
    _confirm.postAddress=false
  }
  if(!Shipping_info.postalCode)
  {
    _confirm.postalCode=false
  }
  if(!Shipping_info.familyName)
  {
    _confirm.familyName=false
  }
  
  if(!Shipping_info.plaque)
  {
    _confirm.plaque=false
  }
  
  setconfirm(_confirm)

  

if(Shipping_info.city&&Shipping_info.province&&Shipping_info.familyName&&Shipping_info.mobile
  &&Shipping_info.plaque&&Shipping_info.postAddress&&Shipping_info.postalCode)
{
history.push(`/shopping_page/accept_info`)}
}




    return (
      <div>
          {console.log(confirm)}
          <h2 className='text-black mt-4'>{"افزودن آدرس جدید"}</h2>

<div className='border-bottom '>
                <Col  md={12} className=' d-flex flex-wrap'>

                <Col xs={12} md={6} className='px-4'>
                  <FormGroup>
                  <Form.Label className='mt-5'>{'نام استان'}<GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
  <Form.Select className=" "  name='province' value={Shipping_info.province} aria-label="Default select example"
   onChange={handleChange}>
  <option value={0}>{'استان را مشخص کنید'}</option>

{
  ostan.map((item:any,index:number)=>(
    <option value={item.id}>{item.name}</option>
  ))
      }
  
  </Form.Select>
  {!confirm.province&& <Alert className=' pt-0' style={{fontSize:'10px', color:'#C20061'}} >
    {"استان  نمی تواند خالی باشد"}
  </Alert>}
  </FormGroup>
                </Col>

                <Col xs={12} md={6} className='px-4'>
               <Form.Group className="mb-3" >   
                <Form.Label className='mt-5'>{'نام شهر'}<GrStar style={{fontSize:'10px'}} fill='red'/></Form.Label>
                <Form.Select className=" "  aria-label="Default select example"  
                 name='city' value={Shipping_info.city}  onChange={handleChange}>
  <option value={0}>{'شهر را مشخص کنید'}</option>
  {shahr.map((item:any,index:number)=>(

 item.ostan==city&& <option value={item.id}>{item.name}</option>
  ))}
 
  </Form.Select>
  {!confirm.city&&<Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}} >
    {"شهر  نمی تواند خالی باشد"}
  </Alert>}
 </Form.Group>

                </Col>

                </Col>
                    


                <Col  md={12} className='d-flex flex-wrap '>

                <Col xs={12} md={6} className='mt-5 px-4'>

  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>{'نشانی پستی'}<GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
    <Form.Control as="textarea" rows={3}  name='postAddress' value={Shipping_info.postAddress}
     onChange={handleChange}/>
    {!confirm.postAddress&& <Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}} >
    {"نشانی پستی موبایل نمی تواند خالی باشد"}
  </Alert>}
  </Form.Group>

                    
</Col>
<Col xs={12} md={6} className='mt-5 px-4'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'کد پستی'} <GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
<Form.Control type="text"  name='postalCode' value={Shipping_info.postalCode} onChange={handleChange}/>
{!confirm.postalCode&&<Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}}>
    {"کد پستی نمی تواند خالی باشد"}
  </Alert>}
</Form.Group>               
</Col> 
                </Col> 
                
                <Col  md={6} className='d-flex  justify-content-between '>

                <Col xs={6} md={3} className='d-flex flex-wrap px-4 w-50'>
                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
<Form.Label>{'پلاک'}<GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
<Form.Control type="text"  name='plaque' value={Shipping_info.plaque}  onChange={handleChange}/>
{!confirm.plaque&&<Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}}>
    {"پلاک نمی تواند خالی باشد"}
  </Alert>}
</Form.Group>           
                    
</Col>
<Col xs={6} md={3} className='d-flex flex-wrap px-4 w-50'>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'واحد'}</Form.Label>
<Form.Control type="text" name='unity' value={Shipping_info.unity} onChange={handleChange}/>

</Form.Group>           
                    
                </Col>
                </Col>
                </div>


                <Col  md={6} className='mt-4  d-flex flex-wrap justify-content-around w-100'>

                <Form.Group defaultValue={0} className="mb-3 col-12 col-md-6 px-4" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'شماره موبایل'} <GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
<Form.Control type="text" name='mobile' value={Shipping_info.mobile} onChange={handleChange}/>
{!confirm.mobile&&<Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}}>
    {"شماره موبایل نمی تواند خالی باشد"}
  </Alert>}
</Form.Group>    
                <Form.Group className="mb-3 col-12 col-md-6 px-4" controlId="exampleForm.ControlTextarea1">
<Form.Label>{'نام و نام خانوادگی گیرنده '} <GrStar  style={{fontSize:'10px'}} fill='red'/></Form.Label>
<Form.Control type="text" name='familyName' value={Shipping_info.familyName} onChange={handleChange}/>
{!confirm.familyName&&<Alert  className=' pt-0'  style={{fontSize:'10px', color:'#C20061'}} >
    {"نام و نام خانوادگی نمی تواند خالی باشد"}
  </Alert>}
</Form.Group>    
                </Col>
                <Button style={{backgroundColor:'#56B68B',border:'none'}} 
                 onClick={handleSubmit} variant="primary" className='my-4 w-100' size="lg">
    {"ادامه خرید"}
  </Button>
<div className='mb-4'>
                <Link className='mb-5' to='/basket' > <BsArrowRight style={{fontSize:'2rem'}}/> {"بازگشت به سبد خرید"} </Link>
                </div>
  
        </div>
    )
}

export default Shipping
