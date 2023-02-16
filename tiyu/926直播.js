var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    //备用网址：http://www.928.tv，http://www.310.tv
    //url:'/?s=0&t=1&a=fyclass&g=fypage',
    //class_name:'篮球&足球&体育',
    //class_url:'2&1&3', 
    url:'/fypage',        
    class_name:'全部',
    class_url:'/',
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
    二级:{title:'.live-title&&Text;.live-title&&Text',img:'img:eq(1)&&src',desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',content:'.live-info&&Text',tabs:"js:TABS=['直播信号:']",lists:'#item-source a',list_text:'a&&Text',list_url:'a&&data-url'},
    
  // 一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;a&&t-nzf-o;a&&href',
   //二级:'*', 
    搜索:'',
}