<template>
<div class="Classification">
  <div class="Classification_head">
    <!-- <p>分类</p> -->
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">小说</mt-tab-item>
      <mt-tab-item id="2">历史</mt-tab-item>
      <mt-tab-item id="3">旅行</mt-tab-item>  
    </mt-navbar>  
  </div>

<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <div v-for="(item,index) in novel_list.books" class="Classification_content"  @click="showMore(item.book_id)">
      <div class="list_left"><img :src="item.images.medium" alt=""></div>
      <div class="list_right">
        <p>
          <span>{{item.title}}</span>
          <img src="../assets/images/collect.png" v-on:click="collectClick()">
        </p>
        <p>作者：{{item.author}}</p>
        <p>出版社：{{item.publisher}}</p>
        <p>
          价格：{{item.price}}元
          <img src="../assets/images/add_car.png" v-on:click="addCarClick()">
          <span class="donate"></span>
        </p>
      </div>      
    </div>
  </mt-tab-container-item>

  <mt-tab-container-item id="2">
    <div v-for="item in history_list.books"  class="Classification_content" @click="showMore(item.book_id)">
      <div class="list_left"><img :src="item.images.medium" alt="" v-model="addCar" id="addCar"></div>
      <div class="list_right">
        <p>
          <span>{{item.title}}</span>
          <img src="../assets/images/collect.png" v-on:click="collectClick()">
        </p>
        <p>作者：{{item.author}}</p>
        <p>出版社：{{item.publisher}}</p>
        <p>
          价格：{{item.price}}元        
            <img src="../assets/images/add_car.png" v-on:click="addCarClick()">      
        </p>
      </div>      
    </div>  
  </mt-tab-container-item>

  <mt-tab-container-item id="3">
    <div v-for="item in travel_list.books"  class="Classification_content" @click="showMore(item.book_id)">
      <div class="list_left"><img :src="item.images.medium" alt=""></div>
      <div class="list_right">
        <p>
          <span>{{item.title}}</span>
          <img src="../assets/images/collect.png" v-on:click="collectClick()">
        </p>
        <p>作者：{{item.author}}</p>
        <p>出版社：{{item.publisher}}</p>
        <p>
          价格：{{item.price}}元
          <img src="../assets/images/add_car.png" v-on:click="addCarClick()">
        </p>
      </div>      
    </div>  
  </mt-tab-container-item>
</mt-tab-container>	 
</div>
</template>

<style scoped>
.Classification{
  width: 100%;
  height: 100%;
  position: relative;
}
.Classification_head{
  width:100%;
  position: relative;
  height: 10%;
  margin-bottom: 1%;
}
.mint-tab-container {
  margin-bottom: 55px;
}
.mint-tab-container-item {
  height: 100%;
}
.Classification_content{
  height: 20%;
  padding: 1%;
  clear: both;
}
.Classification_content .list_left{
  width: 30%;
  height: 15%;
  float: left;
}  
.Classification_content .list_right{
  width: 62%;
  height: 20%;
  margin-left: 32%;
}
.Classification_content .list_right p{
  font-size: 1rem;
  /* font-weight: bold; */
  text-align: left;
}
.Classification_content .list_right p span{
  font-size: 1rem;
  font-weight: bold;
  text-align: left;
}
.Classification_content .list_right img{
  width: 16px;
  height: 16px;
  margin-left: 2rem;
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

<script>
import {api} from '../global/api';
import { Toast } from 'mint-ui';
	export default {
		name: 'Classification',
		data () {
		  	return {		  	
		  		selected:"1",
          novel_list:{
            books:[],
            addCar:false,
          },
          history_list:{
            books:[],
            addCar:false,
          },
          travel_list:{
            books:[],
            addCar:false,
          }
		  	}
		},
    mounted() {
      var vm = this;
      /*各类图书列表*/
      vm.getList();
    },
    methods: {
      /*读取各类图书数据*/
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
      /*点击得到更多内容*/
      showMore: function (str) {       
        console.log("书id",str);
        const path = '/BookMsg/itemMoreMes/?id=' + str;
        this.$router.push({path: path});
      },
      /*加入购物车*/
      addCarClick(){
        var vm = this;
        vm.addCar=true;
        console.log("确认添加到购物车",addCar);
        Toast('成功添加到购物车');
      },
      /*收藏*/
      collectClick(){
        var vm = this;
        console.log("确认收藏");
        Toast('成功收藏');
      }


    },  

	}	
</script>