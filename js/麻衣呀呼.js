var rule={
    title:'厂长资源',
title:'麻衣呀呼',
    host:'https://www.mayiyahu.com/',
    url:'/s/id-fyclass/page/fypage',
    //searchUrl:'/s/id-fyclass/page/fypage.html',
    searchable:2,
    filterable:0,
    headers:{'User-Agent':'PC_UA', },
    class_name:'电影&电视剧&国产剧&动漫&综艺',       //静态分类名称拼接
    class_url:'a&b&b/area/中国大陆&c&d',    //静态分类标识拼接
    推荐:'.wp.type.borsxo;.cf.listwap&&.gcol.l;*;*;*;*',
    double:true,
    一级:'.wp.type.borsxo&&.cf.listwap&&.gcol.l;a.plusclk&&Text;.inlist.ec-jabj.eclazy&&data-original;span.packscore&&Text;a&&href',

    //一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.cf.listwap .gcol.l');tabs.forEach(function(it){var  pz=pdfh(it,'a.plusclk&&Text');var ps=pdfh(it,'span.packscore&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'.inlist.ec-jabj.eclazy&&div&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
     二级:{
          title:'.detailinfo.r h1&&Text;p.hide a&&Text',  //片名;类型 时间
          img:".detailpic.l&&img&&src",
          desc:';;;.detailinfo.r p:eq(4)&&Text;.detailinfo.r p:eq(3)&&Text',  //// 演员;导演
          content:".tjuqing&&Text", //主要信息
          tabs:"li.this",
          lists:'.videolist.cf:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          //list_text:'a&&Text',
          list_url:'a&&href'
         },
    搜索:'',
    }