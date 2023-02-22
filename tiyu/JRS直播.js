var rule = {
    title:'JRS直播',
    host:'http://www.jrskan.net',
    url:'/fyclass',
    class_name:'全部',
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
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.match-link');tabs.forEach(function(it){var pz=pdfh(it,'.left-team&&Text');var ps=pdfh(it,'.mobile-type&&Text');var pk=pdfh(it,'.right-team&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.match-start-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{title:'.live-title&&Text;.live-title&&Text',
    img:'img:eq(1)&&src',
    desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',
    content:'.live-info&&Text',
    tabs:"js:TABS=['【直播源】']",
    lists:'.col-12 a',
    list_text:'a&&Text',
    list_url:'a&&data-url'
    },
    搜索:'',
}
