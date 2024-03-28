var rule = {
    title:'优直播',
    host:'https://www.yoozhibo.net/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'全部&足球&篮球&综合',       //静态分类名称拼接
    class_url:'/&zuqiu&lanqiu&zonghe',    //静态分类标识拼接
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&ul.item.cd');tabs.forEach(function(it){var  pz=pdfh(it,'.name:eq(0)&&Text');var ps=pdfh(it,'.league&&Text');var pk=pdfh(it,'.name:eq(1)&&Text');var img=pd(it,'img&&data-original');var timer=pdfh(it,'.time&&Text');var url=pd(it,'li.play a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
     二级:{
          title:'.team b&&Text;.sig-vs-txt b&&Text',  //片名;类型 时间
          img:"img&&src",
          desc:';;;.ht&&Text;.gt&&Text',  //// 演员;导演
          content:".team&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.sig-list.a.ncp a:gt(7):lt(15)',  //显示直播信号数量。gt直播信号数量从第几个开始，li直播信号数量总共有几个。
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }