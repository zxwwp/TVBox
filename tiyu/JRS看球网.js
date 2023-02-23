var rule = {
    title:'JRS看球网',
    host:'http://www.jrskanqiu.com',
    url:'/fyclass', 
    class_name:'全部&篮球&足球',
    class_url:'checked(this,0)&checked(this,17)&checked(this,18)', 
    homeUrl:'/',       //网站的首页链接,用于分类获取和推荐获取
    //class_name:'全部',
    //class_url:'/',
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    //一级:'.todayMatch .contenTab;.myList div:gt(0)&&Text;img&&src;.status&&Text;a&&href',
    一级:"js:var items=[];pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;var html=request(input);var tabs=pdfa(html,'body&&.listBox');tabs.forEach(function(it){var pz=pdfh(it,'.myList div:gt(1)&&Text');var ps=pdfh(it,'.matchType&&Text');var img=pd(it,'img&&src');var timer=pdfh(it,'.timer&&Text');var url=pd(it,'a&&href');items.push({desc:timer+'  '+ps,title:pz,pic_url:img,url:url})});setResult(items);",
    二级:{
        title:'.msg ul&&Text;.msg ul&&Text',
        img:'img:eq(2)&&src',
        desc:';;;.nameOne&&Text;.nameTwo&&Text',
        content:'._t&&Text',
        tabs:"js:TABS=['【直播源】']",
        lists:'.checkChannel li:gt(0)',
        list_text:'a&&Text',
        list_url:'a&&data-url'
        },
    搜索:'',
}