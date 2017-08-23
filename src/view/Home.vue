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
</div>
  <!-- 流行 -->
<!--   <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
  <ul>
    <li v-for="item in list">{{ item }}</li>
  </ul>
</mt-loadmore> -->
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      /*要搜索的值*/
      value:' '
    }
  },
  methods: {
    /*轮播*/
    handleChange(index) {
      //console.log(index)
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