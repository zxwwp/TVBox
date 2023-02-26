var rule = {
    title:'雄狮直播',
    host:'https://www.xszhibo.com/', 
    url:'/fyclass',
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:"",
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.tit ');tabs.forEach(function(it){var pz=pdfh(it,'.sbtsw022&&Text');var ps=pdfh(it,'.sbtsw spna&&Text');var pk=pdfh(it,'.sbtsw023&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.sbtsw&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".sbtsw spna&&Text",
        desc:";;;.teamName.nameOne&&Text;.teamName.nameTwo&&Text",
        content:".timer&&Text",
        tabs:"js:TABS=['【直播源】']",
        lists:'.downinfo-detail p',
        list_text:'rel&&Text',
        list_url:'a&&href'},
        //lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.down-site&&a');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'rel&&Text');let url=pd(it,'a&&href');return name+'$'+url});LISTS.push(d)});"},
   
   搜索:'',
}