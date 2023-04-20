muban.短视2.二级.title = 'h2&&Text;.hl-ma0&&Text';
muban.短视2.二级.img = '.lazy:eq(0)&&data-original';
muban.短视2.二级.desc = 'p:eq(1)&&Text;;;p:eq(2)&&Text;p:eq(1)&&Text';
muban.短视2.二级.content = '.card-text&&Text';
var rule = {
    title:'异视琳琅',
    模板:'短视2',
    host:'https://www.14ll.tv/',
	url: '/vodshow-fyclassfyfilter/',
    searchUrl: '/so/page/fypage/wd/**/',
    searchable: 0,
	//class_parse:'.nav-channel a;a&&Text;a&&href;/\\w+-(\\d+)/',
	lazy:"",
	一级:'.vodlist.hotgrow.size.listdh.list-a1 .pack-ykpack;a&&title;.lazy&&data-original;.public-list-prb&&Text;a&&href',
}