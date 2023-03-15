var rule = {
    title:'一球直播',
    host:'https://yiqiulive.com/live/list',
    url:'/sports-home/room/fyclass',     //网站的分类页面链接
    class_name:'赛事直播✨注意时间',       //静态分类名称拼接
    class_url:'/',    //静态分类标识拼接
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    //class_name:'足球&篮球',       //静态分类名称拼接
    //class_url:'1&/2',    //静态分类标识拼接
    //homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
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
     //一级:'._jN9fi2tGjt div;._jN9fi2tGjt&&Text;img&&src;_bUuy3C5Buw&&Text;a&&href', 
    //二级:'*', 
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&._bUuy3C5Buw');tabs.forEach(function(it){var  pz=pdfh(it,'._F9MKhp0yRe&&Text');var ps=pdfh(it,'._gpC+hyqmoX&&Text');;var img=pd(it,'img&&src');var timer=pdfh(it,'._HtlGr9Vxvg&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{title:'.item.cd li:lt(5)&&Text;.league&&Text',desc:';;;.name:eq(0)&&Text;.name:eq(1)&&Text',content:".play&&a",tabs:"js:TABS=['【直播源】']",lists:'.sig-list.a.ncp a',list_text:'a&&Text',list_url:'a&&href'},
     搜索:'',  
    }