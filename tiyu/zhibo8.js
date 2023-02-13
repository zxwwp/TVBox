var rule = {
    title:'JRS直播',
    host:'https://www.zhibo8.net',
    url:'/fyclass',
    searchUrl:'',
    searchable:0,
    quickSearch:0,
    class_name:'全部',
    class_url:'/',
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.main-left li;div:gt(1):lt(3)&&Text;img&&src;.col&&Text;a&&href',
    二级:{title:'.live-title&&Text;.live-title&&Text',img:'img:eq(1)&&src',desc:';;;.live-left-team-sj&&Text;.live-right-team-sj&&Text',content:'.live-info&&Text',tabs:'',tab_text:'',lists:'#item-source a',list_text:'a&&Text',list_url:'a&&data-url'},
    搜索:'',
}