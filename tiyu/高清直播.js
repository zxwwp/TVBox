var rule = {
    title:'高清直播',
    host:'http://www.zuqiuzhibo.live/',
    url:'/fyclass',
    class_name:'全部&NBA&CBA&英超&西甲&意甲&德甲&法甲&欧冠杯&中超',       //静态分类名称拼接
    class_url:'/&nba.html&cba.html&yingchao.html&xijia.html&yijia.html&dejia.html&fajia.html&ouguan.html&zhongchao.html',    //静态分类标识拼接
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&tr.against');tabs.forEach(function(it){var pz=pdfh(it,'strong:lt(0)&&Text+'🆚'');var ps=pdfh(it,'a&&Text');var pk=pdfh(it,'strong:lt(1)&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'td&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:".title-content hl&&Text;a&&Text",//类型 时间
		//desc:";;;.title&&Text",  //演员;导演
		//content:".title-content hlg&&Text",  // 主要信息
		tabs:"js:TABS=['【直播源】']",
		lists:'td.live_link a:gt(-1):lt(4)',
        list_text:'a&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}