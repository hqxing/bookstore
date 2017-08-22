<template>
		<div class="footer">
		 <nav class="bottombar">
			<router-link  to="/Home"  exact tag="li">
 					<span class="icon icon-home"></span>
 				 <p class="home_text">主页</p>
 			</router-link>
		  <router-link  to="SignIn" tag="li">
				<span class="icon icon-find"></span>
			 	<p class="home_text">商城</p>
		  </router-link>
		  <router-link  to="SignUp" tag="li">
				<span class="icon icon-info"></span>
			 	<p class="home_text">我的</p>
		  </router-link>
		  <!-- <router-link  :to="isLogin" tag="li">
		  				<span class="icon icon-info"></span>
		  			 	<p class="home_text">我的</p>
		  </router-link> -->
		</nav>
	</div>

</template>
<script>
export default{
	/*computed: {
		isLogin(){
			console.log('dfsh')
			if(this.$store.state.check === false){
				return '/Login'
		   }else{
				return  '/Personal'
				}
		}	
	}*/
}
</script>

<style>
	.footer{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		z-index: 10;
		font-size:0.4rem;
	}
	.bottombar{
	  width: 100%;
		height: 50px;
	  display: flex;
	  background-color: #fff;
	}
	.bottombar li{
		flex: 1;
		height: 55px;
	  list-style: none;
	}
	.icon {
	  display:block;
	  width: 100%;
		height: 30px;
		margin: 0;
		padding: 0;
	}
	.icon-home{
		background: url('../assets/images/home.png') no-repeat;
	  background-position: center center;
	}
	.icon-find{
	 background: url('../assets/images/classification.png') no-repeat;
	  background-position: center center;
	}
	.icon-info{
		background: url('../assets/images/shopping_car.png') no-repeat;
	  background-position: center center;
	}
	.router-link-active .icon-home {
	  background: url('../assets/images/person.png')no-repeat;
	  background-position: center center;
	}
	.router-link-active .icon-find {
	  background: url('../assets/images/person.png')no-repeat;
	  background-position: center center;
	}
	.router-link-active .icon-info {
	  background: url('../assets/images/person.png')no-repeat;
		  background-position: center center;
	}
	 p {
		text-align: center;
	}
	.router-link-active .home_text{
	  color: #fb8a2e;
		text-align: center;
		font-size:0.4rem;
	}
</style>