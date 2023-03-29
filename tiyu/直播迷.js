var rule = {
    title:'直播迷',
    host:'http://www.zhibome.live/?headLOgo',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&ul.sc li:gt(0):lt(7)');tabs.forEach(function(it){var pz=pdfh(it,'ul.sc li:eq(4) strong&&Text');var ps=pdfh(it,'li:gt(0)&&Text');var pk=pdfh(it,'ul.sc li:gt(6)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'ul.sc li:gt(1)&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".title-content hl&&Text;a&&Text",//类型 时间
		//desc:";;;.title&&Text",  //演员;导演
		//content:".title-content hlg&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:'ul.sc li:gt(7) a',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}