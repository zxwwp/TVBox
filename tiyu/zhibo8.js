var rule = {
    title:'直播车直播',
    host:'https://www.zhibo8.net/',
    url:'/fypage',
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
   一级:'.live-cont dd;.jiabifeng&&dd:lt(5)&&Text;.feleimg img&&src;dd&&data-rowdate;a&&href',
   二级:'*', 
    搜索:'',
}