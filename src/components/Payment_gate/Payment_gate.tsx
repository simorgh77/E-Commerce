import React from 'react'
interface Ipayment{
    setstepperActive:Function
  }
const Payment_gate:React.FC<Ipayment> = ({setstepperActive}) => {
    return (
        <div>
            this is payment_gate
        </div>
    )
}

export default Payment_gate
