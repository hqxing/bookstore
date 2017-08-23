<template>
<!-- 导航头部 -->
	<div class="home_header">
    	<mt-header fixed title="欢迎您">
      		<mt-button icon="more" slot="right" @click="handleMore"></mt-button>
    	</mt-header> 
      <div class="home_more_options" v-show="showMoreOptions">
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
.home_header{
  position: relative;
  width: 100%;
  height: 10%; 
} 
.home_more_options{
  width: 10%;
  height: 10%;
  background: #26a2ff;
  margin: 0px;
  padding: 0px;
} 
.home_more_options ul{
  background: #26a2ff;
  display: block;
  position: absolute;
  right:0rem; 
  z-index: 2;
  text-align: center;
  margin-top: -5%;
  padding: 0px;
}
.home_more_options ul li{
    list-style: none;
    text-align: center;
}
</style>