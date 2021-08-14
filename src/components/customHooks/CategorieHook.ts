import React ,{useState,useEffect} from 'react'
import axios from 'axios'

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

const CategorieHook = (url:string,category:string,query:string) => {
    const [Products,setProducts]=useState<IProducts[]>()



    useEffect(() => {

        async function fetchbrandsData() {
          await axios.get(`${url}/${category}${query.toString()}`).then(res => {
            setProducts(res.data)   
          }).catch(err => {
            console.log(err);
         })
        }
        fetchbrandsData()
      }, [category])
    return [Products,setProducts]
}

export default CategorieHook
