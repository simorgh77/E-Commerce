import { Stepper,Step } from 'react-form-stepper';
import "./MyStepper.style.css"
import React from 'react'

const MyStepper = () => {
    return (
        <Stepper activeStep={1} className=' mt-5 bg-white mx-auto' 
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
