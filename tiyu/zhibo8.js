var rule = {
    title:'zhibo8',
    host:'https://www.zhibo8.net/live_1.html?project=1&game=0',
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
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list-style');tabs.forEach(function(it){var pz=pdfh(it,'.li div:gt(2)&&span');var ps=pdfh(it,'.col-name&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.col-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{title:'.msg ul&&Text;.msg ul&&Text',img:'img:eq(2)&&src',desc:';;;.nameOne&&Text;.nameTwo&&Text',content:'._t&&Text',tabs:"js:TABS=['直播信号源']",lists:'.checkChannel li:gt(0)',lists:'#item-source a',list_text:'a&&Text',list_url:'a&&data-url'},
    搜索:'',
}