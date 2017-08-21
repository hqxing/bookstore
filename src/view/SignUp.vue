<template>
	<div class="sign_up">
		<mt-field label="用户名" placeholder="请输入2-到9位数字或英文字符" v-model="username"></mt-field>
		<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
		<mt-field label="确认密码" placeholder="请确认密码" type="password" v-model="repassword"></mt-field>
		<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
		<mt-field label="验证码" v-model="captcha"></mt-field>
		<router-link to="/SignUp"><mt-button type="primary" size="large">注册</mt-button></router-link>	
		<p>
			<router-link to="/SignIn"><mt-button type="default" size="small">登录</mt-button></router-link>
			<span class="or">|</span>
			<router-link to="/Home"><mt-button type="default" size="small">取消</mt-button></router-link>
		</p>				
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
<style scope>
html,body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	/* background: url('../assets/images/bg2.jpg') no-repeat; */
	background: url('https://hbimg.b0.upaiyun.com/e99ffef4c8982eb5d9a27d763694ca3f880907237d63e-5pob05_fw658') no-repeat;
	background-size: cover;

}
.sign_up {
	background-color:rgba(0,0,0,0.2);
	margin: auto;
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
