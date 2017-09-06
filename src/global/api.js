//接口配置

//把全体接口封装在的前端配置文件（序号与接口文档一一对应），多个环境配置时可快速切换整站式的全部接口，不用逐个页面去改。
const config = require('../../config');

let url = {
    apiUrl: "/ccp-web/api", //接口路径
    //ctxPath: "/ccp-web/dist", //tomcat服务dist目录
    ctxPath: "/dist", //node服务dist目录

    //staticPath:config.dev.staticPath,       //开发环境静态资源路径
    // 条件 ? 结果1 : 结果2 //三元运算符，表示条件为true时，等式的结果就为结果1（'./'），否则为结果2('/static/')。
    // development为开发环境（npm run dev），另外一个production是生产环境（）
    // 生产环境时staticPath的值为'./'，开发环境时staticPath的值为'/static/'。
    staticPath: process.env.NODE_ENV !== 'development' ?  config.build.staticPath: config.dev.staticPath
};

//----------------请注意：如果正式环境，不需要本地json数据模拟，请删除以上代码和api中的模拟接口。----------------


export const api = { 

            //"activity_list":url.staticPath+"/dataJson/in_theaters.json",  //获取电影列表,json
            // "activity_list":"/v2/movie/top250"//获取电影列表前50
           // "activity_list":"/v2/movie/new_movies"+'?apikey=0b2bdeda43b5688921839c8ecb20399b&count=40&client=something&udid=dddddddddddddddddddddd'
            //"activity_list":"/v2/event/list"  //获取活动列表
            //"activity_list":"/v2/loc/108288"
           //"activity_list":url.staticPath+"dataJson/list.json", 
<<<<<<< HEAD
           "popular_books_list":"/example_qxing/popular_books_list" ,
           "novel_list":"/books_classification/novel",
           "history_list":"/books_classification/history",
           "travel_list":"/books_classification/travel",
=======
           //"popular_books_list":"/example_qxing/popular_books_list",
          // http://www.easy-mock.com/mock/59a765e44006183e48ed4cbe/bookstore/books_popular
           "books_popular_list":"/bookstore/books_popular_list"
           //"":"" 
>>>>>>> 45ed030342551645516a7775bdd73ae564ee797d

           
}
    

// export default api
