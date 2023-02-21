var rule = {
    title:'优直播',
    host:'https://www.yoozhibo.net/',
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'全部&篮球&足球&综合&热门',
    class_url:'0&1&2&3&999', 
    
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    //play_parse:true,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.nzw-o-t');tabs.forEach(function(it){var pz=pdfh(it,'.zhudui_wuyd&&Text');var ps=pdfh(it,'.mobile-type&&Text');var pk=pdfh(it,'.team kedui&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.t-nzf-o&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
     //一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;a&&t-nzf-o;a&&href',
    二级:{title:'.live-title&&Text;.live-title&&Text',img:'img:eq(1)&&src',desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',content:'.live-info&&Text',tabs:"js:TABS=['直播信号:']",lists:'.singldl dd',list_text:'dd&&Text',list_url:'a&&data-url'},
    
  //二级:'*', 

    搜索:'',
}