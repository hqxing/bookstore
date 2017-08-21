<template>
<div class="home">
  <!-- 头部 -->
  <div class="home_header">
    <mt-header fixed title="欢迎您">
      <mt-button icon="more" slot="right" @click="handleMore"></mt-button>
    </mt-header> 
    <!-- 更多菜单栏 -->
    <div class="home_more_options" v-show="showMoreOptions">
    <router-link to="/SignIn"><mt-button type="primary" @click="handleSignIn">登录</mt-button></router-link>
    <router-link to="/SignUp"><mt-button type="primary" @click="handleSignUp">注册</mt-button></router-link>                                   
    </div>
  </div>
  <!-- 搜素 -->
  <div class="home-search-bar">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search> 
  </div>   
  <!-- 轮播 -->
  <div class="home-swipe">
    <mt-swipe :auto="2000" @change="handleChange">
      <mt-swipe-item class="swip-item-1 item"><img src="../assets/images/01.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-2 item"><img src="../assets/images/02.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item class="swip-item-3 item"><img src="../assets/images/03.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
	
</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      value:"aa",
      showMoreOptions:false
    }
  },
  methods: {
    /*点击头部更多*/
    handleMore() {
      console.log("成功点击头部更多");
      /*this.showMoreOptions=true;*/
      this.showMoreOptions=!this.showMoreOptions;
    },
    handleSignIn() {
      console.log('登录');
      this.showMoreOptions=false;
    },
    handleSignUp() {
      console.log('注册');
      this.showMoreOptions=false;
    },
    handleChange(index) {
      //console.log(index)
    }

}
}
</script>
<style scope>
#app{
  margin-top: 2.5rem;
}
.home{
	width: 100%;
}
.home_header{
  width: 100%;
  height: auto;
  position: absolute;
}
.home_more_options{
  width: 4rem;
  height: auto;
  background: #26a2ff;
  display: block;
  position: absolute;
  right:0rem; 
  z-index: 2;
}
.mint-button{
  padding-right: 3px;
}
/* .mint-button::after{
  width: 4rem;
  height: auto;
  background: #26a2ff;
  display: block;
  position: absolute;
  right:0rem; 
  z-index: 2;
} */
.home-search-bar{
  height: 3.25rem;
} 
.mint-search{
  height: auto;
}
.mint-searchbar {
 color: #f3f1f1 ;
}
.home-swipe {
  height: 15.4375rem;
}
</style>