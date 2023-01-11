var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net',
    url:'/match/fyclass/live',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_parse:'.nav li;a&&Text;a&&href;/live_/(\\d+)/html?project=/(\\d+)/&game=/(\\d+)',
    headers:{
        'User-Agent':'PC_UA'
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
	    "tabs":"js:TABS=['全网直播8']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	},
    搜索:'',
}