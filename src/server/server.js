
import { createServer ,Model} from "miragejs"



const products=[
  {
  "id": "abcdefghi",
  "name": "تیشرت مردانه مدل روز",
  "price": '25,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/02.jpg",
  "company": "Nike",
  "description": "موجود",
  "category": "shirt",
  "rate":5
  },
  {
  "id": "sdafsadga",
  "name": " عینک مردانه مدل روز",
  "price": '500,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/05.jpg",
  "company": "Rainbow",
  "description": "ناموجود",
  "category": "glass",
  "rate":3.5
  },
  {
  "id": "dsfhdsh",
  "name": "کیف مردانه مدل روز",
  "price": '300,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/06.jpg",
  "company": "Nike",
  "description": "موجود",
  "category": "bag",
  "rate":4
  },
  {
  "id": "safdgsdfhgdsf",
  "name": "کفش مردانه  مدل روز",
  "price": '25,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/01.jpg",
  "company": "Nike",
  "description": "موجود",
  "category": "shoes",
  "rate":4.5
  },
  
  ]



export function makeServer({environment="test"}={}){
  let server=createServer({
    environment,
    models:{
      product:Model,
    },
    seeds(server) {

      products.map(item=>{
        server.create("product", {id:item.id, name: item.name, price: item.price,category:item.category,
          description:item.description, image:item.image,company:item.company,rate:item.rate})
          
        })
        
        
      },
      routes() {
        this.namespace = "api"
        
        this.get("/products", (schema, request) => {
          return schema.products.all()
          
      })
      this.get("/products/:category", (schema, request) => {
        let category=request.params.category
         return  schema.products.find(category)
      })


    },
  })
}
















