var rule = {
    title:'优直播',
    host:'https://www.yoozhibo.net/',
     url:'/fyclass',     //网站的分类页面链接
    class_name:'全部',      //静态分类名称拼接
    class_url:'/',     //静态分类标识拼接
    headers:{
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },     //网站的请求头,完整支持所有的,常带ua和cookies
    timeout:5000,     //网站的全局请求超时,默认是3000毫秒
    play_parse:true,    // 服务器解析播放
    lazy:'',    // 自定义免嗅
    limit:6,    // 首页推荐显示数量
    double:false,    //是否双层列表定位,默认false
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.item');tabs.forEach(function(it){var  pz=pdfh(it,'.name:eq(0)&&Text');var ps=pdfh(it,'.league&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
		"title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",//类型 时间
		"desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",  //演员;导演
		"content":".sub_list ul&&Text",  // 主要信息
		"tabs":"js:TABS=['直播信号:']",
		"lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'sig-list.a.ncp&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
	},  搜索:'',  
    }