<template>
<!-- 导航头部 -->
	<div class="bookstore_header">
    	<mt-header fixed title="欢迎您">
      		<mt-button icon="more" slot="right" @click="handleMore"></mt-button>
    	</mt-header> 
      <div class="bookstore_more_options" v-show="showMoreOptions">
            <ul>
                <li>
                    <router-link to="/SignIn"><mt-button type="primary" @click="handleSignIn">登录</mt-button></router-link>
                </li>
                <li>
                    <router-link to="/SignUp"><mt-button type="primary" @click="handleSignUp">注册</mt-button></router-link> 
                </li>
            </ul>                         
      </div> 
  </div>
</template>

<script>
export default {
	name:'bs-header',
    data () {
        return {
            showMoreOptions:false
        }
    },
    methods: {
        /*点击头部更多菜单*/
        handleMore() {
            console.log("成功点击头部更多");
            this.showMoreOptions=!this.showMoreOptions;
        },
        /*点击菜单中的登录*/
        handleSignIn() {
            console.log('登录');
            this.showMoreOptions=false;
        },
        /*点击菜单中的注册*/
        handleSignUp() {
            console.log('注册');
            this.showMoreOptions=false;
        },    

    }
}
</script>
<style scoped>
.bookstore_header{
  position: absolute;
  width: 100%;
  height: 6%; 
  top: 0;
  right: 0;
  left: 0;
} 
.bookstore_more_options{
  width: 18%;
  height: 10%;
 /*  background: #26a2ff; */
  position: absolute;
  top: 60%;
  right: 0;
} 
.bookstore_more_options ul{
  background: #26a2ff;
  display: block;
  position: absolute;
  right:0rem; 
  z-index: 2;
  text-align: center;
  margin-top: -5%;
  padding: 0px;
}
.bookstore_more_options ul li{
    list-style: none;
    text-align: center;
}
</style>