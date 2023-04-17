muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = 'ul.title_nav:eq(1)&&li';
var rule = {
    title:'宝仙HD',
    模板:'mxpro',
    host:'https://webdillo.com/',
    url:'/vodshow/fyclass--------fypage---.html',
    class_parse: '.top_nav.clearfix&&li:gt(1):lt(6);a&&Text;a&&href;/(\\d+).html',
}