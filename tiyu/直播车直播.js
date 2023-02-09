var rule = {
    title:'直播车直播',
    host:'http://www.zhiboche.tv/',
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'篮球&足球&综合体育',
    class_url:'2&1&3',         
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
       一级:'.live-cont dd;.list_wrap_new_dd&&dd:lt(6)&&Text;.feleimg img&&src;dd&&data-rowdate;a&&href',
   //一级:'.live-cont dd;.jiabifeng&&dd:lt(5)&&Text;.feleimg img&&src;dd&&data-rowdate;a&&href',
   二级:'*', 
    搜索:'',
}