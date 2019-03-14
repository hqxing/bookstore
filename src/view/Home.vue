<template>
<!-- 首页 -->
<div class="home">
  <!-- 搜素 -->
  <div class="home_search_bar">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> 
  </div>   
  <!-- 轮播 -->
  <div class="home_swipe">
    <mt-swipe :auto="2000" @change="handleChange">
      <mt-swipe-item class="swip-item-1 item"><a href="https://guangzhou.douban.com/"><img src="../assets/images/01.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item class="swip-item-2 item"><a href="https://beijing.douban.com/"><img src="../assets/images/02.jpg" alt=""></a></mt-swipe-item>
      <mt-swipe-item class="swip-item-3 item"><a href="https://shanghai.douban.com/"><img src="../assets/images/03.jpg" alt=""></a></mt-swipe-item>
    </mt-swipe>
  </div>

  <!-- 推荐 -->
  <p v-model="books_popular_list" class="popular_title">{{books_popular_list.tags}}</p>
  <div class="popular">
    <div class="popular_warp">
      <div v-for="item in books_popular_list.books"  class="popular_content">
        <div class="popular_list_left"><img :src="item.images.medium" alt=""></div>
        <div class="popular_list_right">
          <p>
            <span>{{item.title}}</span>
            <img src="../assets/images/collect.png" v-on:click="collectClick()">
          </p>
          <p>作者：{{item.author}}</p>
          <p>出版社：{{item.publisher}}</p>
          <p>价格：{{item.price}}元
            <img src="../assets/images/add_car.png" v-on:click="addCarClick()">
            <span class="donate"></span>
          </p>
        </div>      
      </div>    
    </div> 
  </div>

 </div> 
</template>

<script>
import {api} from '../global/api';
export default {
  name: 'Home',
  data () {
    return {
      /*要搜索的值*/
      value:' ',
      /*流行书榜*/ 
      books_popular_list:{
        tags:'liuxing',
        books:[]
      },
    }
  },
  mounted() {
    var vm = this;
    /*获取推荐书榜*/
    vm.getList();
  },
  methods: {
    /*请求推荐书榜*/
    getList () {
        var vm = this;
        vm.$http.get(api.books_popular_list,{typeFlag:'1'}).then((response) => {
        // 响应成功回调       
        console.log(response)
        let data= response.body;
        vm.books_popular_list = data.data;
        console.log(vm.books_popular_list)
      }, (response) => {
        // 响应错误回调
        console.log('失败回调')    
      })
    },   
    /*轮播*/
    handleChange(index) {
      //console.log(index)
    },
    /*收藏*/
    collectClick(){
      var vm = this;
      console.log("确认收藏");
      Toast('成功收藏');
    }
  }
}
</script>
<style scoped>
.home{
	width: 100%;
  height: 100%;
  position: absolute;
}
.home_search_bar{
  position: fixed;
  width: 100%;
  height: 10%;
  z-index: 1;
} 
.mint-search{
  position: relative;
  width: 100%; 
}
.mint-searchbar {
 color: #f3f1f1 ;
}
.home_swipe {
  position: fixed;
  width: 100%;
  height: 30%;
  top: 14%;
  bottom: 0%;
  left: 0%;
  right: 0%;
  z-index: 1; 
}
.popular_title{
  position: fixed; 
  width: 100%;
  height: 1.25rem; 
  font-size: 1.25rem;
  line-height:1.25rem; 
  color: white;
  padding: 1%;
  top: 41%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #89C4F4;
  z-index: 1;
}
.popular {
  position: absolute;
  width: 100%;
  top: 51%;
  bottom: 55px;
}
.popular_warp {
  position: relative;
  overflow-x: hidden;
  margin-bottom: 55px;
}
.popular .popular_content{
  width: 100%;
  clear: both;
}
.popular .popular_content .popular_list_left{
  width: 30%;
  margin: 1%;
  float: left;
}  
.popular .popular_content .popular_list_right{
  width: 60%;
  margin: 1%;
  margin-left: 32%;
}
.popular .popular_content .popular_list_right p{
  font-size: 1rem;
  /* font-weight: bold; */
  text-align: left;
}
.popular .popular_content .popular_list_right p span{
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}
.popular .popular_content .popular_list_right p img{
  width: 16px;
  height: 16px;
  margin-left: 2rem;
}
div a:link{
  text-decoration: none;
  color: #2c3e50;
}
.donate {
  font-family:"bs-font" !important;
  font-size: 16px;
  color: #26a2ff;
  margin-left: 10px;
}
.donate:before {
  content: "\e60c";
}
</style>