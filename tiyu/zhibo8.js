var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net/',
    url:'/fyclass',
    class_name:'全部',
    class_url:'/',         
    headers:{
        'User-Agent':'MOBILE_UA'
        //'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.d-touch');tabs.forEach(function(it){var pz=pdfh(it,'.col-home flex&&Text');var ps=pdfh(it,'.col-name&&Text'));var img=pd(it,'img&&src');var timer=pdfh(it,'.col-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    
    二级:{
		"title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",
		"img":"img&&src",
		"desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",
		"content":".sub_list ul&&Text",
		"tabs":"js:TABS=['直播信号源']",
		"lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
	},搜索:'',
}