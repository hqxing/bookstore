import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SignUp from '@/view/SignUp'
import SignIn from '@/view/SignIn'
import Home from '@/view/Home'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {path: '/',redirect: '/Home',name:'Hello',component:Hello},   
    {
        path: '/Home',
        name:'Home',
        component:Home
    },
        {
        path:'/SignIn',
        name:'SignIn',
        component:SignIn
    },
     {
        path:'/SignUp',
        name:'SignUp',
        component:SignUp
    }

  ]
})
