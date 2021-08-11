import React ,{useState,useEffect} from 'react'
import axios from 'axios'
interface IUrl{
    url:string
    filter:{}
}
interface IProducts {
    id: string,
    name: string,
    price: number,
    image: string,
    featured: boolean,
    colors: [],
    company: string,
    description: string,
    category: string,
    gendre:string

}
interface IBrands{
  id:string
  name:string
  image:string
}

const CategorieHook = ({url,filter}:IUrl) => {
    const [Products,setProducts]=useState<IProducts[] |IBrands[]>()


    useEffect(() => {

        async function fetchbrandsData() {
          await axios.get(`api/${url}?${filter}`).then(res => {
            setProducts(res.data.brands)   
          }).catch(err => {
            console.log(err);
         })
        }
        fetchbrandsData()
      }, [])
    return [Products,setProducts]
}

export default CategorieHook
