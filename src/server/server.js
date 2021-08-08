
import { createServer ,Model} from "miragejs"

const products=[
  {
  "id": "abcdefghi",
  "name": "تیشرت مردانه مدل زمستانی",
  "price": '25,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/02.jpg",
  "company": "adidas",
  "isexist": "موجود",
  'tag':'auction',
  "gender":"man",
  "category": "shirt",
  "rate":5
  },
  {
  "id": "sdafsadga",
  "name": " عینک زنانه آفتابی مدل 123",
  "price": '500,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/05.jpg",
  "company": "adidas",
  "isexist": "ناموجود",
  "gender":"woman",
  'tag':'auction',
  "category": "glass",
  "rate":3.5
  },
  {
  "id": "dsfhdsh",
  "name": "کیف مردانه مدل مدریه",
  "price": '300,000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/06.jpg",
  "company": "adidas",
  "gender":"man",
  "isexist": "موجود",
  'tag':'auction',
  "category": "bag",
  "rate":4
  },
  {
  "id": "safdgsdfhgdsf",
  "name": "کفش مردانه  مدل رسمی",
  "price": '250,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/01.jpg",
  "company": "puma",
  "isexist": "موجود",
  "category": "shoes",
  "tag":'amazing',
  "rate":4.5,
  "gender":"man",
  },
  {
  "id": "arqwefxzcvxvb",
  "name": "شلوارک لی مدل 123",
  "price": '85,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/03.jpg",
  "company": "puma",
  "isexist": "موجود",
  "category": "breeks",
  "tag":'amazing',
  "rate":3.5,
  "gender":"woman",
  },
  {
  "id": "arqwefxzcdsfvxvb",
  "name": "لباس راحتی مدل دخترونه",
  "price": '125,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/04.jpg",
  "company": "tommy",
  "isexist": "موجود",
  "category": "shirt",
  "tag":'amazing',
  "rate":4,
  "gender":"woman",
  },
  {
  "id": "arqwefsadxzcdsfvxvb",
  "name": "کفش اسپورت مدل رنگین کمان",
  "price": '175,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/25.jpg",
  "company": "tommy",
  "isexist": "ناموجود",
  "category": "shoes",
  "tag":'newest',
  "rate":3,
  "gender":"woman",
  },
  {
  "id": "arqwefsdsfadxzcdsfvxvb",
  "name": "هودی اسپورت مدل خوب",
  "price": '95,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/20.jpg",
  "company": "columbia",
  "isexist": "ناموجود",
  "category": "shirt",
  "rate":3.5,
  "tag":'newest',
  "gender":"man",
  },
  {
  "id": "arqwefsdsfasdfdxzcdsfvxvb",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "company": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"man",
  },


 
  {
  "id": "arqsdwsadfefsdsfadsfsdfdxzcdsfvxvb",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "company": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"kid",
  },
  {
  "id": "fdsajkasdf",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110,999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "company": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"baby",
  },
  {
  "id": "fdsajsdfasdfkasdf",
  "name": "هودی اسپورت مدل قرمز",
  "price": '180,999',
  "image": "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "company": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"man",
  },
  
  ]
const brands=[

  {
    id:'awesdfa',
    image:"https://cartzilla.createx.studio/img/shop/brands/08.png",
    name:'american eagle',
  },
  {
    id:'awesdfaadsf',
    image:"https://cartzilla.createx.studio/img/shop/brands/07.png",
    name:'brooks',
  },
  {
    id:'awesdfakjgh',
    image:"https://cartzilla.createx.studio/img/shop/brands/06.png",
    name:'hermes',
  },
  {
    id:'awesdfaxcv',
    image:"https://cartzilla.createx.studio/img/shop/brands/05.png",
    name:'nike',
  },
  {
    id:'awesdfaytu',
    image:"https://cartzilla.createx.studio/img/shop/brands/04.png",
    name:'clombia',
  },
  {
    id:'awesdfamb',
    image:"https://cartzilla.createx.studio/img/shop/brands/03.png",
    name:'tommy',
  },
  {
    id:'mcvngdsaf',
    image:"https://cartzilla.createx.studio/img/shop/brands/02.png",
    name:'puma',
  },
  {
    id:'awesdfartu',
    image:"https://cartzilla.createx.studio/img/shop/brands/01.png",
    name:'adidas',
  },
]


export function makeServer({environment="test"}={}){
  let server=createServer({
    environment,
    models:{
      product:Model,
      brand:Model,
      singleproduct:Model
    },
    seeds(server) {

      products.map(item=>{
        server.create("product", {id:item.id, name: item.name, price: item.price,category:item.category,
          isexist:item.isexist,tag:item.tag, image:item.image,company:item.company,gender:item.gender,rate:item.rate})
          
        })
      products.map(item=>{
        server.create("singleproduct", {id:item.id, name: item.name, price: item.price,category:item.category,
          isexist:item.isexist,tag:item.tag, image:item.image,company:item.company,gender:item.gender,rate:item.rate})
          
        })
      brands.map(item=>{
        server.create("brand", {id:item.id, name: item.name, image:item.image})
        })
        
        
      },
      routes() {
        this.namespace = "api"
        
        this.get("/products", (schema, request) => {
          return schema.products.all()
      })
      this.get("/brands", (schema, request) => {
        return schema.brands.all()
    })
      this.get("/products/:category", (schema, request) => {
        let category=request.params.category
        let data=products.filter(item=>item.gender==category)
         return  data
      })
      this.get("/singleproduct/:id", (schema, request) => {
        let id=request.params.id
        console.log(id);
         return  schema.products.find(id)
      })


    },
  })
}
















