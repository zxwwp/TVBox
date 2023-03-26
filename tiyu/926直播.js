var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    //备用网址：http://www.928.tv，http://www.310.tv
    //url:'/fyclass',
    //class_name:'热门&篮球&足球&体育',     //静态分类名称拼接
    //class_url:'0&1&2&3',    //静态分类标识拼接
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'赛事直播✨注意时间',
    class_url:'/', 
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,    // 服务器解析播放
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    //一级:'.list_content a;.jiabifeng&&p:lt(5)&&Text;.feleimg img&&src;a&&t-nzf-o;a&&href',
    //一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;p.eventtime_wuy.eventtime&&Text;a&&href', 
    //二级:'*', 
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list_content a');tabs.forEach(function(it){var pz=pdfh(it,'.zhudui_wuyd&&Text');var ps=pdfh(it,'.diss&&Text');var pk=pdfh(it,'.team.kedui&&Text');var img=pd(it,'img&&op-zfr-a-g');var timer=pdfh(it,'p.eventtime&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:'.bs_fenl_sj.bs_fenl_sj_new&&Text;.weikan span:eq(1)&&Text',
        desc:';;;.ks_zhumc&&Text;.ks_kemc&&Text',
        content:'.biaoti&&Text',
        tabs:"js:TABS=['【直播源】']",
        lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'dl.singldl&&dd');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'span&&Text');let url=pd(it,'dd&&zr-zfr-y');return name+'$'+url});LISTS.push(d)});"
        },
    搜索:'',
}