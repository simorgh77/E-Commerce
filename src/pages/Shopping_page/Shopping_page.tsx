import React ,{useState} from 'react'
import Stepper from 'bs-stepper'
import { Col,Container,Row, Form,Button} from 'react-bootstrap'
import { GrStar } from "react-icons/gr";
import { Switch, Route,Link
} from "react-router-dom";
import payment_route from '../../routes/payment_route';
import { RouteComponentProps } from "react-router";
import "./Shopping_page.style.css"
import MyStepper from '../../components/MyStepper/MyStepper';
const Shopping_page = (props:RouteComponentProps) => {
const [stepperActive,setstepperActive]=useState<number>(1)
    return (
        <>
            <MyStepper stepperActive={stepperActive}/>
        <Container className='bg-white rounded ' style={{boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.3)'}}>

            <Row className=' m-0 mt-5 d-flex flex-wrap flex-column'>

            
            <Switch>
{
    payment_route.map((item,index)=>(
             <Route path={props.match.path+item.path} 
             exact={item.exact} render={()=><item.page {...{setstepperActive}}/>} /> 
    ))
}
    </Switch>
    </Row>
        </Container>
        </>
    )
}

export default Shopping_page
