var rule = {
    title:'雄狮直播',
    host:'https://www.xszhibo.com/', 
    url:'/fyclass',
    //class_name:'赛事直播✨注意时间',
    //class_url:'/', 
    class_name:'全部&篮球&足球&乒乓球&羽毛球&斯诺克&网球',
    class_url:'/&lanqiu/&zuqiu/&zonghe/pingpangqiu/&zonghe/yumaoqiu/&zonghe/sinuoke/&zonghe/wangqiu/', 
    
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    //timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.tit ');tabs.forEach(function(it){var pz=pdfh(it,'.sbtsw022&&Text');var ps=pdfh(it,'.sbtsw spna&&Text');var pk=pdfh(it,'.sbtsw023&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.sbtsw&&Text');var url=pd(it,'.zbzt a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
      
    二级:{
       title:'li.timer&&Text;p.zb_zzt&&Text',
       desc:';;;li.teamName.nameOne&&Text;li.teamName.nameTwo&&Text',
       content:'.msg ul&&Text',
       tabs:"js:TABS=['【直播源】']",
      lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'p.down-site&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'a&&Text');let url=pd(it,'a&&href');return name+'$'+url});LISTS.push(d)});"
    },
  搜索:'*',
}