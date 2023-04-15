var rule={
    title:'宝仙HD',
    host:'https://webdillo.com/',
    url:'/index.php/vod/type/id/fyclass/page/fypage',
    searchUrl:'/vodsearch/**-------------.html',
    class_name:'电影&电视剧&动漫&综艺&国产剧&港台剧&日韩剧&海外剧',       //静态分类名称拼接
    class_url:'1&2&4&3&13&14&15&16',    //静态分类标识拼接
    推荐:'li.col-lg-8.col-md-6.col-sm-4.col-xs-3&&.myui-vodlist__box;*;*;*;*',
    double:true,
    一级:'ul.vodlist.vodlist_wi.clearfix&&li.vodlist_item;p.vodlist_title a&&Text;a.vodlist_thumb.lazyload&&data-original;span.pic_text.text_right.text_dy&&Text;a&&href',
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