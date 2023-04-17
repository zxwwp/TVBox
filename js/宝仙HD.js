muban.mxpro.二级.desc = ';;;.content_detail.content_min.fl li:eq(3)&&a&&Text;.content_detail.content_min.fl li:eq(4)&&a&&Text';
muban.mxpro.二级.tabs = 'ul.title_nav:eq(1)&&li';
var rule = {
    title:'宝仙HD',
    模板:'mxpro',
    host:'https://webdillo.com/',
    url:'/vodshow/fyclass--------fypage---.html',
    class_parse: '.top_nav.clearfix&&li:gt(0):lt(6);a&&Text;a&&href;/(\\d+).html',
}