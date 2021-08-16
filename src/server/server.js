
import { request } from "http"
import { createServer ,Model} from "miragejs"
import { useParams } from "react-router"

const products=[
  {
  "id": "abcdefghi",
  "name": "هودی مردانه مدل زمستانی",
  "price": '25999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/02.jpg",
  "brand": "adidas",
  "isexist": "موجود",
  'tag':'auction',
  "gender":"man",
  "category": "shirt",
  "rate":5,
  "number":1,
  'offpercent':25,
  'description':" هودی ارزان مردانه مناسب زمستان ومجالس"
  },
  {
  "id": "sdafsadga",
  "name": " عینک زنانه آفتابی مدل 123",
  "price": '500000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/05.jpg",
  "brand": "adidas",
  "isexist": "ناموجود",
  "gender":"woman",
  'tag':'auction',
  "category": "glass",
  "rate":3.5,
  "number":1,
  'offpercent':10,
  'description':"عینک آفتابی مناسب کلاس گذاشتن"
  },
  {
  "id": "dsfhdsh",
  "name": "کیف مردانه مدل مدرسه",
  "price": '300000',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/06.jpg",
  "brand": "adidas",
  "gender":"man",
  "isexist": "موجود",
  'tag':'auction',
  "category": "bag",
  "rate":4,
  "number":1,
  'offpercent':5,

'description':"کیف مناسب مدرسه و دانشگاه"},
  {
  "id": "safdgsdfhgdsf",
  "name": "کفش مردانه  مدل رسمی",
  "price": '250999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/01.jpg",
  "brand": "puma",
  "isexist": "موجود",
  "category": "shoes",
  "tag":'amazing',
  "rate":4.5,
  "gender":"man",
  "number":1,
  'offpercent':55,
  'description':"کفش مردانه بسیار زیبا مناسب پیاده روی",
  },
  {
  "id": "arqwefxzcvxvb",
  "name": "شلوارک لی مدل 123",
  "price": '85999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/03.jpg",
  "brand": "puma",
  "isexist": "موجود",
  "category": "breeks",
  "tag":'amazing',
  "rate":3.5,
  "gender":"woman",
  "number":1,
  'offpercent':65,
  'description':"شلوارک زنانه تحریک آمیز مناسب دلبری",
  },
  {
  "id": "arqwefxzcdsfvxvb",
  "name": "لباس  مدل دخترونه",
  "price": '125999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/04.jpg",
  "brand": "tommy",
  "isexist": "موجود",
  "category": "shirt",
  "tag":'amazing',
  "rate":4,
  "gender":"woman",
  "number":1,
  'offpercent':2,
'description':"لباس دخترانه زیبا مناسب قر دادن"
},
  {
  "id": "arqwefsadxzcdsfvxvb",
  "name": "کفش اسپورت مدل رنگین کمان",
  "price": '175999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/25.jpg",
  "brand": "tommy",
  "isexist": "ناموجود",
  "category": "shoes",
  "tag":'newest',
  "rate":3,
  "gender":"woman",
  "number":1,
  'offpercent':12,
  'description':"کفش رنگین کمانی مناسب مجالس لهو و لعب"
  },
  {
  "id": "arqwefsdsfadxzcdsfvxvb",
  "name": "هودی اسپورت مدل خوب",
  "price": '95999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/20.jpg",
  "brand": "columbia",
  "isexist": "ناموجود",
  "category": "shirt",
  "rate":3.5,
  "tag":'newest',
  "gender":"man",
  "number":1,
  'offpercent':18,
  'description':"هودی اسپورت مناسب مخ زنی"
  },
  {
  "id": "arqwefsdsfasdfdxzcdsfvxvb",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "brand": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"man",
  "number":1,
  'offpercent':24,
  'description':"هودی جذاب برای آقایان با سلیقه"
  },


 
  {
  "id": "arqsdwsadfefsdsfadsfsdfdxzcdsfvxvb",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "brand": "nike",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"kid",
  "number":1,
  'offpercent':25,
  'description':"هودی جذاب برای آقایان با سلیقه"
  },
  {
  "id": "fdsajkasdf",
  "name": "هودی اسپورت مدل قرمز",
  "price": '110999',
  "image": "https://cartzilla.createx.studio/img/shop/catalog/24.jpg",
  "brand": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"baby",
  "number":1,
  'offpercent':35,
  'description':"هودی جذاب برای آقایان با سلیقه"
  },
  {
  "id": "fdsajsdfasdfkasdf",
  "name": "هودی اسپورت مدل قرمز",
  "price": '180999',
  "image": "https://images.unsplash.com/photo-1621951753015-740c699ab970?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHRzaGlydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "brand": "columbia",
  "isexist": "موجود",
  "category": "shirt",
  "rate":5,
  "tag":'newest',
  "gender":"man",
  "number":1,
  'offpercent':45,
  'description':"هودی جذاب برای آقایان با سلیقه"
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
    name:'columbia',
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
const auth=[
  {
    username:'taha',
    password:'1234',
    role:'admin',
    toke:'1234',
    refreshtoken:'1234'
  }
]

export function makeServer({environment="test"}={}){
  let server=createServer({
    environment,
    models:{
      product:Model,
      brand:Model,
      singleproduct:Model,
      auth:Model
    },
    seeds(server) {
auth.map(item=>{
  server.create('auth',{username:item.username,password:item.password,role:item.role
    ,toke:item.toke,refreshtoken:item.refreshtoken})
})
      products.map(item=>{
        server.create("product", {id:item.id, number:item.number, name: item.name, price: item.price,category:item.category,
          isexist:item.isexist,description:item.description,tag:item.tag,offpercent:item.offpercent, image:item.image,brand:item.brand,gender:item.gender,rate:item.rate})
          
        })
      products.map(item=>{
        server.create("singleproduct", {id:item.id, number:item.number, name: item.name, price: item.price,category:item.category,
          isexist:item.isexist,description:item.description,offpercent:item.offpercent,tag:item.tag, image:item.image,brand:item.brand,gender:item.gender,rate:item.rate})
          
        })
      brands.map(item=>{
        server.create("brand", {id:item.id, name: item.name, image:item.image})
        })
        
        
      },
      routes() {
        this.namespace = "api"
        
        this.post('/account/login',(schema,request)=>{

          const {username,password}=JSON.parse(request.requestBody)

          const data=auth.filter(item=>{
            if(item.username===username&&item.password===password){
              return item
            }
          })

          return data
        })

        this.get("/products", (schema, request) => {
          return schema.products.all()
      })
      this.get("/brands", (schema, request) => {
        return schema.brands.all()
    })
      this.get("/products/:category", (schema, request) => {
        const {category,varient}=request.queryParams;
        const kind=request.params.category
        console.log(kind);
       
         if(category==='gender'){
          var data=products.filter
          (item=>item[category]===varient && item.gender===kind) 
        }
        else if(category==='category' &&(kind==="man"||kind==="woman"||kind==="kid"||kind==="baby")){
          var data=products.filter
          (item=>item[category]===varient &&item.gender===kind )
        }
        else if(category==='category'){
          var data=products.filter
          (item=>item[category]===varient )
        }
        else if(category==='tag'){
          var data=products.filter
          (item=>item[category]===varient&&item.category===kind )
        }
        else{
          var data=products.filter
          (item=>item[category]===varient )
        }
         return data
      })
      this.get("/singleproduct/:id", (schema, request) => {
        let id=request.params.id
        console.log(id);
         return  schema.products.find(id)
      })


    },
  })
}
















