var rule={
    title:'茶杯狐',
    host:'https://cupfox.app/',
    url:'/filter/fyclass/page/fypage',
    //searchUrl:'/s/id-fyclass/page/fypage.html',
    searchable:2,
    filterable:0,
    headers:{'User-Agent':'PC_UA', },
    class_name:'电影&电视剧&国产剧&香港剧&韩国剧&泰国剧&动漫&综艺',       //静态分类名称拼接
    class_url:'电影/全部类型/全部地区/全部年代/近期热度&电视剧/全部类型/全部地区/全部年代/近期热度&电视剧/全部类型/华语/全部年代/近期热度&b/area/香港&b/area/韩国&b/area/泰国&c&d',    //静态分类标识拼接
    推荐:'.wp.type.borsxo;.cf.listwap&&.gcol.l;*;*;*;*',
    double:true,
    一级:'.jsx-600399963.card-content&&.jsx-2691002058.movie-list-body&&.jsx-2691002058.movie-list-item;.jsx-2691002058.movie-title&&Text;img&&src;.jsx-2691002058.movie-rating&&Text;a&&href',

    //一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.cf.listwap .gcol.l');tabs.forEach(function(it){var  pz=pdfh(it,'a.plusclk&&Text');var ps=pdfh(it,'span.packscore&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'.inlist.ec-jabj.eclazy&&div&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
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