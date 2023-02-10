var rule = {
    title:'926直播',
    host:'http://www.926.tv',
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'篮球&足球&体育',
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
   一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;img&&op-zfr-a-g;a&&t-nzf-o;a&&href',
   二级:'*', 
    搜索:'',
}