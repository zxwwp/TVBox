var rule={
    title:'异视琳琅',
    host:'https://www.14ll.tv/',
    url:'/vodshow-fyclass/page/fypage',
    searchUrl:'/so/wd/**',  //搜索影片,
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    class_name:'电影&电视剧&国产剧&香港剧&韩国剧&泰国剧&美国剧&动漫&综艺&纪录',       //静态分类名称拼接
    class_url:'1&2&2/area/内地&2/area/香港&2/area/韩国&2/area/泰国&2/area/美国&3&4&5',    //静态分类标识拼接
    推荐:'',
    double:true,
    一级:'.vodlist.hotgrow.size.listdh.top20.wow.fadeInUp.animated&&div&&a;a&&title;div&&data-original;span.pack-prb.hidden&&Text;a&&href',
   二级:{
          title:'.detailinfo.r h1&&Text;p.hide a&&Text',  //片名;类型 时间
          img:".detailpic.l&&img&&src",
          desc:';;;.detailinfo.r p:eq(4)&&Text;.detailinfo.r p:eq(3)&&Text',  //// 演员;导演
          content:".tjuqing&&Text", //主要信息
          tabs:"li.this",
          lists:'.videolist.cf:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    }