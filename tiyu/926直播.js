var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    //备用网址：http://www.928.tv，http://www.310.tv
    //url:'/?s=0&t=1&a=fyclass&g=fypage',
    //class_name:'篮球&足球&体育',
    //class_url:'2&1&3',         
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    //play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
   //一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;a&&t-nzf-o;a&&href',
   //二级:'*', 
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.zhiding');tabs.forEach(function(it){var pz=pdfh(it,'.team zhudui zhudui_wuyd:eq(1)&&Text');var ps=pdfh(it,'.name:eq(0)&&Text');var pk=pdfh(it,'.team kedui:eq(2)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.t-nzf-o&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    
    二级:{
		"title":".sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text",//类型 时间
		"desc":";;;.lab_team_home&&Text;.lab_team_away&&Text",  //演员;导演
		"content":".sub_list ul&&Text",  // 主要信息
		"tabs":"js:TABS=['直播信号:']",
		"lists":"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.sub_playlist&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'strong&&Text');let url=pd(it,'a&&data-play');return name+'$'+url});LISTS.push(d)});",
	},
    搜索:'',
}