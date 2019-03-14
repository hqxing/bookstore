<template>
<div class="Order">
  <mt-header title="我的订单">
    <router-link to="/BookStore/Person" slot="left">
      <mt-button icon="back">返回</mt-button>      
    </router-link>    
  </mt-header>
  <div class="orderContentWrap">
  	<div class="orderContent">
  		<div class="orderContentTitle">
  			<p class="total_row">
  				<span class="total_price">总价:￥110.0</span>
  				<span class="total_num">共4件商品</span>
        		<span class="bs-icon-shousuo"></span>
        	</p>
        	<p class="time_row">
  				<span class="time_date">2018-5-03 09:18:11</span>
  			</p>
      	</div>
    	<div class="Content">
    		<p class="book_row">
    			<span class="book_name">我的前半生</span>
    			<span class="book_price">￥22.0</span>
    		</p>
        	<p class="book_row">
    			<span class="book_name">亲爱的安德烈</span>
    			<span class="book_price">￥26.0</span>
    		</p>
    		<p class="book_row">
    			<span class="book_name">给孩子的故事</span>
    			<span class="book_price">￥42.0</span>
    		</p>
    		<p class="book_row">
    			<span class="book_name">窗边的小豆豆</span>
    			<span class="book_price">￥20.0</span>
    		</p>
    	</div>
  	</div>  
  	<div class="orderContent">
  		<div class="orderContentTitle">
  			<p class="total_row">
  				<span class="total_price">总价:￥101.6</span>
  				<span class="total_num">共3件商品</span>
        		<span class="bs-icon-shousuo"></span>
  			</p>
  			<p class="time_row">
  				<span class="time_date">2018-4-12 13:28:01</span>
  			</p>
      	</div>
    	<div class="Content">
    		<p class="book_row">
    			<span class="book_name">沉睡的人鱼之家</span>
    			<span class="book_price">￥39.8</span>
    		</p> 
    		<p class="book_row">
    			<span class="book_name">与火同行</span>
    			<span class="book_price">￥49.8</span>
    		</p> 
    		<p class="book_row">
    			<span class="book_name">活着</span>
    			<span class="book_price">￥12.0</span>
    		</p>        	
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
	.orderContentWrap {
		text-align: left;
		padding-top: 10px;
	}
	.orderContent {
		box-shadow: 1px 1px 5px #888888;
		padding:5px;
		margin-bottom: 5px;
	}
	.Content {
		padding: 5px 0;
	}
	p {margin: 0;}
	.orderContentTitle {
		border-bottom:1px solid #ddd; 
		padding:5px 0;
		color:#333;		
	}
	.total_row,.book_row {
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
	}
	.time_row {
		font-size: 0.8rem;
		color: #888;
	}
	.book_row {
		color:#333;
	}
	.total_price,.total_num {
		font-size: 1.1rem;
		width: 40%;
	}
	.bs-icon-shousuo {
		color:#333;
		text-align: right;
		width: 20%;
		line-height: 1.1rem;
		font-size: 0.9rem;
	}
	.book_name {
		width: 70%;
	}
	.book_price {
		width: 30%;
		text-align: right;
		color: #888; 
	}
</style>
<script>
import store from '../store/index'
import {api} from '../global/api';
	export default {
		name: 'Order',	
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