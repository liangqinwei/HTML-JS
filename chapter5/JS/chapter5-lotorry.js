
$(function () {
    var turnplate={
        result:[],
        color:[],
        outsideRadius:195,
        textRadius:155,
        insideRadius:68,
        startAngle:0,
        bRotate:false
    }
    turnplate.result=["50M免费流量包","30M流量包","20元流量包","100京东卡","谢谢参与","特别周边","幸运大礼包","独家礼包","游戏手杖","500京东卡"];
    turnplate.color=["#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF","#FFF4D6", "#FFFFFF"];

    var rotateFn=function () {
        $("#wheel_canvas").rotate(
            {
                angle:0,
                animateTo:1800,
                duration:8000,
                callback:function () {
                    alert(1800)
                }

            }
        )
    }
    $(".pointer").click(function () {
        rotateFn()
    })

    window.onload=function () {
        drawWheel();
    }

    function drawWheel() {
        var canvas=document.getElementById('wheel_canvas');
        if(canvas.getContext) {
            var arc = Math.PI / (turnplate.result.length / 2)
            var ctx = canvas.getContext("2d")
            ctx.clearRect(0,0,422,422);
            //strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式
            ctx.strokeStyle = "#FFBE04";
            for (var i = 0; i < turnplate.result.length; i++) {
                var angle = turnplate.startAngle + i * arc;
                ctx.fillStyle = turnplate.color[i]
                ctx.beginPath();
                ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
                ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
                ctx.closePath()
                ctx.fill()
                ctx.save()
            }
        }


    }
})