var rule = {
    title:'全网直播吧',
    host:'https://www.zhibo8.net/',
    url:'nav-item active',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'首页',
    class_url:'a href',        
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
   一级:'.match-list li;.col-home flex&&span;.feleimg img&&src;.col-time;a&&href',
   二级:'*', 
    搜索:'',
}