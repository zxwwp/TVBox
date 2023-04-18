var rule={
    title:'纽约影院',
    host:'https://www.nycvod.com/',
    //url:'/vodtype/fyclass/page/fypage',
    url: '/index.php/api/vod#type=fyfilter&page=fypage',
    filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.cateId}}',
	filter: {
        "1":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"1"},{"n":"动作片","v":"9"},{"n":"喜剧片","v":"10"},{"n":"奇幻片","v":"11"},{"n":"科幻片","v":"12"},{"n":"恐怖片","v":"22"},{"n":"惊悚片","v":"27"},{"n":"悬疑片","v":"23"},{"n":"爱情片","v":"21"},{"n":"战争片","v":"20"},{"n":"剧情片","v":"6"},{"n":"网络电影","v":"24"},{"n":"犯罪片","v":"26"},{"n":"伦理片","v":"8"},{"n":"灾难片","v":"7"},{"n":"动画电影","v":"25"},{"n":"冒险片","v":"28"},{"n":"同性片","v":"44"},{"n":"纪录片","v":"29"},{"n":"歌舞片","v":"45"},{"n":"经典片","v":"46"}]}],
        "2":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"2"},{"n":"国产剧","v":"30"},{"n":"欧美剧","v":"47"},{"n":"日韩剧","v":"18"},{"n":"港台剧","v":"16"},{"n":"新马泰剧","v":"14"},{"n":"其他剧","v":"13"}]}],
        "3":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"3"},{"n":"国产综艺","v":"31"},{"n":"日韩综艺","v":"32"},{"n":"欧美综艺","v":"34"},{"n":"港台综艺","v":"35"},{"n":"其他综艺","v":"37"}]}],
        "4":[{"key":"cateId","name":"分类","value":[{"n":"全部","v":"4"},{"n":"日韩动漫","v":"38"},{"n":"国产动漫","v":"39"},{"n":"欧美动漫","v":"40"},{"n":"港台动漫","v":"42"},{"n":"其他动漫","v":"43"}]}]
        },
	filter_def:{
		1:{cateId:'1'},
		2:{cateId:'2'},
		3:{cateId:'3'},
		4:{cateId:'4'},
        5:{cateId:'5'}
	},
    detailUrl:'/voddetail/fyid.html',
    searchUrl:'/vodsearch/**-------------.html',
    class_name:'电影&国产剧&港台剧&日韩剧&欧美剧&新马泰剧&动漫&综艺&记录片&伦理片&网络电影',       //静态分类名称拼接
    class_url:'1&30&16&18&47&14&4&3&29&8&24',    //静态分类标识拼接
    推荐:'',
    double:true,
    一级:'.public-list-box.public-pic-b;a.time-title.hide.ft4&&Text;.lazy.gen-movie-img.mask-1&&data-original;span..cr8&&Text;a&&href',
   二级:{
          title:'.detail-info.rel.flex-auto h3&&Text;.detail-info.rel.flex-auto div:eq(1)&&Text',  //片名;类型 时间
          img:"a.detail-pic.lazy.mask-1&&data-original",
          desc:';;;.detail-info.rel.flex-auto div:eq(3)&&a&&Text;.detail-info.rel.flex-auto div:eq(2)&&a&&Text',  //// 演员;导演
          content:"div#height_limit.check.text.selected.cor3&&Text", //主要信息
          tabs:"a.swiper-slide",
          lists:'ul.anthology-list-play.size:eq(#id)&&a',   //显示直播信号数量。gt是指直播信号数量从-1开始第几个，li是指直播信号数量总共有几个。
          list_url:'a&&href'
         },
    搜索:'',
    }