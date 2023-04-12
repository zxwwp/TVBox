var rule={
    title:'速搜影院',
    host:'https://www.sstv.pw/',
    url:'/vodshow-fypage/page/1/?wd=',
    headers:{'User-Agent':'UC_UA',},
    class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
    play_parse:true,
    detailUrl:'',
    lazy:"",
    limit:6,
    推荐:'.index_vod;.vod_item;.vod_title&&Text;.lazyload&&data-src;.vod_remarks&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
        一级:'.index_vod;.vod_item;.vod_title&&Text;.lazyload&&data-src;.vod_remarks&&Text;a&&href',
        二级:{
        "title":".module-info-main:eq(0) h1&&Text;.module-info-tag-link:eq(2)&&Text",
        "img":".lazyload&&data-original",
        "desc":";;;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text",
        "content":".module-info-introduction-content p&&Text",
        "tabs":"#y-playList .module-tab-item",
        "lists":".module-play-list-content:eq(#id)&&a"},

   搜索:'',
}