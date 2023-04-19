var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    //备用网址：http://www.928.tv，http://www.310.tv
    url:'/fyclass',
    class_name:'热门&篮球&足球&体育',     //静态分类名称拼接
    class_url:'0&2&1&3',    //静态分类标识拼接
    推荐:'*',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.list_content a');tabs.forEach(function(it){var pz=pdfh(it,'.zhudui_wuyd&&Text');var ps=pdfh(it,'.diss&&Text');var pk=pdfh(it,'.team.kedui&&Text');var img=pd(it,'img&&op-zfr-a-g');var timer=pdfh(it,'p.eventtime&&Text');var url=pd(it,'.list_content a&&href');items.push({desc:timer+'  '+ps,title:pz+'🆚'+pk,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:'.bs_fenl_sj.bs_fenl_sj_new&&Text;.weikan span:eq(1)&&Text',
        img:".team img&&src",
        desc:';;;.ks_zhumc&&Text;.ks_kemc&&Text',
        content:'.biaoti&&Text',
        tabs:"js:TABS=['【直播源】']",
        //lists:"js:LISTS=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;let html=request(input);let data=pdfa(html,'.box dl&&dd');TABS.forEach(function(tab){let d=data.map(function(it){let name=pdfh(it,'span.diss&&Text');let url=pd(it,'iframe&&src');return name+'$'+url});LISTS.push(d)});"
        lists:'dl.singldl dd',   //:gt(2):lt(17)显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
        list_text:'dd&&Text',
        list_url:'a&&href'
        },
    搜索:'',
}