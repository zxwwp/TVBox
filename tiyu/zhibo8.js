var rule = {
    title:'直播8',
    host:'https://www.zhibo8.net/',
    url:'/fypage',
    class_name:'全部',
    class_url:'/',         
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
   一级:'.main li;.jiabifeng&&span:lt(2)&&Text;img&&src;div&&col-time;a&&href',
   二级:'*', 
    搜索:'',
}