var rule = {
    title:'全网直播8',
    host:'https://www.zhibo8.net/',
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
    一级:'.main-left:eq(2) ul;div:gt(1):lt(3)&&Text;img&&src;div:lt(2)&&Text;a:eq(1)&&href',
    二级:{title:'.sub_list div:lt(2)&&Text;.sub_list div:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    搜索:'',
}