var rule = {
    title:'体育录像回放',
    host:'https://www.haoqiuzhibo.com/',
    url:'/luxiang/fyclass/index-fypage.html',     //网站的分类页面链接
    class_name:'足球录像&篮球录像&综合录像',       //静态分类名称拼接
    class_url:'zuqiu&lanqiu&tiyu',    //静态分类标识拼接
    double:false,    //是否双层列表定位,默认false
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.zhiboDiv.News&&ul&&li');tabs.forEach(function(it){var  pz=pdfh(it,'a&&title');var ps=pdfh(it,'.fright&&Text');var img=pd(it,'img:eq(1)&&src');var timer=pdfh(it,'.zb_neirong span:gt(0)&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'.ah h1&&Text;.score_name a&&Text',  //片名;类型 时间
           content:".ah span:eq(0)&&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.ar_body p',
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }