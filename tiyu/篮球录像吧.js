var rule = {
    title:'野球直播',
    host:'https://www.luxiangwu.com/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'NBA录像&CBA录像',       //静态分类名称拼接
    class_url:'nbaluxiang&cbaluxiang',    //静态分类标识拼接
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
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.post');tabs.forEach(function(it){var  pz=pdfh(it,'h2&&Text');var ps=pdfh(it,'.a&&Text');var pk=pdfh(it,'.a&&Text');var img=pd(it,'.bs_duiwu img&&data-original');var timer=pdfh(it,'.a&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.post h2&&Text;.entry p:eq(0)&&Text',  //片名;类型 时间
          //desc:';;;.clearfix.bs_xingxi div:eq(0)&&Text;.clearfix.bs_xingxi div:eq(2)&&Text',  //// 演员;导演
          content:".post h2&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.entry p:gt(0):lt(6)',  //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }