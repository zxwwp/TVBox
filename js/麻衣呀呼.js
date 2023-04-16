var rule={
    title:'麻衣呀呼',
    host:'https://www.mayiyahu.com/',
    url:'/s/id-fyclass/page/fypage',
    filterable:1,//是否启用分类筛选,
    searchUrl:'/c/wd/**.html',  //搜索影片,
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{'User-Agent':'PC_UA', },
    class_name:'电影&电视剧&国产剧&香港剧&韩国剧&泰国剧&动漫&综艺',       //静态分类名称拼接
    class_url:'a&b&b/area/中国大陆&b/area/香港&b/area/韩国&b/area/泰国&c&d',    //静态分类标识拼接
    推荐:'',
    double:true,
    一级:'.modulemod&&.cf.listwap&&.gcol.l;a.plusclk&&Text;.inlist.ec-jabj.eclazy&&data-original;span.packscore&&Text;a&&href',
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