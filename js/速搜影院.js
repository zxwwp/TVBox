var rule={
    title:'速搜影院',
    host:'https://www.sstv.pw/',
    url:'/vodshow-fyclass/page/fypage',
    searchUrl:'/vodsearch/**----------fypage---/',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    class_name:'电影&剧集&综艺&动漫&记录',
    class_url:'1&2&3&4&5',
    推荐:'',
    double:true, // 推荐内容是否双层定位
   一级:'#grid.tab-pane&&.row&&div;.zmovo-team-title.wapxs a&&Text;img&&src;.zmovo-team-title.wapxs h4&&Text;a&&href',
   二级:{
          title:'h1.doc-title.mdui-text-color-white&&Text;a&&target',  //片名;类型 时间
          desc:';;;a&&Text;a&&target',  //// 演员;导演
          content:".inline_item p&&Text", //主要信息
          tabs:".mdui-panel-item-title",
          lists:'.mdui-panel-item-body:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'body li.vod_item;*;*;*;*',
}