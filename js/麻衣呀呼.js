var rule = {
    title:'麻衣呀呼',
    host:'https://www.mayiyahu.com/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'电影&电视剧&动漫&综艺',       //静态分类名称拼接
    class_url:'s/id-a.html&s/id-b.html&/s/id-c.html&/s/id-d.html',    //静态分类标识拼接
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    headers:{
        'User-Agent':'MOBILE_UA',
        "Cookie": "searchneed=ok"
    },     //网站的请求头,完整支持所有的,常带ua和cookies
    timeout:5000,     //网站的全局请求超时,默认是3000毫秒
    play_parse:true,    // 服务器解析播放
    lazy:'',    // 自定义免嗅
    limit:6,    // 首页推荐显示数量
    double:false,    //是否双层列表定位,默认false
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.gcol.l');tabs.forEach(function(it){var  pz=pdfh(it,'a.plusclk&&Text');var ps=pdfh(it,'span.packscore&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.detailinfo.r h1&&Text;p.hide a&&Text',  //片名;类型 时间
          img:".detailpic.l&&img&&src",
          desc:';;;.detailinfo.r p:eq(4)&&Text;.detailinfo.r p:eq(3)&&Text',  //// 演员;导演
          content:".tjuqing&&Text", //主要信息
          tabs:"ul#play",
          lists:'.videolist.cf:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }