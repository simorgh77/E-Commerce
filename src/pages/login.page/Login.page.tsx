import React from 'react'
import { RouteComponentProps } from "react-router";
import "./Login.page.style.css"
import { Col,Container,Row,Form,Button } from 'react-bootstrap';

 const Login_page:React.FC<RouteComponentProps> = () => {
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
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>{"نام کاربری خود را وارد نمایید"}</Form.Label>
    <Form.Control type="email" />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>{"رمز عبور خود را وارد نمایید"}</Form.Label>
    <Form.Control type="password"/>
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
