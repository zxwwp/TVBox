var rule={
    title:'看看剧',
    host:'https://www.kankanju.cc/',
    url:'/vodshow/id/fyfilter.html',
    headers:{'User-Agent':'UC_UA',},
    class_name:'电影&国产剧&港台剧&日韩剧&欧美剧&泰国剧&综艺&动漫&纪录片',
    class_url:'dianying&guochanju.html&gangtaiju.html&rihanju.html&oumeiju.html&taiguoju.html&zongyi.html&dongman.html&jilupian.html',
    play_parse:true,
    detailUrl:'',
    lazy:"",
    limit:6,
    推荐:'',
    double:true, // 推荐内容是否双层定位
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.stui-vodlist__box');tabs.forEach(function(it){var  pz=pdfh(it,'.stui-vodlist__detail h4&&Text');var ps=pdfh(it,'.pic-text b&&Text');var img=pd(it,'a&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{
        "title":".stui-content__detail h1&&Text;.stui-content__detail p:gt(-1):lt(1)&&Text",
        "img":".lazyload&&data-original",
        "desc":";;;.stui-content__detail p:gt(5):lt(7)&&Text;.stui-content__detail p:gt(4):lt(6)&&Text",
        "content":".detail-sketch&&Text",
        "tabs":"h3.title",
        "lists":"ul.stui-content__playlist:eq(#id)&&a"},

   搜索:'',
}