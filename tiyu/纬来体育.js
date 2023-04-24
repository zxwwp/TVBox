var rule = {
    title:'纬来体育',
    host:'https://www.xiangsuke.com/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'全部&足球&篮球&NBA&英超',       //静态分类名称拼接
    class_url:'/&zuqiu&lanqiu&lanqiu/nba&zuqiu/yingchao',    //静态分类标识拼接
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
      一级:'dd&&data-rowdate;.once-game&&Text;.lazy&&data-original;.zban_wrap p:gt(0):lt(2)&&Text;a&&href',
    // 一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&dl#one.list_wrap_new dd');tabs.forEach(function(it){var  pz=pdfh(it,'.once-game&&Text');var ps=pdfh(it,'.once-event&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.once-time&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.sig-vs-txt span&&Text;.sig-vs-txt b&&Text',  //片名;类型 时间
          img:'img&&src',
          desc:';;;.ht a&&Text;.gt a&&Text',  //// 演员;导演
          content:".team&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.sig-list.a.ncp a:gt(0):lt(17)',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          //list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }