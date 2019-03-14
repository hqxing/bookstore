<template>
	<div class="sign_in">
	    <h1></h1>
	    <div class="sign_in_warp">
		    <mt-field label="用户名" v-model="username"></mt-field>
		    <mt-field label="密码" type="password" v-model="password"></mt-field>
		    <router-link to="/SignIn"><mt-button type="primary" size="normal">登录</mt-button></router-link>
		    <router-link to="/BookStore/Home"><mt-button type="primary" size="normal">取消</mt-button></router-link>
		    <p>
		    	<mt-button type="default" size="small">忘记密码</mt-button>
		    	<span class="or">|</span>
		    	<router-link to="/SignUp"><mt-button type="default" size="small">注册</mt-button></router-link>
		    </p>				
	    </div>

	</div>
</template>
<script>
export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password:'',
    }
  }
}
</script>
<style scoped>
.sign_in {
	width: 100%;
	height: 100%;
	margin: 0;
	background: url('https://hbimg.b0.upaiyun.com/e99ffef4c8982eb5d9a27d763694ca3f880907237d63e-5pob05_fw658') fixed center;
	background-size: cover; 
	text-align: center;
	position: fixed;
	left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}
 h1{
	color: white;
}
.sign_in_warp{
	background-color:rgba(0,0,0,0.2);
	padding: 10% 4%;
	position: relative;
	top: 20%;
} 

.mint-cell {
	background-color:rgba(0,0,0,0.2);
	color: white;
			
}
.mint-cell-wrapper {
	background-color:rgba(0,0,0,0.2);
	color: white;	
	/* border-bottom: 1px solid white; */
}

.mint-field .mint-cell-value {
	 background-color:rgba(0,0,0,0.2);
	color: white;
}
.mint-button--normal {
	background-color: #26a2ff;
	padding: 0 3rem
}
.or{
	color: white;
	font-size: 1rem;
	background-color:rgba(0,0,0,0.2);
}
.mint-button--default {
	background-color:rgba(0,0,0,0.2);
	color: white;
	font-size: 0.5rem;
	opacity: 0.7;
}
.mint-button::after{
	background-color:rgba(0,0,0,0.8);
}
div a{
	text-decoration: none;
}
p a{
	text-decoration: none;
}
</style>