<template>
	<div class="sign_up">
		<h1></h1>
		<div class="sign_up_warp">
			<mt-field label="用户名" placeholder="请输入2-到9位数字或英文字符" v-model="username"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="repassword"></mt-field>
			<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
			<mt-field label="验证码" v-model="captcha"></mt-field>
			<router-link to="/Home"><mt-button type="primary" size="large">注册</mt-button></router-link>	
			<p>
				<router-link to="/SignIn"><mt-button type="default" size="small">登录</mt-button></router-link>
				<span class="or">|</span>
				<router-link to="/Home"><mt-button type="default" size="small">取消</mt-button></router-link>
			</p>
		</div>					
	</div>
</template>

<script>
export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password:'',
      repassword:'',
      phone:'',
      captcha:'',
    }
  }
}
</script>
<style scoped>
.sign_up {
	width: 100%;
	height: 100%;
	margin: 0;
	background: url('https://hbimg.b0.upaiyun.com/ae7b3147210321f0fa0345980c68b37c518c2c267ae7a-nW02Ng_fw658') fixed center;
	background-size: cover; 
	text-align: center;
	position: fixed;
}
.sign_up_warp{
	background-color:rgba(0,0,0,0.2);
	padding: 10% 4%;
	position: relative;
	top: 10%;
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
