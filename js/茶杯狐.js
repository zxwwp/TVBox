var rule={
    title:'茶杯狐',
    host:'https://cupfox.app/',
    url:'/filter/fyclass',
    searchUrl:'/filter/fyclass/page/fypage',
    searchable:2,
    filterable:0,
    class_name:'电影&电视剧&国产剧&欧美剧&韩国剧&泰国剧&动漫&综艺',       //静态分类名称拼接
    class_url:'电影/全部类型/全部地区/全部年代/近期热度&电视剧/全部类型/全部地区/全部年代/近期热度&电视剧/全部类型/华语/全部年代/近期热度&电视剧/全部类型/欧美/全部年代/近期热度&电视剧/全部类型/韩国/全部年代/近期热度&电视剧/全部类型/泰国/全部年代/近期热度&动漫/全部类型/全部地区/全部年代/近期热度&综艺/全部类型/全部地区/全部年代/近期热度',    //静态分类标识拼接
    推荐:'.wp.type.borsxo;.cf.listwap&&.gcol.l;*;*;*;*',
    double:true,
    一级:'.card.border-shadow&&.movie-list-body&&.movie-list-item;.movie-title&&Text;img&&src;.movie-rating&&Text;a&&href',
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