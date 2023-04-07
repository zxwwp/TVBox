var rule = {
    title:'麻衣呀呼',
    host:'https://www.mayiyahu.com/',
    url:'/s/id-fyclassfyfilter',
    filterable:1,//是否启用分类筛选,
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{
        'User-Agent':'UC_UA',
    },
    class_name:'电影&电视剧&动漫&综艺',       //静态分类名称拼接
    class_url:'a&b&c&d',    //静态分类标识拼接
    play_parse:true,    // 服务器解析播放
    detailUrl:'',
    lazy:'',    // 自定义免嗅
    limit:6,    // 首页推荐显示数量
    推荐:'',
    //推荐:'.modulemod;.cf.listwap&&.gcol.l;a&&title;div&&data-original;a&&href',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.cf.listwap .gcol.l');tabs.forEach(function(it){var  pz=pdfh(it,'a.plusclk&&Text');var ps=pdfh(it,'span.packscore&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'.inlist.ec-jabj.eclazy&&div&&data-original');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
 
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
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
    //搜索:'cf.listwap;a&&title;div&&data-original;a&&href',  
    }