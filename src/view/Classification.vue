<template>
<div class="Classification">
  <div class="Classification_head">
    <p>分类</p>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">小说</mt-tab-item>
      <mt-tab-item id="2">历史</mt-tab-item>
      <mt-tab-item id="3">旅行</mt-tab-item>  
    </mt-navbar>  
  </div>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div v-for="item in novel_list.books"  class="novel_content">
      <div class="novel_list_left"><img :src="item.images.small" alt=""></div>
      <div class="novel_list_right"><span>{{item.title}}</span></div>      
    </div>
  </mt-tab-container-item>

  <mt-tab-container-item id="2">
    <div v-for="item in history_list.books"  class="novel_content">
      <div class="novel_list_left"><img :src="item.images.small" alt=""></div>
      <div class="novel_list_right"><span>{{item.title}}</span></div>      
    </div>  
  </mt-tab-container-item>

  <mt-tab-container-item id="3">
    <div v-for="item in travel_list.books"  class="novel_content">
      <div class="novel_list_left"><img :src="item.images.small" alt=""></div>
      <div class="novel_list_right"><span>{{item.title}}</span></div>      
    </div>  
  </mt-tab-container-item>
</mt-tab-container>	 
</div>
</template>

<style scoped>
.Classification{
  width: 100%;
  height: anto;
  position: absolute;
}
.Classification_head{
  width:100%;
  position: relative;
  height: 10%;
  margin-bottom: 1%;
}
 .mt-tab-container{
  position: relative;
  top: 55%;
} 
.novel_content{
  width: 100%;
  display: block;
}
.novel_list_left{
  width: 20%;
  margin: 1%;
  float: left;
  display: block;
}  
.novel_list_right{
  width: 80%;
  margin: 1%;
  margin-left: 22%;
  float: left; 
  display: block;  
}
</style>

<script>
import {api} from '../global/api';
	export default {
		name: 'Classification',
		data () {
		  	return {		  	
		  		selected:"1",
          novel_list:{
            books:[]
          },
          history_list:{
            books:[]
          },
          travel_list:{
            books:[]
          }
		  	}
		},
    mounted() {
      var vm = this;
      /*小说列表*/
      vm.getList();
     // vm.getHistoryList();
    },
    methods: {

      getList () {
          var vm = this;
          vm.$http.get(api.novel_list,{typeFlag:'1'}).then((response) => {
          // 响应成功回调       
          console.log(response)
          let data= response.body;
          vm.novel_list = data.data;
          console.log(vm.novel_list)
        }, (response) => {
          // 响应错误回调
          console.log('失败回调')    
        });
        vm.$http.get(api.history_list,{typeFlag:'2'}).then((response) => {
          // 响应成功回调       
          console.log(response)
          let data= response.body;
          vm.history_list = data.data;
          console.log(vm.history_list)
        }, (response) => {
          // 响应错误回调
          console.log('失败回调')    
        });
        vm.$http.get(api.travel_list,{typeFlag:'3'}).then((response) => {
          // 响应成功回调       
          console.log(response)
          let data= response.body;
          vm.travel_list = data.data;
          console.log(vm.travel_list)
        }, (response) => {
          // 响应错误回调
          console.log('失败回调')    
        });

      },

    },   
	}	
</script>