import React from "react"
import Login_page  from "../pages/login.page/Login.page"
import Backet_product from "../pages/Backet_product/Backet_product"
import  Home_page  from "../pages/Home_page/Home_page"
import  Product_Details  from "../pages/Product_Details/Product_Details"
import  Product_Categories  from "../pages/Product_Categories/Product_Categories"
import  Error  from "../pages/Error/Error"
import Shopping_page from "../pages/Shopping_page/Shopping_page"
const routes=[
{
    path:'/',
    exact:true,
    isRequired:false,
    page:Home_page
},
{
    path:'/login',
    exact:true,
    isRequired:false,
    page:Login_page
},
{
    path:'/basket',
    exact:true,
    isRequired:false,
    page:Backet_product
},
{
    path:'/Product_Categories:caregories',
    exact:false,
    isRequired:false,
    page:Product_Categories
},
{
    path:'/Product_Details:id',
    exact:false,
    isRequired:false,
    page:Product_Details
},
{
    path:'/shopping_page',
    exact:false,
    isRequired:true,
    page:Shopping_page
},
{
    path:'*',
    exact:false,
    page:Error
}
]

export default routes