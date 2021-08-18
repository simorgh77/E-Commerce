import React from 'react'
import { Col ,Container,Row } from 'react-bootstrap'
import "./dashboard.style.css"
const Dashboard = () => {
    return (
        <Container fluid>
            <Row className='p-3'>
                <Col md={2} className='d-none mt-5 list-of-actions text-center d-lg-block bg-white'>
            <span className='text-center mx-auto border-bottom'>طاها شاپ</span>

            <ul className='p-0 m-0 text-end '>
            <li>{'لیست کاربران'}</li>
            <li>{'حذف کاربر'}</li>
            <li>{'لیست محصولات'}</li>
            <li>{'اضافه کردن محصول'}</li>
            <li>{'حذف محصول'}</li>   
            </ul>    
                </Col>
                <Col xs={12} md={9}>
                1
                </Col>
            </Row>
            </Container>
    )
}

export default Dashboard
