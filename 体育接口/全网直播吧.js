var rule = {
    title:'全网直播吧',//规则标题,没有实际作用,但是可以作为cms类名称依据
    //编码:'',//不填就默认utf-8
    host:'https://www.zhibo8.net',//网页的域名根,包含http头如 https://www,baidu.com
    url:'/?s=0&t=1&a=fyclass&g=fypage',//网站的分类页面链接, fyclass是分类标签 fypage是页数
    //searchUrl:'',//搜索链接 可以是完整路径或者相对路径,用于分类获取和推荐获取 **代表搜索词 fypage代表页数
    //searchable:0,//是否启用全局搜索
    //quickSearch:0,//是否启用快速搜索
    //filterable:0,//是否启用筛选,
    class_name:'首页',//静态分类名称拼接
    class_url:'nav-item active href',    //静态分类标识拼接    
    headers:{'User-Agent':'MOBILE_UA'},//网站的请求头,完整支持所有的,常带ua和cookies
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    play_parse:false,// 服务器解析播放
    lazy:'', // 自定义免嗅 
    limit:6,    // 首页推荐显示数量
    double:false,//是否双层列表定位,默认false
    //图片来源:'@Referer=https://gitlab.com/duomv/duo/-/raw/main/txt/duotv.png',// 对图片加了referer验证的有效,海阔专用,普通规则请勿填写此键值
    // 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
    // 如果是双层定位的话,推荐的第2段分号代码也是第2层定位列表代码
    推荐:'*',
    一级:'.match-list li;.col-home flex&&span',
   //一级:'.match-list li;.col-home flex&&span;.feleimg img&&src;.col-time;a&&href',// 类似海阔一级 列表;标题;图片;描述;链接;详情 其中最后一个参数选填
 // 二级可以是*,表示规则无二级,直接拿一级的链接进行嗅探
    // 二级 title: 片名;类型
    // 二级 desc: 主要信息;年代;地区;演员;导演
    // 或者 {title:'',img:'',desc:'',content:'',tabs:'',lists:'',tab_text:'body&&Text',list_text:'body&&Text',list_url:'a&&href'} 同海阔dr二级
   二级:'*',
    // 搜索可以是*,集成一级，或者跟一级一样的写法 列表;标题;图片;描述;链接;详情
    搜索:'',
}