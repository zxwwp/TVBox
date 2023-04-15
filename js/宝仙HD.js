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
          title:'.pannel_head.clearfix h2&&Text;.content_detail.content_min.fl li:eq(0)&&Text',  //片名;类型 时间
          img:"a.vodlist_thumb.lazyload&&data-original",
          desc:';;;.content_detail.content_min.fl li:eq(3)&&a&&Text;.content_detail.content_min.fl li:eq(4)&&a&&Text',  //// 演员;导演
          content:".content_detail.content_min.fl li:eq(5)&&Text", //主要信息
          tabs:"ul.title_nav:eq(1)",
          lists:'ul.content_playlist.clearfix:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    }