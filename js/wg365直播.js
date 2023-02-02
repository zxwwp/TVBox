var rule = {
    title:'wg365直播',//规则标题,没有实际作用,但是可以作为cms类名称依据
    host:'http://www.wg365.com/',//规则标题,没有实际作用,但是可以作为cms类名称依据
     url:'http://www.wg365.com/lanqiuzhibo',//网站的分类页面链接
    searchUrl:'',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    searchable:0,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用筛选,
    headers:{
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },//网站的请求头,完整支持所有的,常带ua和cookies
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',
    二级:{
	    "title":".game-info-container&&Text;.customer-navbar-nav li&&Text",
	    "img":"img&&src",
	    "desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
	    "content":"div.game-time&&Text",
	    "tabs":"js:TABS=['wg365直播']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	},
    搜索:'',
}