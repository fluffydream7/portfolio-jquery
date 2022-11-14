$(window).on('load', function () {
    // $('.outer').delay(2000).fadeOut(300)
    var count = 0;
    function add() {
        count++
        $('.outer .charge').text(count + '%')
        if (count === 100) {
            clearInterval(timer)
            $('.outer').delay(300).fadeOut(700)
            $('html,body').scrollTop(0)
            $('#menu li').eq(0).addClass('on')
                .siblings().removeClass('on')
        }
    }
    var timer = setInterval(add, 10)
})

// p.227
// 윈도우.scrollTop() : 브라우저의 수직 스크롤 이동 거리값을 구함
// 박스.offset().top : 브라우저 맨 위에서부터 박스까지의 거리값

$('#menu li a').on('click', function () {
    let lino = $(this).parent().index()
    let sectdist = $('section').eq(lino).offset().top
    $('html, body').animate({
        scrollTop: sectdist
    }, 500)
    return false
})

function graph(jumsu, cname, time) {
    let num = 0;
    let stop = setInterval(function () {
        num++
        if (num <= jumsu) {
            $(cname).css({
                height: num + '%'
            })
            $(cname).text(num + '%')
        } else {
            clearInterval(stop)
        }
    }, time)

}

var sect1, sect2, sect3, sect4;
function sect() {
    sect1 = $('section').eq(0).offset().top
    sect2 = $('section').eq(1).offset().top
    sect3 = $('section').eq(2).offset().top
    sect4 = $('section').eq(3).offset().top
}
sect()

$(window).resize(function () {
    sect()
})

$(window).on('scroll', function () {
    let sct = $(this).scrollTop()
    if (sct > 0 && sct < sect2) {
        $('#menu li').eq(0).addClass('on').siblings().removeClass('on')
        $('h1').removeClass('on1 on2 on3')
        $('.graphBox').removeClass('on')
        $('.myscore').css({
            height: '0%'
        })
        $('#sect2').removeClass('on')
    } else if (sct >= sect2 && sct < sect3) {
        $('#menu li').eq(1).addClass('on').siblings().removeClass('on')
        $('h1').addClass('on1').removeClass('on2 on3')
        if (!$('#sect2').hasClass('on')) {
            $('.graphBox').addClass('on')
            $('#sect2').addClass('on')
            graph(80, '.photo', 20)
            graph(70, '.illur', 23)
            graph(90, '.html', 26)
            graph(80, '.css', 29)
            graph(60, '.js', 32)
            graph(60, '.jq', 35)
        }

    } else if (sct >= sect3 && sct < sect4) {
        $('#menu li').eq(2).addClass('on').siblings().removeClass('on')
        $('h1').addClass('on2').removeClass('on1 on3')
    } else if (sct >= sect4) {
        $('#menu li').eq(3).addClass('on').siblings().removeClass('on')
        $('h1').addClass('on3').removeClass('on1 on2')
    }
})

$('section').on('mousewheel', function (e, delta) {
    // 위로 delta : 1
    // 아래로 delta : -1
    if (delta > 0) {
        var prevTop = $(this).prev().offset().top
        $('html, body').stop().animate({
            scrollTop: prevTop + 'px'
        }, 500)
    } else if (delta < 0) {
        var nextTop = $(this).next().offset().top
        $('html, body').stop().animate({
            scrollTop: nextTop + 'px'
        }, 500)
    }
})

$('.slideshow').flickity({
    wrapAround: true,
    autoPlay: 1500,
    cellAlign: 'left',
    contain: true,
});

// $('body').on('click', '.cover .close', function () {
//     $(this).parent().remove()
// })

// $('body').on('click', '.popBox, .popBox .close', function(){
//     $(this).remove()
// })

// $('body').on('click', '.popBox img', function(e){
//     e.stopPropagation()
// })
