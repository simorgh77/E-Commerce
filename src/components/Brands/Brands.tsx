import React from 'react'
import { Card, Carousel } from 'react-bootstrap'
interface IBrands{
  src:string
}
const Brands:React.FC<IBrands> = ({src}) => {
  return (
    <Card className='my-3'
     style={{ width: '18rem',cursor:"pointer",border:'none'
     ,boxShadow: "0 0.125rem 0.3rem -0.0625rem rgb(0 0 0 / 3%), 0 0.275rem 0.75rem -0.0625rem rgb(0 0 0 / 6%)" 
    ,borderRadius:'20px',padding:"3rem" }}>
  <Card.Img variant="top" src={src} />
</Card>
  )
}

export default Brands
