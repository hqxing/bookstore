<template>
<div class="home">
  <!-- 头部 -->
  <bsheader></bsheader>
<!--   <div class="home_header">
  <mt-header fixed title="欢迎您">
    <mt-button icon="more" slot="right" @click="handleMore"></mt-button>
  </mt-header> 
  更多菜单栏
  <div class="home_more_options" v-show="showMoreOptions">
  <router-link to="/SignIn"><mt-button type="primary" @click="handleSignIn">登录</mt-button></router-link>
  <router-link to="/SignUp"><mt-button type="primary" @click="handleSignUp">注册</mt-button></router-link>                                   
  </div>
</div> -->
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
</template>
<script>
import bsheader from '../components/bs-header.vue'
export default {
  name: 'Home',
  data () {
    return {
      value:"aa",
      showMoreOptions:false
    }
  },
  components:{
      bsheader
  },
  methods: {
    handleChange(index) {
      //console.log(index)
    }

  }
}
</script>
<style scoped>
.home{
	width: 100%;
  height: 100%;
  position: fixed;
}
.home_search_bar{
  position: fixed;
  width: 98%;
  height: 10%;
  top: 5%;
} 
.mint-search{
  position: relative;
  width: 98%;
  top: 5%;
   
}
.mint-searchbar {
 color: #f3f1f1 ;
}
.home_swipe {
  position: fixed;
  width: 100%;
  height: 30%;
  top: 15%;
}
</style>