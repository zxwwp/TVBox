var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.one',
    url:'/fyclass',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    //url:'/match/fyclass/live',
    //class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.group-game-item');tabs.forEach(function(it){var pz=pdfh(it,'.team-name&&Text');var pk=pdfh(it,'.d-none div:gt(1):lt(9)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.d-none div:eq(3)&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  ',title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
	    "title":".game-info-container&&Text;.customer-navbar-nav li&&Text",
        img:".img-responsive.center-block.team-logo&&src",
        desc:";;;.game-info-container div:eq(0)&&Text;.game-info-container div:eq(2)&&Text",
	    content:".game-info-container&&Text",
        //"title":".game-info-container&&Text;.customer-navbar-nav li&&Text",
	    //"img":"img&&src",
	    //"desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
	    //"content":"div.game-time&&Text",
	    "tabs":"js:TABS=['【直播源】']",
	    //"lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data.links;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
	
                 lists:'.game-videos-btn-container a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
                 list_text:'a&&Text',
                 list_url:'a&&href'
        },
    搜索:'',
}