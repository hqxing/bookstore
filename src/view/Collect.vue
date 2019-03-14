<template>
<div class="Collect">
  <mt-header title="我的收藏">
    <router-link to="/BookStore/Person" slot="left">
      <mt-button icon="back">返回</mt-button>      
    </router-link>    
  </mt-header>
  <div class="CollectContentWrap">
  	<div class="CollectContent">
  		<div class="CollectContentL">
  			<div>
  				<img src="https://img1.doubanio.com/spic/s2720819.jpg">
  			</div>
  			<p>我的前半生</p>
  			<p class="price">￥22.0</p>
      	</div>
    	<div class="CollectContentR"> 
    		<div>
    			<img src="https://img3.doubanio.com/spic/s29421336.jpg" alt="">
    		</div>
  			<p>给孩子的故事</p>
  			<p class="price">￥42.0</p>   		
    	</div>
  	</div>
  	<div class="CollectContent">
  		<div class="CollectContentL">
  			<div>
  				<img src="https://img3.doubanio.com/spic/s29466436.jpg">
  			</div>
  			<p>沉睡的人鱼之家</p>
  			<p class="price">￥39.8</p>
      	</div>
    	<div class="CollectContentR"> 
    		<div>
    			<img src="https://img3.doubanio.com/spic/s1070222.jpg" alt="">
    		</div>
  			<p>围城</p>
  			<p class="price">￥19.0</p>   		
    	</div>
  	</div>
  	<div class="CollectContent">
  		<div class="CollectContentL">
  			<div>
  				<img src="https://img1.doubanio.com/spic/s4575849.jpg">
  			</div>
  			<p>寻路中国</p>
  			<p class="price">￥68.0</p>
      	</div>
    	<div class="CollectContentR"> 
    		<div>
    			<img src="https://img3.doubanio.com/spic/s28373253.jpg" alt="">
    		</div>
  			<p>永恒的时光之旅</p>
  			<p class="price">￥79.0</p>   		
    	</div>
  	</div> 
  	<div class="CollectContent">
  		<div class="CollectContentL">
  			<div>
  				<img src="https://img1.doubanio.com/spic/s4575849.jpg">
  			</div>
  			<p>寻路中国</p>
  			<p class="price">￥68.0</p>
      	</div>
    	<div class="CollectContentR"> 
    		<div>
    			<img src="https://img3.doubanio.com/pic/s6384944.jpg" alt="">
    		</div>
  			<p>百年孤独</p>
  			<p class="price">￥39.5</p>   		
    	</div>
  	</div>  
  </div>
</div> 
</template>

<style scoped>
@import "../assets/css/iconfont.css";
	.mint-header {
		margin-left: -10px !important;
		margin-right: -10px !important;
		margin-top: -10px !important;
	}
	.CollectContentWrap {
		text-align: left;
		padding-top: 10px;
	}
	.CollectContent {
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
	}
	.CollectContentL,.CollectContentR{
		width: 45%;
		text-align: center;
		box-shadow: 1px 1px 5px #888888;
		padding: 10px;
		margin-bottom: 10px;
	}
	.CollectContentL {margin-right: 5px;}
	.CollectContentR {margin-left: 5px;}
	p {margin:0;}
	.price {
		font-size: 0.8rem;
		color: #888;
	}
</style>
<script>
import store from '../store/index'
import {api} from '../global/api';
	export default {
		name: 'Collect',	
		data: function() {
		  	return {		  	
		  		current_user:store.state.current_user.currentUserData,
			}
		},
		methods: {
		    /*back:function(){
		    	console.log("back")
		    	const path = '/Person';
		    	console.log('"+path+"')
        		this.$router.push({path: path});			
			},*/
		}
	}
</script>