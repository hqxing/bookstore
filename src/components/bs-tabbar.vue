<template>
	<div class="bs_tabbar">
	<mt-tabbar v-model="selected" fixed >	  
		  <mt-tab-item id="Home" >
		  	<img slot="icon" src="../assets/images/home.png">
		    首页		   
		  </mt-tab-item>	  
	  
		  <mt-tab-item id="Classification">
		    <img slot="icon" src="../assets/images/classification.png">
		    分类
		  </mt-tab-item>

	  
	  
		  <mt-tab-item id="ShoppingCar">
		    <img slot="icon" src="../assets/images/shopping_car.png">
		    购物车
		  </mt-tab-item>
	  
	  
		  <mt-tab-item id="Person">
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
    			/*默认选中的tabitem*/
      			selected: 'Home' 
      			
    		}	
  		},
  		watch: {
			selected:'handleTo' 		    
  		},
  		methods:{
  			/*点击tab栏切换路由*/
	  		handleTo: function (val, oldVal) {
	  		    console.log("当前tab栏的ID值",val)
	  		    this.$router.push({name:val});
	  		}	  		  
  		}

	}
</script>
<style scoped>
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