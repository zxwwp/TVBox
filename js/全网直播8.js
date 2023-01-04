var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net/match-list.html',
    url:'fyclas',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    //class_name:'热门&足球&篮球',
    //class_url:'0&1&2',        
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.list_content a;.jiabifeng&&p:lt(5)&&Text;.feleimg img&&src;a&&t-nzf-o;a&&href',
    二级:'*', 
    搜索:'',
}