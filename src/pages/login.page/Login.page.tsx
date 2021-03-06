import React,{useState,useEffect, MouseEventHandler} from 'react'
import { Redirect, RouteComponentProps } from "react-router";
import "./Login.page.style.css"
import { Col,Container,Row,Form,Button,Alert } from 'react-bootstrap';
import {RootState,AppDispatch} from '../../store/store'
import { Login_user } from '../../store/reducers/auth.reducer/auth.reducer';
import {useSelector,useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
 const Login_page:React.FC<RouteComponentProps> = () => {
   const [username,setusername]=useState<string>('')
   const [password,setpassword]=useState<string>('')
   const dispatch = useDispatch<AppDispatch>()
   const Is_login = useSelector<RootState>(state =>state.persistedReducer.authReducer.Is_login)
  const [verify_user,setverify_user]=useState<boolean>(true)
   if(Is_login){
     return ( <Redirect to='/'/>)
   }


 const HandleSubmit=()=>{
  

  
         async function fetchData() {
           
          await fetch('api/accounts/login',{
                   method:'POST',
                   body:JSON.stringify ({username,password}),
               }).then(res=>res.json())
               .then(data=>{

                
                setverify_user(data)
               data&&dispatch(Login_user({UserName:username,
                  Password:password,Token:'1234',RefreshToken:'1234'
                  ,Is_login:true,taha:'13'}))
                 
                  
                   }).catch(error=>{
                     setverify_user(false)
                   })
         } 
         fetchData()
         
      



 }
    return (
    <Container className='mt-5'>

        <Row className='d-flex justify-content-center'>
        
        <Col md={4} className='bg-white rounded d-flex p-4 flex-column '>
            <div className="image text-center w-100">
                <img className='img-fluid w-25 text-center' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Taha.svg" alt="brand" />
            </div>
            <div className="enter_register mt-4">
                {'????????/ ?????? ??????'}
            </div>
            <div className="information_form mt-4">
            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{"?????? ???????????? ?????? ???? ???????? ????????????"}</Form.Label>
    <Form.Control value={username} type="text" 
    onChange={(e)=>setusername(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>{"?????? ???????? ?????? ???? ???????? ????????????"}</Form.Label>
    <Form.Control type="password" value={password} 
    onChange={(e)=>setpassword(e.target.value)}/>
  </Form.Group>
{
  !verify_user&&
<Alert variant={"danger"}>
    {"?????? ???????? ???? ?????? ???????????? ???? ???????????? ???????? ??????????"}
  </Alert>
}   
  <Button variant="primary" type="button" onClick={HandleSubmit} className='w-100 mb-3' style={{backgroundColor:'#EF394E',border:'none'}}>
    {"???????? ???? ????????"}
  </Button>
  <Form.Text className="text-muted pt-3">
      {'???? ???????? ?? ???? ?????? ?????? ???? ???? ?????? ?????? ?????????? ?? ???????????? ?????????????? ???? ?????????? ?????? ????????  ?? ???????????? ???????? ?????????? ???? ???? ???????????????????.'}
    </Form.Text>
</Form>
<div className='pt-4'>
<Link className='pt-4' style={{color:'blue'}} to='/register'>{'?????? ?????? ???? ?????????? ?????????? ???????? '}</Link>
</div>
         </div>
             
        </Col>

        </Row>
    </Container>
    )
}
export default Login_page
