var rule = {
    title:'310直播',
    host:'http://www.310.tv',
    //备用网址：http://www.928.tv，http://www.926.tv
    url:'/?s=0&t=1&a=fyclass&g=fypage',
    class_name:'篮球&足球',
    class_url:'2&1', 
    //class_name:'足球&篮球',
    //class_url:'1&2',        
    headers:{
        'User-Agent':'MOBILE_UA'
    },
    timeout:5000,
    play_parse:false,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
   一级:'.list_content a;.jiabifeng&&p:lt(2)&&Text;.feleimg img&&op-zfr-a-g;a&&t-nzf-o;a&&href',
   二级:'*', 
    搜索:'',
}