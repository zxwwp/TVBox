muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList&&.tab-item';
var rule = {
    title:'爱看影院',
        模板:'mxpro',
    host:'https://www.2wyy.com/',
    url:'/vodshow/fyclass--------fypage---.html',
    class_parse: '.navbar-items&&li:gt(1):lt(6);a&&title;a&&href;/(\\d+).html',
}