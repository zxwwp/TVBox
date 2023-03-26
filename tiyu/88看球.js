var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.live',
    //url:'/fyclass',
    url:'/match/fyclass/live',
    //class_name:'赛事直播✨注意时间',
   // class_url:'/', 
    class_name:'全部&NBA&CBA&英超&西甲&意甲&德甲&法甲&中超&斯诺克',       //静态分类名称拼接
    //class_url:'/&match/1/live&match/2/live&match/8/live&match/9/live&match/10/live&match/14/live&match/15/live&match/7/live&match/30/live',    //静态分类标识拼接
    class_url:'/&1&2&8&9&10&14&15&17&30',    //静态分类标识拼接  
    //homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    //url:'/match/fyclass/live',
    //class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',//动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    //limit:6,
    //double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.group-game-item');tabs.forEach(function(it){var pz=pdfh(it,'.text-right&&Text');var ps=pdfh(it,'.game-type&&Text');var pk=pdfh(it,'.text-left&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.category-game-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
//li div:gt(2):lt(6)&&Text
    二级:{
        title:".game-info-container div:eq(1)&&Text;.game-name&&Text",
        desc:";;;.game-info-container div:eq(0)&&Text;.game-info-container div:eq(2)&&Text",
	    content:".game-info-container&&Text",
        tabs:"js:TABS=['【直播源】']",
	    lists:"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)})"
        },
    搜索:'',
}