var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net',
     url:'/?s=0&t=1&a=fyclass&g=fypage',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    //class_name:'热门&足球&篮球',
    //class_url:'0&1&2',        
    //class_name:'热门',
    //class_url:'0',

    class_parse:'.nav li;a&&Text;a&&href;/live_/(\\d+)/html?project=/(\\d+)/&game=/(\\d+)',
    headers:{
'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.main-left .main-itme;.col-home;.btn&&Text;a&&href',
    二级:{
	    "title":".play-info-soccer&&Text",
	    "desc":";;;div.col-home:eq(0)&&Text;div.col-home:eq(1)&&Text",
	    "content":"div.col-time&&Text",
	},
    搜索:'',
}