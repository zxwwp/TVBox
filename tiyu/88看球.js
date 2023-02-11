var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.live',
    url:'/match/fyclass/live',
    class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',//动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.list-group .group-game-item;.span&&Text;img&&src;.btn&&Text;a&&href',
    二级:{
	    "title":".game-info-container&&Text;.customer-navbar-nav li&&Text",
	    "img":"img&&src",
	    "desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
	    "content":"div.game-time&&Text",
        "tabs":"js:TABS=['直播信号源']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	},
    搜索:'',
}