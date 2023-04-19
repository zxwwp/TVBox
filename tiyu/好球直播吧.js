var rule = {
    title:'好球直播吧',
    host:'https://www.haoqiuzhibo.com/',
    url:'/fyclass',     //网站的分类页面链接
    class_name:'赛事直播✨注意时间',
    class_url:'/',
    double:false,    //是否双层列表定位,默认false
    推荐:'*',
      // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&ul#zb_ul_1 li');tabs.forEach(function(it){var  pz=pdfh(it,'.zb_neirong a:gt(2)&&Text');var ps=pdfh(it,'.zb_neirong a&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.zb_neirong span:gt(0)&&Text');var url=pd(it,'.zb_pd a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
     二级:{
          title:'p.timeP&&Text;.score_name a&&Text',  //片名;类型 时间
          img:'img&&src',
          desc:';;;.score_name_left h3&&Text;.score_name_left.score_name_right h3&&Text',  //// 演员;导演
          //content:"style h1&Text", //主要信息
          tabs:"js:TABS=['【直播源】']",
          lists:'.sig-list a:gt(0)',
          list_text:'a&&Text',
          list_url:'a&&href'
         },
     搜索:'',  
    }