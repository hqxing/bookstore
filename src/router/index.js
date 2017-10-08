import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/view/SignUp'
import SignIn from '@/view/SignIn'
import BookStore from '@/view/BookStore'
import Home from '@/view/Home'
import Classification from '@/view/Classification'
import BookMsg from '@/view/BookMsg'
import Person from '@/view/Person'
import ShoppingCar from '@/view/ShoppingCar'

Vue.use(Router)

export default new Router({
  routes: [
    /*重定向为首页*/
    {path: '/',redirect: '/BookStore/Home'}, 
    {
        path: '/BookStore',
        name:'BookStore',
        component:BookStore,
         children:[
            {   /*首页*/
                path:'Home',
                name:'Home',
                component:Home
            },
            {   /*分类*/
                path:'Classification',
                name:'Classification',
                component:Classification
            },
            {   /*购物车*/
                path:'ShoppingCar',
                name:'ShoppingCar',
                component:ShoppingCar
            },
            {   /*个人*/
                path:'Person',
                name:'Person',
                component:Person
            },          

         ]
    },
    /*书的详细内容*/
    {
        path:'/BookMsg/:id',
        name:'BookMsg',
        component:BookMsg,
    },
    /*登录*/
    {
        path:'/SignIn',
        name:'SignIn',
        component:SignIn
    },
    /*注册*/
    {
        path:'/SignUp',
        name:'SignUp',
        component:SignUp
    }
  ]
})
