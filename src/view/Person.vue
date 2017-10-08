<template>
	<div>
		<div class="personMes">
			<img src="../assets/images/personImg.png" alt="">			
			<p>{{current_user.userName}}</p>
			<p></p>
			<div class="allMes">
				<div class="my_collect"><i class="iconfont icon-shoucang1 shoucang1"></i><span>我的收藏</span></div>
				<div class="my_order_form"><i class="iconfont icon-dingdan dingdan"></i><span>我的订单</span></div>
				<div class="sign_out"><i class="iconfont icon-tuichu tuichu"></i><span>退出登录</span></div>
			</div>
			
		</div>
		<p></p>
	</div>

</template>

<style scoped>
@import "../assets/css/iconfont.css";
	.personMes{
		display: -webkit-flex; /* 弹性布局兼容Safari */
  		display: flex;
  		flex-direction:column;/* 主轴为垂直方向，起点在上沿。 */
  		flex-wrap:wrap;/* 换行，第一行在上方。 */
  		/* flex-flow:column wrap;flex-direction属性和flex-wrap属性的简写形式 */
  		justify-content:flex-start;/* 项目在主轴上左对齐 */
  		align-items: flex-start;/* 交叉轴的起点对齐 */
  		align-content: flex-start;/* 多根轴线的对齐方式与交叉轴的起点对齐 */
	}
	.personMes img{
		width: 6.25rem;
		height: 6.25rem;
		margin: auto;	
		flex-grow: 1;/* 放大比例 */
		flex-shrink: 1;/* 缩小比例 */
	}
	.personMes p{
		font-size: 1rem;
		margin: auto;
		padding: 0.5rem;
		flex-grow: 1;/* 放大比例 */
		flex-shrink: 1;/* 缩小比例 */
	}
	.allMes{
		width: 100%;
		display: -webkit-flex; /* 弹性布局兼容Safari */
  		display: flex;
		flex-direction:column;
  		flex-wrap:wrap;
		justify-content:flex-start;
	}
	.allMes .my_collect,.allMes .my_order_form,.allMes .sign_out{
		flex-basis: auto;
		flex-grow: 1;
		width: 100%;
		font-size: 1rem;
		height: 4rem;
		line-height: 4rem;
		width: 100%;
		margin-bottom: 1rem;
		/* padding-left: 0.4rem; */
		border-bottom: 1px solid gray;
	}
	.allMes .my_collect .shoucang1,.allMes .my_order_form .dingdan,.allMes .sign_out .tuichu{
        color: #1296db;
        font-size: 1.875rem;
        margin-right: 3rem;
    }


</style>
<script>
import store from '../store/index'
import {api} from '../global/api';
	export default {
		name: 'Person',	
		data: function() {
		  	return {		  	
		  		current_user:store.state.current_user.currentUserData,
			}
		},
		methods: {
		    getList:function(){
		    	var me = this;
				this.$http.get(api.current_user).then(function(response){
					console.log(response);
					console.log("这是当前user(用户)的json数据",response.data);
					/*me.userData1 = response.data;
					me.userData1.userData=me.users;*/
				}, function(response){
					alert("请求失败了")
				});				
			},
		}
	}
</script>