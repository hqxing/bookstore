<template>
	<div class="Donation">
		<mt-header title="我的捐赠">
		    <router-link to="/BookStore/Person" slot="left">
		      <mt-button icon="back">返回</mt-button>      
		    </router-link>    
  		</mt-header>
		<div class="Classification_head">
    		<!-- <p>分类</p> -->
    		<mt-navbar v-model="selected">
	      		<mt-tab-item id="1">心愿单</mt-tab-item>
	     		<mt-tab-item id="2">已捐赠</mt-tab-item>	      		
    		</mt-navbar>  
  		</div>
  		<mt-tab-container v-model="selected">
  			<mt-tab-container-item id="1">    		
				    <div class="shop-cart">
				      <!--要捐赠的商品列表-->
				      <div class="list-item">
				        <div class="shop-name">
					        <!-- <label class="mint-checklist-label">
					        		        <span class="mint-checkbox">
					        		          <input type="checkbox" class="mint-checkbox-input"/>
					        		          <span class="mint-checkbox-core"></span>
					        		        </span>
					        </label> -->
				          	<span>心愿清单</span>
				          	<mt-button class="clearBtn">清空</mt-button>
				        </div>
				        <ul class="product-list" v-for="(items,index) in itemMoreMes.books" :key="index">
				          <li class="item shop-info">
				            <div class="body-media">
				              <label class="mint-checklist-label">
						        <span class="mint-checkbox">
						          <input type="checkbox" class="mint-checkbox-input"/>
						          <span class="mint-checkbox-core"></span>
						        </span>
					          </label>
				              <img class="product-img" :src="items.images.small">
				              <div class="info">
				                <div class="txt">
				                  <p class="name">{{items.title}}</p>
				                  <!-- <p class="einheit">作者：{{items.author}}</p> -->
				                  <p class="price"> <em class="price1">￥{{items.price}}</em></p>
				                  <div class="num-btn">
					                <span class="box">
					                  <em class="reduce"></em>
					                  <!-- <span class="number">{{items.number}}</span> -->
					                  <span class="number"><input type="text" v-model="items.number"></span>
					                  <em class="add"></em>
					                </span>
				            	  </div>
				                </div>
				                <span class="del bs-icon-hongcha" @click="del()"></span>
				              </div>
				            </div>            
				          </li>
				        </ul>
				      </div>
				      <!--购物车底部按钮-->
				      <div class="bottomBar">
				        <p class="txt">
				          <span>
				            <label class="mint-checklist-label">
						        <span class="mint-checkbox">
						          <input type="checkbox" class="mint-checkbox-input"/>
						          <span class="mint-checkbox-core"></span>
						        </span>
					        </label>
				            全选
				            <!-- <mt-button class="clearBtn">删除</mt-button> -->
				          </span>

				          <span>
				            合计：{{itemMoreMes.totalPrice}}元
				          </span>
				        </p>
				        <mt-button v-on:click="sub()">提交（{{itemMoreMes.totalNum}}）</mt-button>
				      </div>
				    </div>
  			</mt-tab-container-item>

  			<mt-tab-container-item id="2">    
				<div class="orderContentWrap">
				  	<div class="orderContent">
				  		<div class="orderContentTitle">
				  			<p class="total_row">
				  				<span class="total_price">总价:￥110.0</span>
				  				<span class="total_num">共4件商品</span>
				        		<span class="bs-icon-shousuo"></span>
				        	</p>
				        	<p class="time_row">
				  				<span class="time_date">2018-5-03 09:18:11</span>
				  			</p>
				      	</div>
				    	<div class="Content">
				    		<p class="book_row">
				    			<span class="book_name">我的前半生</span>
				    			<span class="book_price">￥22.0</span>
				    		</p>
				        	<p class="book_row">
				    			<span class="book_name">亲爱的安德烈</span>
				    			<span class="book_price">￥26.0</span>
				    		</p>
				    		<p class="book_row">
				    			<span class="book_name">给孩子的故事</span>
				    			<span class="book_price">￥42.0</span>
				    		</p>
				    		<p class="book_row">
				    			<span class="book_name">窗边的小豆豆</span>
				    			<span class="book_price">￥20.0</span>
				    		</p>
				    	</div>
				  	</div>  
				  	<div class="orderContent">
				  		<div class="orderContentTitle">
				  			<p class="total_row">
				  				<span class="total_price">总价:￥101.6</span>
				  				<span class="total_num">共3件商品</span>
				        		<span class="bs-icon-shousuo"></span>
				  			</p>
				  			<p class="time_row">
				  				<span class="time_date">2018-4-12 13:28:01</span>
				  			</p>
				      	</div>
				    	<div class="Content">
				    		<p class="book_row">
				    			<span class="book_name">沉睡的人鱼之家</span>
				    			<span class="book_price">￥39.8</span>
				    		</p> 
				    		<p class="book_row">
				    			<span class="book_name">与火同行</span>
				    			<span class="book_price">￥49.8</span>
				    		</p> 
				    		<p class="book_row">
				    			<span class="book_name">活着</span>
				    			<span class="book_price">￥12.0</span>
				    		</p>        	
				    	</div>
				  	</div> 	
				</div>
  			</mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<style scoped>
