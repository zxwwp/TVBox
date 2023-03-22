var rule = {
    title:'玩球直播',
    host:'https://www.ablejs.com',
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
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.live-list li');tabs.forEach(function(it){var pz=pdfh(it,'.title&&Text');var ps=pdfh(it,'.category&&Text');var img=pd(it,'https://gitee.com/xl04wy22/tvbox/raw/master/jpg/pngpai.com_football-player-631531677974313.png');var timer=pdfh(it,'.status&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".live-list li:lt(2)&&Text;.live-list li:eq(0)&&Text",//类型 时间
		desc:";;;.lab_team_home&&Text;.lab_team_away&&Text",  //演员;导演
		content:".sub_list ul&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.xh&&Text');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'a&&Text');let url=pd(it,'a&&href');return name+'$'+url});LISTS.push(d)});"
    },
    搜索:'',
}