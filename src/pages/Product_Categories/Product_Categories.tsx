import React,{useState,useEffect} from 'react'
import { Pagination ,Col,Container,Row,Button,Offcanvas} from 'react-bootstrap'
import ProductCart from "../../components/ProductsCart/ProductsCart"
import {useParams} from "react-router-dom"
import axios from "axios"

interface ICategory{
 id: string,
 name: string,
  price: number,
 image: string,
featured: boolean,
colors: [],
company: string,
description:string ,
category:string,
}
let items:any = [];
for (let number = 1; number <= 5; number++) {
    items.push(
    <Pagination.Item href='/' key={number}>
      {number}
    </Pagination.Item>,
  );
}



const Product_Categories = () => {

        const {caregories}=useParams<{caregories:string}>()
        console.log(caregories);
        
    const [show, setShow] = useState(true);

    const[categoryProducts,setcategoryProducts]=useState<ICategory>()
    

    useEffect(() => {
         function fetchData() {
            axios.get(`api/products/${caregories}`).then(res=>{
                  console.log([res]);    
                setcategoryProducts(res.data)
             }).catch(err=>{
               console.log(err); 
             })
              
            }
            fetchData()
      }, [caregories])


    return (
<Container>
    <Row>
<div className='text-center w-100 display-3 bg-info'>
    <span >
    {caregories
    }
    {
 console.log(categoryProducts)
    }
    </span>
</div>
        <div className='d-flex'>
<Col md={10}  >
    <div className="d-flex flex-wrap justify-content-around mt-5">
        {/* <div className='my-5'>
<ProductCart item={category}/>
</div>
        <div className='my-5'>
<ProductCart item={category}/>
</div>
        <div className='my-5'>
<ProductCart item={category}/>
</div>
        <div className='my-5'>
<ProductCart item={category}/>
</div>
        <div className='my-5'>
<ProductCart item={category}/>
</div>
        <div className='my-5'> 
<ProductCart item={category}/>
</div>
        <div className='my-5'> 
<ProductCart item={category}/>
</div>
        <div className='my-5'> 
<ProductCart item={category}/>
</div>
        <div className='my-5'> 
<ProductCart item={category}/>
</div> */}

</div>
             <div className="pagination">
    <Pagination>{items}</Pagination>

  </div>
</Col>
<Col md={2} className=" d-sm-none d-md-flex text-center" style={style}>

<div className="Offcanvas mx-auto" >
    
 <span className='text-dark bold'>دسته بندی نتایج</span>
</div>

    </Col>
        </div>
    </Row>
</Container>
    )
}

export default Product_Categories


const style={
    width:"20vw",
    height:"60%",
    backgroundColor:'white',
    boxShadow:"5px 5px 21px 5px rgba(0,0,0,0.45)",
    borderRadius:"15px", 
}