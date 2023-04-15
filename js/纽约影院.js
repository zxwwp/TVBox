var rule={
    title:'纽约影院',
    host:'https://www.nycvod.com/',
    url:'/vodtype/fyclass/page/fypage',
    searchUrl:'/vodsearch/**-------------.html',
    class_name:'电影&国产剧&港台剧&日韩剧&欧美剧&新马泰剧&动漫&综艺&记录片&伦理片&网络电影',       //静态分类名称拼接
    class_url:'1&30&16&18&47&14&4&3&29&8&24',    //静态分类标识拼接
    推荐:'li.col-lg-8.col-md-6.col-sm-4.col-xs-3&&.myui-vodlist__box;*;*;*;*',
    double:true,
    一级:'.public-list-box.public-pic-b;a.time-title.hide.ft4&&Text;.lazy.gen-movie-img.mask-1&&data-original;span.public-prt.cr8&&Text;a&&href',
   二级:{
          title:'.pannel_head.clearfix h2&&Text;.content_detail.content_min.fl li:eq(0)&&Text',  //片名;类型 时间
          img:"a.vodlist_thumb.lazyload&&data-original",
          desc:';;;.content_detail.content_min.fl li:eq(3)&&a&&Text;.content_detail.content_min.fl li:eq(4)&&a&&Text',  //// 演员;导演
          content:".content_detail.content_min.fl li:eq(5)&&Text", //主要信息
          tabs:"ul.title_nav:eq(1)&&li",
          lists:'ul.content_playlist.clearfix:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    }