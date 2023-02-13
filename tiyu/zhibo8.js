var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net/',
    url:'/fyclass',
    class_name:'全部',
    class_url:'/',         
    headers:{
        'User-Agent':'MOBILE_UA'
        ,'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    一级:'.main-left:eq(2) li;div:gt(1):lt(4)&&Text;img&&src;div&&col-time;a&&href',
    二级:{title:'.match-list div:lt(1)&&Text;.match-list div:eq(0)&&Text',img:'img&&src',desc:';;;.col-home flex&&Text',content:'.match-list li&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    搜索:'',
}