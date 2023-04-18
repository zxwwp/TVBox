var rule = {
    title:'看看剧',
    host:'https://www.kankanju.cc/',
    url:'/type/fyclass-fypage/',
    searchUrl:'/vodshow/id/fyclass/page/fypage.html',
    class_name:'电影&国产剧&港台剧&欧美剧&泰国剧&日韩剧&记录片&综艺&动漫',       //静态分类名称拼接
    class_url:'dianying&guochanju&gangtaiju&oumeiju&taiguoju&rihanju&jilupian&zongyi&dongman',    //静态分类标识拼接
    推荐:'',
    double:true,
    一级:'.stui-vodlist__box;a&&title;a&&data-original;span.pic-text1&&Text;a&&href',
   二级:{
          title:'.detail-info.rel.flex-auto h3&&Text;.detail-info.rel.flex-auto div:eq(1)&&Text',  //片名;类型 时间
          img:"a.detail-pic.lazy.mask-1&&data-original",
          desc:';;;.detail-info.rel.flex-auto div:eq(3)&&a&&Text;.detail-info.rel.flex-auto div:eq(2)&&a&&Text',  //// 演员;导演
          content:"div#height_limit.check.text.selected.cor3&&Text", //主要信息
          tabs:"a.swiper-slide",
          lists:'ul.anthology-list-play.size:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    //class_parse: '.navbar-items&&li:gt(1):lt(7);a&&title;a&&href;/(\\d+).html',
}