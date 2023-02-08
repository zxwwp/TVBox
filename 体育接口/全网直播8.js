muban.首图2.二级.tabs = '.nav-tabs.dpplay&&li';
var rule = Object.assign(muban.首图2,{
    title:'全网直播8',
    ali_token:'{{ali_token}}',
    bili_cookie:'{{bili_cookie}}',
    host:'https://www.zhibo8.net',
    url:'/live_1.html?project=1&game=0',//网站的分类页面链接, fyclass是分类标签 fypage是页数
    searchUrl:'/search/**----------fypage---.html',
    class_parse:'.nav-item li;a&&Text;a&&href',
    图片来源: "https://gitlab.com/duomv/duo/-/raw/main/txt/duotv.png",
});
