$(function () {
    $(".p1 p:eq(0)").click(function () {
        $("img").fadeTo(1000,0.05)
    })
    $(".p1 p:eq(1)").click(function () {
        $("img").slideUp(3000)
    })
    $(".p1 p:eq(2)").click(function () {
        $("img").toggle(3000,function () {
            $(this).css({"border":"solid 1px red"})
        });
    })

})