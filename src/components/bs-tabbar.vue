<template>
	<div class="bs_tabbar">
	<mt-tabbar v-model="selected" fixed value>	  
		  <mt-tab-item id="首页"  @click="handleGo()">
		    <img slot="icon" src="../assets/images/home.png">
		    首页
		  </mt-tab-item>	  
	  
		  <mt-tab-item id="分类">
		    <img slot="icon" src="../assets/images/classification.png">
		    分类
		  </mt-tab-item>
	  
	  
		  <mt-tab-item id="购物车">
		    <img slot="icon" src="../assets/images/shopping_car.png">
		    购物车
		  </mt-tab-item>
	  
	  
		  <mt-tab-item id="我的">
		    <img slot="icon" src="../assets/images/person.png">
		    我的
		  </mt-tab-item>
	  
	</mt-tabbar>
	</div>
</template>

<script>
	export default {
		name:'ba-tabbar',
		data () {
    		return {
      			selected: ' ' 
    		}	
  		},
  		methods: {
    		handleGo() {
    			let a=this;
    			console.log(a);
      			 a.$router.go('../view/SignIn.vue');
    		}
  		}

	}
</script>
<style>
.mint-tabbar {
	background-color: #26a2ff;
}
/* .mint-tab-item {
	position: relative;
    width: 20%;
    height: 10%;
    left: 20%;
} */

</style>