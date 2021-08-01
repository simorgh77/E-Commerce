import React from 'react'
import {Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
const ProductsCart = ({item}:any) => {
  const history=useHistory()

  
    return (
        <div>
           <Card style={{ width: '18rem',cursor:'pointer' }} 
           onClick={()=>history.push(`/Product_Details${item.id}`)}>
  <Card.Img variant="top" className="img-fluid" src={item.image} style={{width:'100%',height:'18rem'}}/>
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
     {item.description}
    </Card.Text>
  </Card.Body>
</Card> 
        </div>
    )
}

export default ProductsCart

