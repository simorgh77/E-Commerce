import React from 'react';
import { Stepper,Step } from 'react-form-stepper';
import "./MyStepper.style.css"
interface Istepper{
    stepperActive:number
}
const MyStepper:React.FC<Istepper> = ({stepperActive}) => {
    return (
        <Stepper activeStep={stepperActive} className=' mt-5 bg-white mx-auto' 
        style={{ borderRadius:'15px',width:'90%',
         boxShadow:'5px 5px 15px 5px rgba(0,0,0,0.14)'}}>
        <Step label="سبد خرید" />
        <Step label="مشخصات گیرنده" />
        <Step label="بررسی نهایی" />
        <Step label="پرداخت" />
      </Stepper>
    )
}

export default MyStepper
