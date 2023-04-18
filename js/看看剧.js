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
          title:'.stui-content__detail h1&&Text;.stui-content__detail p:gt(-1):lt(0)&&Text',  //片名;类型 时间
          img:"img&&data-original",
          desc:';;;.stui-content__detail p:eq(6)&&a&&Text;.stui-content__detail p:eq(5)&&a&&Text',  //// 演员;导演
          content:"span.detail-sketch&&Text", //主要信息
          tabs:"h3.title",
          lists:'ul.stui-content__playlist.sort-list.maxheight.clearfix:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
}