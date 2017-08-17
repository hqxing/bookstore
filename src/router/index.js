import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
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
   /* {
    	path:'/',
    	name:'SignUp',
    	component:SignUp
    }*/
    {
        path:'/',
        name:'Home',
        component:Home
    }
  ]
})
