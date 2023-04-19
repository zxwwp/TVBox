var rule={
    title:'片库网',
    host:'https://zqthmz.com/',
    url:'/vodtype/fyclass-fypage.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    searchUrl:'/vodsearch/**-------------.html',
   // headers:{'User-Agent':'PC_UA', },
    class_name:'电影&电视剧&动漫&综艺&纪录片&国产剧&香港剧&韩国剧&欧美剧&泰国剧&日本剧&海外剧',       //静态分类名称拼接
    class_url:'1&2&4&3&24&13&26&28&16&30&29&31',    //静态分类标识拼接
    推荐:'li.col-lg-8.col-md-6.col-sm-4.col-xs-3&&.myui-vodlist__box;*;*;*;*',
    double:true,
    一级:'.myui-panel_bd&&ul&&li&&.myui-vodlist__box;h4.title.text-overflow&&Text;a.myui-vodlist__thumb.lazyload&&data-original;span.pic-tag.pic-tag-top&&Text;a&&href',
   二级:{
          title:'.myui-content__detail h1&&Text;.myui-content__detail p:eq(1)&&Text',  //片名;类型 时间
          img:"img.lazyload&&data-original",
          desc:';;;.myui-content__detail p:eq(3)&&Text;.myui-content__detail p:eq(4)&&Text',  //// 演员;导演
          content:".myui-content__detail p:eq(5)&&Text", //主要信息
          tabs:"ul.nav.nav-tabs.active li",
          lists:'ul.myui-content__list.sort-list.clearfix:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    }
