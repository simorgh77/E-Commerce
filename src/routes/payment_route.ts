import Shipping from "../components/Shipping/Shipping"
import Payment_gate from "../components/Payment_gate/Payment_gate"
import Accept_info from "../components/Accept_info/Accept_info"
 const shoping_route=[
    {
        path:'/payment_gate',
        exact:true,
        page:Payment_gate
    },
    {
        path:'/shipping',
        exact:true,
        page:Shipping
    },
    {
        path:'/accept_info',
        exact:true,
        page:Accept_info
    }, 
]


export default shoping_route