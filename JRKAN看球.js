var rule = {
    title:'JRKAN直播',
    host:'http://www.jrskan.com',
    host:'http://jrkankan.com',
	// JRKAN备用域名:jrkan365.com / jrkankan.com / jryyds.com / jrsbxj.com
	// JRKAN网址发布:qiumi1314.com
    url:'/fyclass',
    // 一级:'.loc_match .d-touch;li&&Text;img&&src;.lab_time&&Text;a:eq(0)&&href',//play.sportsteam365.com
    一级:'.loc_match:eq(2) ul;li:gt(1):lt(4)&&Text;img&&src;li:lt(2)&&Text;a:eq(1)&&href',//play.sportsteam333.com
    // 一级:'.loc_match .d-touch;li&&Text;img&&src;.lab_time&&Text;a:eq(2)&&href',//play.sportsteam666.com
    二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&data-group',list_url:'a&&data-play'},
    二级:{title:'.sub_list li:lt(2)&&Text;.sub_list li:eq(0)&&Text',img:'img&&src',desc:';;;.lab_team_home&&Text;.lab_team_away&&Text',content:'.sub_list ul&&Text',tabs:'',tab_text:'',lists:'.sub_channel a',list_text:'a&&Text',list_url:'a&&data-play'},
    搜索:'',
}
