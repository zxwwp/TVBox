var rule = {
    title:'乐视体育',
    host:'http://www.lshitv.com/',
    url:'/zb/fyclass',     //网站的分类页面链接
    class_name:'赛事直播✨注意时间',
    class_url:'/',
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
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&ul.item.d-touch.active li:eq(2):lt(*)');tabs.forEach(function(it){var  pz=pdfh(it,'li.lab_team_home strong&&Text');var ps=pdfh(it,'li.lab_events&&Text');var pk=pdfh(it,'li.lab_team_away strong&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'li.lab_time&&Text');var url=pd(it,'li.play a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.sig-vs-txt span&&Text;.sig-vs-txt b&&Text',  //片名;类型 时间
          desc:';;;.ht a&&Text;.gt a&&Text',  //// 演员;导演
          content:".team&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.sig-list.a.ncp a:gt(4):lt(15)',   //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }