var rule = {
    title:'快体育',
    host:'https://123kzb.net/',
    url:'/fyclass',
    //class_name:'热门&足球&篮球&NBA&CBA&WNBA&WCBA',
    //class_url:'0&1&2&20001&20003&20002&20020', 
   // homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
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
   //一级:'.van-list div;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;p.eventtime_wuy.eventtime&&Text;a&&href', 
    //二级:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.isPc div');tabs.forEach(function(it){var pz=pdfh(it,'.pcDom_left_right_row-1&&Text');var ps=pdfh(it,'.divisionTime&&Text');var pk=pdfh(it,'.row-1&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.match-start-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:'.live-title&&Text;.live-title&&Text',
        desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',
        content:'.live-info&&Text',
        tabs:"js:TABS=['【直播源】']",
        lists:'#item-source a',
        list_text:'a&&Text',
        list_url:'a&&data-url'
        },
    搜索:'',
}