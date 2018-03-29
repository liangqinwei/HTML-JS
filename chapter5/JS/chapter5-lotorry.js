$(function () {
    var angleData=0;
    var turnplate = {
        result: [],
        color: [],
        outsideRadius: 195,
        textRadius: 155,
        insideRadius: 68,
        startAngle: 0,
        bRotate: false
    }
    turnplate.result = ["50M免费流量包", "30M流量包", "20元流量包", "100京东卡", "谢谢参与", "特别周边", "幸运大礼包", "独家礼包", "游戏手杖", "500京东卡"];
    turnplate.color = ["#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF", "#FFF4D6", "#FFFFFF"];
    turnplate.data=[0,36,72,108,144,180,216,252,288,324];

    var isload=false;


    function rnd(n, m){
        var random = Math.floor(Math.random()*(m-n+1)+n);
        return random;

    }

    var rotateTimeOut = function (){
        $('#wheelcanvas').rotate({
            angle:0,
            animateTo:2160,
            duration:8000,
            callback:function (){
                alert('网络超时，请检查您的网络设置！');
            }
        });
    };

    function getData(qdata,url) {
        var lotoryName;
        var index;
        $.ajax({
            url: url,
            type: 'get',
            async: true,
            cache: false,
            dataType: "json",
            data: qdata,
            success: function (data) {
                var list=data.data
                lotoryName=list.city;
                for(var j=0;j<turnplate.result.length;j++){
                    if(turnplate.result[i]==lotoryName){
                        index=i;
                        return index;
                    }
                }
            }, error: function (error) {
                console.log(error);
            }
        });
    }

    var rotateFn = function () {
        $("#wheel_canvas").stopRotate();
        $("#wheel_canvas").rotate(
            {
                angle: 0,
                animateTo: 1800,
                duration: 3000,
                callback: function () {
                    alert();
                    turnplate.bRotate=!turnplate.bRotate;
                }

            }
        )
    }
    $(".pointer").click(function () {
        if(turnplate.bRotate){
            return;
        }
        turnplate.bRotate=!turnplate.bRotate;
        rotateFn()
    })

    window.onload = function () {
        drawWheel();
    }

    function drawWheel() {
        var canvas = document.getElementById('wheel_canvas');
        if (canvas.getContext) {
            var arc = Math.PI / (turnplate.result.length / 2)
            var ctx = canvas.getContext("2d")
            ctx.clearRect(0, 0, 422, 422);
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

                ctx.fillStyle="#E5302F";
                var text=turnplate.result[i];
                var line_height=17;
                ctx.translate(211+Math.cos(angle+arc/2)*turnplate.textRadius,211+Math.sin(angle+arc/2)*turnplate.textRadius)
                ctx.rotate(angle+arc/2+Math.PI/2)
                ctx.fillText(text, -ctx.measureText(text).width / 2, 0);

                if(text.indexOf("卡")>0){
                    img=document.getElementById('shan-img');
                    img.onload=function () {
                        ctx.drawImage(img,-15,10)
                    }
                    ctx.drawImage(img,-15,10)
                }

                ctx.restore()

            }
        }


    }





//     // 判断横竖屏
//     var utils = {
//         debounce: function (func, delay) {
//             var timer = null;
//             return function () {
//                 var context = this,
//                     args = arguments;
//                 clearTimeout(timer);
//                 timer = setTimeout(function () {
//                     func.apply(context, args);
//                 }, delay);
//             }
//         }
//     }
//
//     function detectOrient() {
//             sw = window.screen.width;
//             sh = window.screen.height;
//         if (sw>sh){
//             //横屏
//            return false
//         }
//         else {
//             //竖屏
//             return true
//         }
//     }
//
//
// // 3.函数去抖处理
//     window.addEventListener('orientationchange', function (event) {
//         window.onresize = utils.debounce(detectOrient, 300);
//         t=detectOrient()
//         if (window.orientation == 180 || window.orientation==0||t===true ) {
//             alert("竖屏");
//         }
//         if( window.orientation == 90 || window.orientation == -90||t===false ) {
//             alert("横屏");
//
//         }
//     });

})