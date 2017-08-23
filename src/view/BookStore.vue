<template>
<!-- 主要结构页面 -->
	<div class="BookStore">
		<!-- 头部 -->		
  			<bsheader></bsheader>

  		<!-- 中间内容 -->
  		<div class="content">
  			<router-view></router-view>
  		</div>

  		<!-- 脚部导航 -->
  		<div class="home_footer">
    		<bstabbar></bstabbar>     
  		</div> 
	</div>
</template>

<script>
import bsheader from '../components/bs-header.vue'
import bstabbar from '../components/bs-tabbar.vue'
export default {
  name: 'Home',
  data () {
    return {
      value:"aa",
      showMoreOptions:false
    }
  },
  components:{
      bsheader,
      bstabbar
  },
  methods: {

  }
}
</script>
<style scoped>
.content {
	width: 100%;
	height: 75%;
	margin-top: 15%;
}
</style>