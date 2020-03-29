$(function(){
    //0.自定义滚动条
    $(".content_list").mCustomScrollbar();
    //1.监听歌曲的移入移出时间
    $(".list_music").hover(function(){
        //显示子菜单
        $(this).find(".list_menu").stop().fadeIn(100);
        $(this).find(".list_time a").stop().fadeIn(100);
        //隐藏时长
        $(this).find(".list_time span").stop().fadeOut(100);
        
    },function(){
        //隐藏子菜单
        $(this).find(".list_menu").stop().fadeOut(100);
        $(this).find(".list_time a").stop().fadeOut(100);
        //显示时长
        $(this).find(".list_time span").stop().fadeIn(100);
    });
    //2.监听复选框的点击事件
    $(".list_check").click(function(){
        $(this).toggleClass("list_checked");
    });
    //3.加载歌曲列表
    getPlayerList();
    function getPlayerList(){
        $.ajax({
            url:"../source/musiclist.json",
            dataType:"json",
            success: function(data){
                //3.1遍历获取到的数据，创建每一条音乐
                $.each(data, function(index,ele){
                    var $item = createMusicItem(index,ele);
                    var $musicList = $(".content_list ul");
                    $musicList.append($item);
                });
            },
            error: function(e){
                console.log(e);
            }
            
        });
    }
    //定义一个方法创建一条音乐
    function createMusicItem(index,music){
        var $item = $("" +
        "<li class=\"list_music\">\n" +
            "<div class=\"list_check\"><i></i></div>\n" +
            "<div class=\"list_number\">"+(index + 1)+"</div>\n" +
            "<div class=\"list_name\">"+music.name+"" +
            "     <div class=\"list_menu\">\n" +
            "          <a href=\"javascript:;\" title=\"播放\" class='list_menu_play'></a>\n" +
            "          <a href=\"javascript:;\" title=\"添加\"></a>\n" +
            "          <a href=\"javascript:;\" title=\"下载\"></a>\n" +
            "          <a href=\"javascript:;\" title=\"分享\"></a>\n" +
            "     </div>\n" +
            "</div>\n" +
            "<div class=\"list_singer\">"+music.singer+"</div>\n" +
            "<div class=\"list_time\">\n" +
            "     <span>"+music.time+"</span>\n" +
            "     <a href=\"javascript:;\" title=\"删除\" class='list_menu_del'></a>\n" +
            "</div>\n" +
        "</li>");
        return $item;
        
    }
});