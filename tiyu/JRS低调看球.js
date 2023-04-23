var rule = {
    title:'JRS低调看球',
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    host:'https://ddkanqiu.net/',
    url:'/fyclass',
    double:true,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.match-link');tabs.forEach(function(it){var pz=pdfh(it,'.left-team&&Text');var ps=pdfh(it,'.mobile-type&&Text');var pk=pdfh(it,'.right-team&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.mobile-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
          title:'.live-info&&Text;.live-info div:eq(0)&&Text',
          img:".live-left-team-sj img&&src",
          desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',
          content:'.col-12.live-title&&Text',
          tabs:"js:TABS=['【直播源】']",
          lists:'ul#item-source li', //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          //list_text:'li&&Text',
          list_url:'li&&data-url'
         },
    搜索:'',
}