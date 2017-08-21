<template>
	<div class="sign_in">
		<mt-field label="用户名" v-model="username"></mt-field>
		<mt-field label="密码" type="password" v-model="password"></mt-field>
		<router-link to="/SignIn"><mt-button type="primary" size="normal">登录</mt-button></router-link>
		<router-link to="/Home"><mt-button type="primary" size="normal">取消</mt-button></router-link>
		<p>
			<mt-button type="default" size="small">忘记密码</mt-button>
			<span class="or">|</span>
			<router-link to="/SignUp"><mt-button type="default" size="small">注册</mt-button></router-link>
		</p>				
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
<style scope>
html,body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	/* background: url('../assets/images/bg2.jpg') no-repeat; */
	background: url('https://hbimg.b0.upaiyun.com/ae7b3147210321f0fa0345980c68b37c518c2c267ae7a-nW02Ng_fw658') fixed center;
	background-size: cover; 


}
.sign_in {
	background-color:rgba(0,0,0,0.2);
	height: 100%;
	margin: 9.375rem 0.625rem;
	padding: 1.25rem 0.625rem;
}
.mint-cell-wrapper {
	background-color:rgba(0,0,0,0.2);
	color: white;

	/* border-bottom: 1px solid white; */
}
.mint-cell {
	background-color:rgba(0,0,0,0.2);
	color: white;

}
.mint-field-core {
	background-color:rgba(0,0,0,0.0);
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
</style>