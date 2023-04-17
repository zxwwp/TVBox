
var rule ={
    title:'人人影视',
    host:'www.rrets.cc',
    url:'/category-fyclass',
    class_name:'电影&剧集&动漫&综艺&记录片',       //静态分类名称拼接
    class_url:'1&2&3&4&5',    //静态分类标识拼接
    searchUrl:'/so/wd//page/fypage.html',
    推荐:'',
    double:true,
    一级:'.public-list-box.public-pic-b;a.time-title.hide.ft4&&Text;.lazy.gen-movie-img.mask-1&&data-original;span..cr8&&Text;a&&href',
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
    }