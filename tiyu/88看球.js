var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.live',
    url:'/match/fyclass/live',
    class_url:'/', 
    //class_parse:'.nav-pills li;a&&Text;a&&href;/match/(\\d+)/live',//动态分类获取 列表;标题;链接;正则提取 不需要正则的时候后面别加分号
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list-group-item');tabs.forEach(function(it){var pz=pdfh(it,'.text-right&&Text');var ps=pdfh(it,'.game-type&&Text');var pk=pdfh(it,'.text-left&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.category-game-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
		"title":".list-group div:lt(2)&&Text;.list-group div:game-type&&Text",
		"img":"img&&src",
		"desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
	    "content":"div.game-time&&Text",
        "tabs":"js:TABS=['直播信号源']",
	    "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"

        //"desc":";;;.text-right&&Text;.text-left&&Text",
		//"content":"div.game-time&&Text",
		//"tabs":"js:TABS=['直播信号源']",
		//"lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
	},

    搜索:'',
}