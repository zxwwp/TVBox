var rule = {
    title:'wg365直播',//规则标题,没有实际作用,但是可以作为cms类名称依据
    host:'http://www.wg365.com/',//规则标题,没有实际作用,但是可以作为cms类名称依据
     url:'http://www.wg365.com/lanqiuzhibo',//网站的分类页面链接
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_parse:'top_nav_nr li;a&&Text;a&&href;http://www.wg365.com/lanqiuzhibo', //动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    headers:{
        'User-Agent':'PC_UA',
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },//网站的请求头,完整支持所有的,常带ua和cookies
    timeout:5000,
    play_parse:true,
    lazy:'', // 自定义免嗅 
    limit:6,// 首页推荐显示数量
    double:false,//是否双层列表定位,默认false
    推荐:'*',// 如果是双层定位的话,推荐的第2段分号代码也是第2层定位列表代码
    一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',// 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    二级:{
	    "title":".game-info-container&&Text;.customer-navbar-nav li&&Text", // 二级 title: 片名;类型
	    "img":"img&&src",
	    "desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",// 二级 desc: 主要信息;年代;地区;演员;导演
	    "content":"div.game-time&&Text",
	    "tabs":"js:TABS=['wg365直播']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	},// 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
    搜索:'',
}