<template>
	<div class="home">
		<mt-swipe :auto="2000" @change="handleChange">
  			<mt-swipe-item class="swip-item-1 item"><img src="../assets/images/1.jpg" alt=""></mt-swipe-item>
  			<mt-swipe-item class="swip-item-2 item"><img src="../assets/images/bg1.jpg" alt=""></mt-swipe-item>
  			<mt-swipe-item class="swip-item-3 item"><img src="../assets/images/ig1.gif" alt=""></mt-swipe-item>
		</mt-swipe>		
	</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods: {
  handleChange(index) {
    console.log(index)
  }
}
}
</script>
<style scope>
.home{
	width: 100%;
	height: 300px;
}
/* .swip-item-1{
        background: red;
    }
    .swip-item-2{
        background: blue;
    }
    .swip-item-3{
        background: green;
    } */
</style>