.mint-header {
	margin-left: -10px !important;
	margin-right: -10px !important;
	margin-top: -10px !important;
}
input[type='radio'] {
    font-family:"bs-font" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
input[type='radio']:before, input[type='checkbox']:before { font-size: 20px;}
input[type='radio']:checked:before,input[type='checkbox']:checked:before {background-color:#006699; font-size: 17px; color:#FFFFFF;}
input[type='radio']:checked:before {
      content:'\e472'; 
      border: 0px solid #aaa;
        border-radius: 50%;
        font-size: 17px;
        line-height: 1.2rem;
        margin-left: 1px;
}
/* 心愿单样式 */
.shop-cart {
  margin-bottom: 95px;
  text-align: left;
  margin-top: 10px;
}
.shop-cart .list-item {
  margin-bottom: 10px;
  background: #ffffff;
}
.shop-cart .list-item .shop-name {
  position: relative;
  height: 40px;
  border-bottom: 1px solid #eeeeee;
  display: flex;
  display: -webkit-flex;
  padding: 5px 10px;
  line-height: 40px;
  align-items: center;
  /*垂直居中*/
}
.shop-cart .list-item .shop-name span {
	width: 90%;
}
.shop-cart .list-item .shop-name .radio {
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.shop-cart .list-item .shop-name .adminAvatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 5px 0 10px;
}
.shop-cart .list-item .shop-name em {
  font-size: 14px;
  color: #1B1B1B;
  padding-right: 10px;
}
/* .shop-cart .list-item .shop-name em:after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  width: 8px;
  height: 8px;
  border-top: 1px solid #656565;
  border-right: 1px solid #656565;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
} */
.shop-cart .list-item .product-list {
  padding: 0 10px;
  margin: 0px auto;
}
.shop-cart .list-item .product-list .item {
  position: relative;
  padding: 10px 0 10px 0;
  display: block;
  border-bottom: 1px solid #eeeeee;
}
.shop-cart .list-item .product-list .item .body-media {
  position: relative;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  /*垂直居中*/
  -webkit-align-items: center;
}
.shop-cart .list-item .product-list .item .body-media .product-img {
  /* width: 100px;
  height: 60px; */
  margin-left: 10px;
}
.shop-cart .list-item .product-list .item .body-media .info {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  margin-left: 10px;
}
.shop-cart .list-item .product-list .item .body-media .info .txt {
  flex: 1;
  -webkit-flex: 1;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .name {
  font-size: 1rem;
  color: #1B1B1B;
  height: 30px;
  line-height: 30px;
  margin:5px auto;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .einheit {
  font-size: 1rem;
  height: 30px;
  color: #959595;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  margin:5px auto;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .price {
  font-size: 1rem;
  color: #888;
  display: flex;
  display: -webkit-flex;
  margin:5px auto;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .price .spec {
  color: #959595;
  font-size: 12px;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .cMailTex {
  color: #ff0000;
  font-size: 14px;
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.shop-cart .list-item .product-list .item .body-media .info .txt .cMailTex em {
  text-align: right;
}
.shop-cart .list-item .product-list .item .body-media .info .del {
  width: 18px;
  height: 18px;
  font-family:"bs-font" !important;
  font-size:12px;
  line-height: 18px;
  text-align: center;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  border: 1px solid red;
  border-radius: 50%;
  background: red;
}
.del:before { content: "\e60f"; }
/* .shop-cart .list-item .product-list .item .body-media .info .del img {
  width: 100%;
} */
.shop-cart .list-item .product-list .item .num-btn {
  display: flex;
  display: -webkit-flex;
  padding: 0 0 10px 0;
  justify-content: flex-end;
}
.shop-cart .list-item .product-list .item .num-btn .box {
  display: flex;
  display: -webkit-flex;
}
.shop-cart .list-item .product-list .item .num-btn .reduce {
  width: 30px;
  display: inline-block;
  font-family:"bs-font" !important;
  font-size:16px;
  text-align: center;
  line-height: 20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.reduce:before { content: "\e635"; }
.shop-cart .list-item .product-list .item .num-btn .add {
  width: 30px;
  display: inline-block;
  font-family:"bs-font" !important;
  font-size:12px;
  text-align: center;
  line-height: 20px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.add:before { content: "\e619"; }
.shop-cart .list-item .product-list .item .num-btn .reduce:active,
.shop-cart .list-item .product-list .item .num-btn .add:active {
  background: #cccccc;
}
.shop-cart .list-item .product-list .item .num-btn .number {
  padding: 0;
  width: 40px;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  margin: 0;
  color: #1B1B1B;
  display: inline-block;
  text-align: center;
}
.shop-cart .list-item .product-list .item .num-btn .number input {
	width: 100%;
	text-align: center;
}
.shop-cart #invalidList {
  background: #fff;
  padding-bottom: 0.13rem;
  display: none;
}
.shop-cart #invalidList .topTitle {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  background: #FFF;
  height: 1.33rem;
  align-items: center;
  -webkit-align-items: center;
  margin: 0 0.42rem;
  font-size: 0.34rem;
  color: #1B1B1B;
  border-bottom: 1px solid #cccccc;
}
/* .shop-cart #invalidList .topTitle em#clearBtn {
  color: #ff0000;
} */
.shop-cart #invalidList .product-list {
  padding: 0 0.42rem;
}
.shop-cart #invalidList .product-list .item {
  position: relative;
  padding: 0.2rem 0 0.2rem 0;
  border-bottom: 1px solid #eeeeee;
}
.shop-cart #invalidList .product-list .item .body-media {
  position: relative;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  /*垂直居中*/
}
.shop-cart #invalidList .product-list .item .body-media .lebal {
  position: relative;
  padding: 0 0.26rem;
  background: #cccccc;
  border-radius: 0.13rem;
  vertical-align: middle;
  color: #ffffff;
}
.shop-cart #invalidList .product-list .item .body-media .product-img {
  width: 3.2rem;
  height: 2.13rem;
  margin-left: 0.26rem;
}
.shop-cart #invalidList .product-list .item .body-media .info {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  margin-left: 0.4rem;
}
.shop-cart #invalidList .product-list .item .body-media .info .txt {
  flex: 1;
  -webkit-flex: 1;
}
.shop-cart #invalidList .product-list .item .body-media .info .txt .name {
  font-size: 0.34rem;
  color: #cccccc;
  height: 1.4rem;
  line-height: 0.37rem;
  overflow: hidden;
}
.shop-cart #invalidList .product-list .item .body-media .info .txt .reason {
  color: #1B1B1B;
  margin-top: 0.13rem;
  font-size: 0.4rem;
  line-height: 0.37rem;
}
.shop-cart #invalidList .product-list .item .body-media .info .txt .cMailTex {
  color: #ff0000;
  margin-top: 0.13rem;
  font-size: 0.4rem;
  line-height: 0.5rem;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
}
.shop-cart #settlement-bar {
  display: flex;
  display: -webkit-flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f5fffe;
  height: 1.17rem;
  line-height: 1.17rem;
  z-index: 88;
}
.shop-cart #settlement-bar .all-check {
  font-size: 0.45rem;
  width: 2.4rem;
  color: #1B1B1B;
  padding-left: 0.42rem;
}
.shop-cart #settlement-bar .price-submit {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
}
.shop-cart #settlement-bar .price-submit .sum {
  font-size: 0.34rem;
  color: #1B1B1B;
  padding-right: 0.42rem;
}
.shop-cart #settlement-bar .price-submit .sum em {
  margin-left: 0.42rem;
  color: #FF0000;
}
.shop-cart #settlement-bar .price-submit .submit-btn {
  width: 3.33rem;
  background: #81d8d0;
  text-align: center;
  color: #fff;
  font-size: 0.34rem;
}
.shop-cart #settlement-bar .price-submit .submit-btn:active {
  background: #ccc;
}

.bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  background: #ffffff;
  border-top: 1px solid #cccccc;
}
.bottomBar .txt {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  padding: 0 10px;
}
.bottomBar .txt span {
  flex: 1;
  -webkit-flex: 1;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
}
.bottomBar .txt span input {
  margin-right: 10px;
}
.clearBtn {
  width: 40px;
  background: red;
  color: #fff;
  height: 25px;
  margin-left: 10px;
  font-size: 10px;
  padding: 0;
  border-radius: 5px;
}
.bottomBar button {
  width: 94px;
  font-size: 16px;
  border: none;
  border-radius: 0;
  background: #cccccc;
  color: #ffffff;
  padding: 0;
}
.bottomBar button.active {
  background: #81D8D0;
}

.toastTxt {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
/* 已捐赠样式 */
	.orderContentWrap {
		text-align: left;
		padding-top: 10px;
	}
	.orderContent {
		box-shadow: 1px 1px 5px #888888;
		padding:5px;
		margin-bottom: 5px;
	}
	.Content {
		padding: 5px 0;
	}
	p {margin: 0;}
	.orderContentTitle {
		border-bottom:1px solid #ddd; 
		padding:5px 0;
		color:#333;		
	}
	.total_row,.book_row {
		display:-webkit-box;
		display:-webkit-flex;
		display:-ms-flexbox;
		display:flex;
	}
	.time_row {
		font-size: 0.8rem;
		color: #888;
	}
	.book_row {
		color:#333;
	}
	.total_price,.total_num {
		font-size: 1.1rem;
		width: 40%;
	}
	.bs-icon-shousuo {
		color:#333;
		text-align: right;
		width: 20%;
		line-height: 1.1rem;
		font-size: 0.9rem;
	}
	.book_name {
		width: 70%;
	}
	.book_price {
		width: 30%;
		text-align: right;
		color: #888; 
	}
</style>
<script>
import {api} from '../global/api';
import { Toast } from 'mint-ui';
	export default {
		name: 'Donation',
		data () {
		  	return {		  	
		  		selected:"1",
          		itemMoreMes:{
    			"totalPrice":"110",
    			"totalNum":"4",
          books:[
            {
              "id": "31",
              "title": "我的前半生",
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
              "number":"1",
              "author": "亦舒",
              "author_intro": "亦舒，言情文学作家。原名倪亦舒，兄长是香港作家倪匡。亦舒1946年生于上海，祖籍浙江镇海，五岁时定居香港。中学毕业后，曾在《明报》任职记者，及担任电影杂志采访和编辑等。1973年，亦舒赴英国修读酒店食物管理课程，三年后回港，任职富丽华酒店公关部，后进入政府新闻处担任新闻官，也曾当过电视台编剧。现为专业作家，并已移居加拿大。",
              "summary": "一个三十几岁的美丽女人子君，在家做全职家庭主妇。却被一个平凡女人夺走丈夫，一段婚姻的失败，让女主角不得不坚强，变得更美丽，有了事业，最终遇见一个更值得爱的男人……"
            },
            {
              "id": "2",
              "title": "亲爱的安德烈",
              "book_id": "3369793",
              "images": {
                "small": "https://img1.doubanio.com/spic/s3993878.jpg",
                "large": "https://img1.doubanio.com/lpic/s3993878.jpg",
                "medium": "https://img1.doubanio.com/mpic/s3993878.jpg"
              },
              "publisher": "人民文学出版社",
              "isbn10": "7020068618",
              "isbn13": "9787020068616",
              "pages": "288",
              "price": "26.00",
              "number":"1",
              "author": "龙应台",
              "author_intro": "龙应台，生于台湾高雄县。1986年出版《野火集》，抨击国民党政府黑暗统治，轰动台湾，当月再版二十四次，对台湾社会发生巨大影响。\n1999年任首任台北市文化局局长。2003年来，先后任香港城市大学、香港大学访问教授。《南方人物周刊》中国“五十位最具影响力的公共知识分子”之一。\n安德烈（Andreas Walther）\n1985年12月生于台湾，八个月大移居瑞士及德国。2006年进入香港大学经济系，认为经济学得很“好玩”。",
              "summary": "安德烈十四岁的时候，龙应台离开欧洲，返回台湾，就任台北市首任文化局长。等她卸任回到儿子身边，安德烈已是一个一百八十四公分高的十八岁的小伙子，坐在桌子另一边，有一点“冷”地看着妈妈。\n他们是两代人，年龄相差三十年；他们也是两国人，中间横着东西文化。失去小男孩安安没关系，但龙应台一定要认识成熟的大学生安德烈。\n于是，母子俩用了三年时间互相通信。龙应台“认识了人生里第一个十八岁的人”，安德烈“也第一次认识了自己的母亲”。\n收入此书的的三十多封书信，感动了无数被“亲子”之间隔阂与冲突深深困扰着的读者，为读者弭平代沟、跨越文化阻隔、两代人沟通交流带来了全新的思维和方法。"
            },
            {
              "id": "3",
              "title": "给孩子的故事",
              "book_id": "27010538",
              "images": {
                "small": "https://img3.doubanio.com/spic/s29421336.jpg",
                "large": "https://img3.doubanio.com/lpic/s29421336.jpg",
                "medium": "https://img3.doubanio.com/mpic/s29421336.jpg"
              },
              "publisher": "中信出版社",
              "isbn10": "7508673204",
              "isbn13": "9787508673202",
              "pages": "291",
              "price": "42.00",
              "number":"1",
              "author": "王安忆",
              "author_intro": "王安忆，1954年3月生于江苏南京，原籍福建省同安县，当代作家、文学家。现为中国作协副主席、上海市作家协会主席，复旦大学教授。 1972年，考入徐州文工团工作。1976年发表散文处女作《向前进》。1987年调上海作家协会创作室从事专业创作。1996年发表个人代表作《长恨歌》，获得第五届茅盾文学奖。 2004年《发廊情话》获第三届鲁迅文学优秀短篇小说奖。 2013年获法兰西文学艺术骑士勋章。 著有：小说《流水三十章》《米尼》《纪实与虚构》《长恨歌》《富萍》《上种红菱下种藕》《桃之夭夭》《遍地枭雄》《启蒙时代》《天香》《小鲍庄》《乌托邦诗篇》《荒山之恋》等；散文集《旅德的故事》《乘火车旅行》《重建象牙塔》《窗外与窗里》《漂泊的语言》等；文论集《空间在时间里流淌》《故事与讲故事》《心灵世界》《小说家的十三堂课》等。",
              "summary": "《给孩子的故事》由著名作家王安忆选编。王安忆为中国当代最具影响力的作家之一，早年从事儿童文学，现于复旦大学开设创意写作课程，于实践、教育两方面都有极为丰富的经验。 《给孩子的故事》中，王安忆凭借多年写作、教学经验，打破文体界限，在中国当代最具代表性的作家作品中，精心遴选25篇适合孩子阅读的短篇小说及散文，回到文学的源头，为孩子提供保有美学本能的完整故事，让孩子感受最原初的阅读乐趣。 《给孩子的故事》编选者别具慧眼，与通常所看到的儿童文学或者青少年文学有很大不同，传达的是一种平起平坐的视角，将社会、人性、欲望、友情等等冷静而又不失温情地展示给孩子，诚如编者序言所说，希望追求一种天真，一种认识世界的是非观。 《给孩子的故事》为孩子提供衡量人生价值标准的范例，通过展示各式各样的故事中不同的人物命运，让孩子于虚构中体验真实，在与故事人物同喜共悲的情感共鸣中，重新观看与感受自己的生活，滋养心灵的成长。"
            },
            {
              "id": "4",
              "title": "窗边的小豆豆",
              "book_id": "1007914",
              "images": {
                "small": "https://img3.doubanio.com/spic/s1067911.jpg",
                "large": "https://img3.doubanio.com/lpic/s1067911.jpg",
                "medium": "https://img3.doubanio.com/mpic/s1067911.jpg"
              },
              "publisher": "南海出版公司",
              "isbn10": "7544222977",
              "isbn13": "9787544222976",
              "pages": "288",
              "price": "20.00",
              "number":"1",
              "author": "黑柳彻子",
              "author_intro": "黑柳彻子，日本作家、电视节目主持人、联合国儿童基金会亲善大使。\n她的代表作《窗边的小豆豆》1981年出版后，不仅在日本，而且在全球都引起了极大的反响，截至2001年，日文版累计销量达938万册。\n译者赵玉皎  毕业于北京外国语大学日本学研究中心，获日本文学硕士学位。",
              "summary": "窗边的小豆豆》讲述了作者上小学时的一段真实的故事。作者因淘气被原学校退学后，来到巴学园。在小林校长的爱护和引导下，让一般人眼里“怪怪”的小豆豆逐渐成了一个大家都能接受的孩子，并奠定了她一生的基础。这本书不仅带给世界几千万读者无数的笑声和感动，而且为现代教育的发展注入了新的活力。"
            }
          ]
        }
		  	}
		},
    methods: {
    	/*删除单项*/
	    del: function () {       
	        MessageBox.confirm('确认删除该商品?').then(action => {
	  			Toast('成功删除该商品');
			});			
	  	},
      	/*提交*/
  		sub: function () {
  			MessageBox.confirm('确认支付').then(action => {
  				const path = '/Order';
        		this.$router.push({path: path});
			});	
  		}
    },  

	}	
</script>