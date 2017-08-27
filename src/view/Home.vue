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
      <mt-swipe-item class="swip-item-1 item"><img src="../assets/images/01.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-2 item"><img src="../assets/images/02.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-3 item"><img src="../assets/images/03.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>

  <!-- 流行 -->
  <div class="popular">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :max-distance="150" @top-status-change="handleTopChange" ref="loadmore">  
      <ul>
        <li v-for="item in popular_books_list.books">
          <img :src="item.image" alt="">
          <span>{{item.title}}</span>
        </li>
      </ul>
    </mt-loadmore>
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
      searchCondition:{  //分页属性  
          pageNo:"1",  
          pageSize:"10"  
      },  
      popular_books_list:{
        books:[]
      },
      allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了  
      scrollMode:"auto" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动  

    }
  },
  mounted() {
    var vm = this;
    /*活动列表*/
    vm.getList();
  },
  methods: {
    /*请求流行书榜*/
    getList () {
        var vm = this;
        vm.$http.get(api.popular_books_list,{typeFlag:'1'}).then((response) => {
        // 响应成功回调       
        console.log(response)
        let data= response.body;
        vm.popular_books_list = data.data;
        console.log(vm.popular_books_list)
      }, (response) => {
        // 响应错误回调
        console.log('失败回调')    
      })
    },   
    /*轮播*/
    handleChange(index) {
      //console.log(index)
    },

    loadMore:function(){
      console.log("loadMore");                 
    },
    loadBottom:function() {
      console.log("下拉在执行");
      this.page=this.page+1;             
      console.log("this.page:"+this.page);
      this.getList(this.page);
      if(this.page==10){
        this.allLoaded=true;  //当所有数据 全部读取完成的时候 停止下拉读取数据 
        //this.$refs.loadmore.onBottomLoaded();
      }  
    }
  }
}
</script>
<style scoped>
.home{
	width: 50%;
  height: 50%;
  position: position
}
.home_search_bar{
  position: fixed;
  width: 100%;
  height: 10%;
  margin: auto;
  top: 5%;
} 
.mint-search{
  position: relative;
  width: 96%;
  top: 10%;  
}
.mint-searchbar {
 color: #f3f1f1 ;
}
.home_swipe {
  position: absolute;
  width: 96%;
  height: 30%;
  top: 14%;
}
.popular{
  position: absolute;
  width: 100%;
  height: 50%;
  top: 45%;
}
.popular ul{
  width: 96%;
  height: 100%;
}
.popular ul li{
  list-style: none;
}
 .popular img{
  width: 6rem;
  height: 8rem;
} 
.home_footer{
 position: fixed;
  width: 96%;
  height: 10%;
  bottom: 0;
}
div a:link{
  text-decoration: none;
  color: #2c3e50;
}

</style>