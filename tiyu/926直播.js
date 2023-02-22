var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    //备用网址：http://www.928.tv，http://www.310.tv
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'热门&篮球&足球&体育',
    class_url:'/&2&1&3', 
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    //play_parse:true,
    play_parse:true,    // 服务器解析播放
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.clearfix.jiabifeng');tabs.forEach(function(it){var pz=pdfh(it,'.zhudui_wuyd&&Text');var ps=pdfh(it,'.eventtime_wuy.eventtime&&Text');var pk=pdfh(it,'.team.kedui&&Text');var img=pd(it,'img&&op-zfr-a-g');var timer=pdfh(it,'.t-nzf-o&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
   二级:{
        title:'.data-matchtime&&Text;.eventtime_wuy.eventtime&&Text',
        desc:';;;.zhudui_wuyd&&Text;.team.kedui&&Text',
        tabs:"js:TABS=['【直播源】']",
        lists:'dl.singldl',
        list_text:'zr-zfr-y&&Text',
        list_url:'zr-zfr-y&&href'
        },
  //一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;a&&t-nzf-o;a&&href', 
  //二级:'*', 

    搜索:'',
}