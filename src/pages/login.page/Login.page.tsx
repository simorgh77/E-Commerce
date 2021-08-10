import React,{useState} from 'react'
import { Redirect, RouteComponentProps } from "react-router";
import "./Login.page.style.css"
import { Col,Container,Row,Form,Button } from 'react-bootstrap';
import {RootState,AppDispatch} from '../../store/store'
import { Login_user } from '../../store/reducers/auth.reducer/auth.reducer';
import {useSelector,useDispatch} from 'react-redux'
 const Login_page:React.FC<RouteComponentProps> = () => {
   const [username,setusername]=useState<string>('')
   const [password,setpassword]=useState<string>('')
   const dispatch = useDispatch<AppDispatch>()
   const Is_loginogin = useSelector<RootState>(state =>state.persistedReducer.authReducer.Is_login)

   if(Is_loginogin){
     return ( <Redirect to='/'/>)
   }
 const handleSubmit=(e:any)=>{
   e.preventDefault()
   
   dispatch(Login_user({UserName:username,Password:password,Token:'12',RefreshToken:'12',Is_login:true}))

   
 }
    return (
    <Container className='mt-5'>

        <Row className='d-flex justify-content-center'>
        
        <Col md={4} className='bg-white rounded d-flex p-4 flex-column '>
            <div className="image text-center w-100">
                <img className='img-fluid w-25 text-center' src="https://upload.wikimedia.org/wikipedia/commons/c/ca/Taha.svg" alt="brand" />
            </div>
            <div className="enter_register mt-4">
                {'ورود/ ثبت نام'}
            </div>
            <div className="information_form mt-4">
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{"نام کاربری خود را وارد نمایید"}</Form.Label>
    <Form.Control value={username} type="text" 
    onChange={(e)=>setusername(e.target.value)}/>
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>{"رمز عبور خود را وارد نمایید"}</Form.Label>
    <Form.Control type="password" value={password} 
    onChange={(e)=>setpassword(e.target.value)}/>
  </Form.Group>

  <Button variant="primary" type="submit" className='w-100 mb-3' style={{backgroundColor:'#EF394E',border:'none'}}>
    {"ورود به سایت"}
  </Button>
  <Form.Text className="text-muted pt-3">
      {'با ورود و یا ثبت نام در طه شاپ شما شرایط و قوانین استفاده از سرویس های سایت  و قوانین حریم خصوصی آن را می‌پذیرید.'}
    </Form.Text>
</Form>
            </div>
             
        </Col>

        </Row>
    </Container>
    )
}
export default Login_page
