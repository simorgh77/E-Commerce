
import { createServer ,Model} from "miragejs"

const products=[
  {
  "id": "abcdefghi",
  "name": "تیشرت مردانه مدل زمستانی",
  "price": '25,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/02.jpg",
  "company": "adidas",
  "isexist": "موجود",
  "gender":"man",
  "category": "shirt",
  "rate":5
  },
  {
  "id": "sdafsadga",
  "name": " عینک مردانه آفتابی مدل 123",
  "price": '500,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/05.jpg",
  "company": "Rainbow",
  "isexist": "ناموجود",
  "gender":"man",
  "category": "glass",
  "rate":3.5
  },
  {
  "id": "dsfhdsh",
  "name": "کیف مردانه مدل مدریه",
  "price": '300,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/06.jpg",
  "company": "casio",
  "gender":"man",
  "isexist": "موجود",
  "category": "bag",
  "rate":4
  },
  {
  "id": "safdgsdfhgdsf",
  "name": "کفش مردانه  مدل رسمی",
  "price": '250,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/01.jpg",
  "company": "Nike",
  "isexist": "موجود",
  "category": "shoes",
  "rate":4.5,
  "gender":"man",
  },
  {
  "id": "arqwefxzcvxvb",
  "name": "شلوارک لی مدل 123",
  "price": '85,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/03.jpg",
  "company": "koton",
  "isexist": "موجود",
  "category": "breeks",
  "rate":3.5,
  "gender":"woman",
  },
  {
  "id": "arqwefxzcdsfvxvb",
  "name": "لباس راحتی مدل دخترونه",
  "price": '125,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/04.jpg",
  "company": "koton",
  "isexist": "موجود",
  "category": "shirt",
  "rate":4,
  "gender":"woman",
  },
  {
  "id": "arqwefsadxzcdsfvxvb",
  "name": "کفش اسپورت مدل رنگین کمان",
  "price": '175,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/25.jpg",
  "company": "puma",
  "isexist": "ناموجود",
  "category": "shoes",
  "rate":3,
  "gender":"woman",
  },
  {
  "id": "arqwefsdsfadxzcdsfvxvb",
  "name": "هودی اسپورت مدل خوب",
  "price": '95,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/20.jpg",
  "company": "puma",
  "isexist": "ناموجود",
  "category": "shirt",
  "rate":3.5,
  "gender":"man",
  },
  {
  "id": "arqwefsdsfasdfdxzcdsfvxvb",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "company": "puma",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "gender":"man",
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
          isexist:item.isexist, image:item.image,company:item.company,gender:item.gender,rate:item.rate})
          
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
















