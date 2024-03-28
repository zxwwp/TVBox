var rule = {
    title:'直播迷',
    host:'http://www.livemi.live/',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&ul.sc');tabs.forEach(function(it){var pz=pdfh(it,'li:eq(3):lt(4) strong&&Text');var ps=pdfh(it,'li:eq(0):lt(1) div&&Text');var pk=pdfh(it,'li:eq(5):lt(6) strong&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'li:eq(2):lt(3)&&Text');var url=pd(it,'li:eq(6):lt(7) a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".hotmore li:gt(0):lt(5)&&Text;.lx&&Text",//类型 时间
		desc:";;;.hotmore li:eq(1)&&Text;.hotmore li:eq(4)&&Text",  //演员;导演
		content:".hotmore li:gt(0):lt(5)&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:'ul.hotpd:eq(1) a:lt(4)',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}