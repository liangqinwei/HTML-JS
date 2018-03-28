$(function () {
    $(".top span").click(function () {
        if($(".content").is(":visible")){
            $(".top span img").attr("src","../IMAGE/a2.gif")
            $(".content").css("display","none")
        }else{
            $(".top span img").attr("src","../IMAGE/a1.gif")
            $(".content").css("display","block")
        }
    });
    $(".fi_line>a").click(function () {
        if($(".fi_line>a").text()=="简化"){
            $(".f_line>li:gt(4):not(:last)").hide();
            $(".fi_line>a").text("更多")
        }
        else {
            $(".f_line>li:gt(4):not(:last)").show().addClass("getfoucs")
            $(".fi_line>a").text("简化")
        }


    })

})