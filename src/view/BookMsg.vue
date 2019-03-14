<template>
<div class="BookMsg">
  <mt-header title="">
    <router-link to="/BookStore/Classification" slot="left">
      <mt-button icon="back">返回</mt-button>      
    </router-link>    
  </mt-header>
  <div class="bookMesContentWrap" v-for="(item,index) in itemMoreMes.books">
  	<div class="bookMesImg">
  		<img :src="item.images.medium" alt="这是书的详情图" />
  	</div>
    <div class="bookMesPart" ref="bookMesPart">
    	<div class="bookMesTitle" @click="showMore1()">书名:{{item.title}}
        <span class="bs-icon-shousuo"></span>
      </div>
    	<div class="bookMesContent" ref="bookMesContent" v-bind:class="{ active: isActive1 }">
    		<p>书的简介</p>
        <p class="summary">{{item.summary}}</p>
    	</div>
    </div>
    <div class="bookMesPart">
    	<div class="bookMesTitle" @click="showMore2()">作者:{{item.author}}
        <span class="bs-icon-shousuo"></span>
      </div>
    	<div class="bookMesContent" v-bind:class="{ active: isActive2 }">
    		<p>作者简介</p>
        <p class="author_intro">{{item.author_intro}}</p>
    	</div>
    </div>
    <div class="bookMesPart">
      <div class="bookMesTitle" @click="showMore3()">出版信息
        <span class="bs-icon-shousuo"></span>
      </div>
    	<div class="bookMesContent" v-bind:class="{ active: isActive3 }">
        <p class="publisher">出版社:{{item.publisher}}</p>
        <p class="isbn">isbn10:{{item.isbn10}}</p>
        <p class="isbn">isbn13:{{item.isbn13}}</p>
      </div>
    </div>
  	<div class="bookMesTitle">价格:{{item.price}}</div>  	
  </div>
  <div class="btn_group_wrap">
    <div class="btn_group">
      <mt-button size="normal" type="default" class="btn1">收藏</mt-button>
      <mt-button size="normal" type="primary" class="btn2">购物车</mt-button>
    </div>
  </div>
</div> 
</template>
<style scoped>
.mint-header {
  margin-left: -10px;
  margin-right: -10px;
  margin-top: -10px;
}
.bookMesImg {
  margin-top:10px;
  margin-bottom:10px;
}
.bookMesPart {
  margin-bottom:10px;
  /* box-shadow:2px 2px 3px #aaaaaa; */
}
.bookMesTitle {
  border-bottom:1px solid #e0e0e0;
  text-align: left;
  padding:10px 10px 10px 10px;
  font-size:1.05rem;  
}
.bookMesContent {
  display:block;
  border-bottom:1px solid #e0e0e0;
  /* box-shadow:1px 1px 5px 1px #aaaaaa; */
  padding: 10px 10px;
}
.bookMesContent p {
  margin: 0 auto;
}
.summary,.author_intro,.publisher,.isbn{
  text-align:left;
  text-indent: 2em;
}
.active {display:none;}
.text-danger {color:red;}
.btn_group_wrap {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width:100%; 
}
.btn_group {
  display:flex;
  width:100%;  
}
.btn_group button {
  width: 50%;
}
.bs-icon-shousuo {
  font-size:0.8rem;
  float:right;color: #ddd;
  line-height: 1.2rem;
}
</style>
<script>
import {api} from '../global/api';
export default {
  name: 'BookMsg',
  data () {
    return { 
      itemMoreMes:{
        books:[
          {
            "id": "31",
            "title": "我的前半生1",
            "book_id": "2230208",
            "images": {
              "small": "https://img1.doubanio.com/spic/s2720819.jpg",
              "large": "https://img1.doubanio.com/lpic/s2720819.jpg",
              "medium": "https://img1.doubanio.com/mpic/s2720819.jpg"
            },
            "publisher": "新世界出版社",
            "isbn10": "7802283930",
            "isbn13": "9787802283930",
            "pages": "271",
            "price": "22.00",
            "author": "亦舒",
            "author_intro": "亦舒，言情文学作家。原名倪亦舒，兄长是香港作家倪匡。亦舒1946年生于上海，祖籍浙江镇海，五岁时定居香港。中学毕业后，曾在《明报》任职记者，及担任电影杂志采访和编辑等。1973年，亦舒赴英国修读酒店食物管理课程，三年后回港，任职富丽华酒店公关部，后进入政府新闻处担任新闻官，也曾当过电视台编剧。现为专业作家，并已移居加拿大。",
            "summary": "一个三十几岁的美丽女人子君，在家做全职家庭主妇。却被一个平凡女人夺走丈夫，一段婚姻的失败，让女主角不得不坚强，变得更美丽，有了事业，最终遇见一个更值得爱的男人……"
          }
        ]
      },
      isActive1:false,
      isActive2:true,
      isActive3:true
    }
  },
  mounted() {
    var vm = this;
    /*获取图书详细信息*/
    vm.getList();
    //let bookMesPart = vm.$refs.bookMesPart;
    //let bookMesContent = vm.$refs.bookMesContent;
  },
  methods: {
    /*请求图书详细信息*/
    getList () {
        var vm = this;
        var id =location.href.split('?id=').pop();
        console.log("_id",id)
        vm.$http.get(api.itemMoreMes+id).then((response) => {
        // 响应成功回调       
        console.log(response)
        let data= response.body;
        vm.itemMoreMes = data.data;
        console.log(vm.itemMoreMes)
      }, (response) => {
        // 响应错误回调
        console.log('失败回调')    
      })
    },   
    /*展开或收缩详细内容*/
    showMore1:function () {  
      //console.log(typeof(event.currentTarget));
      //console.log(event.target)
      //var _parent = event.target.parentNode;
     // var _brother = _parent.children[1];
     // console.log(typeof(_parent))
     // console.log(_brother)
     // console.log(this.$refs.bookMesContent)
      if(this.isActive1 == true){
        return this.isActive1=false;        
      }else{
        return this.isActive1=true;
      }
    },
    showMore2:function () {       
      if(this.isActive2 == true){
        return this.isActive2=false;        
      }else{
        return this.isActive2=true;
      }
    },
    showMore3:function () {   
      if(this.isActive3 == true){
        return this.isActive3=false;        
      }else{
        return this.isActive3=true;
      }
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
