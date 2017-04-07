$(document).ready(function() {
    // Start Scroll
    var fix = $("#fix");

    var windowHeight = $(window).height();
    var windowScrollTop = $(window).scrollTop();
    var windowScrollBottom = windowHeight + windowScrollTop;

    $.fn.scrollAppeart = function(pos, time) {

        return this.each(function() {

            var offsetS4 = $(this).offset();
            var offsetS4Top = offsetS4.top;

            if (!$(this).hasClass('hidden')) {

                if (pos == "right") {
                    $(this).css({
                        'opacity': 0,
                        'margin-right': '700px',
                    });
                } else {
                    $(this).css({
                        'opacity': 0,
                        'margin-right': '-700px'
                    });
                }
                $(this).addClass('hidden');
            }
            if (!$(this).hasClass('anima')) {
                if (offsetS4Top < windowScrollBottom) {
                    $(this).animate({ "opacity": 1, "margin": 0 }, time).addClass('anima');
                }
            }
        });
    }

    $(window).scroll(function() {

        windowHeight = $(window).height();
        windowScrollTop = $(window).scrollTop();
        windowScrollBottom = windowHeight + windowScrollTop;
        //document.getElementById("fix").innerHTML = $(window).scrollTop();
        fix.html(windowScrollBottom);
        $("#s4").scrollAppeart("right", 1000);
        $("#s5").scrollAppeart("left", 1000);
        $("#s3 img").scrollAppeart("right", 1000);
    });
    //End Scroll

    //Star Menu
    var btn = $(".btn-menu span");
    var list = $(".main-menu ul");
    $(btn).click(function(event) {
        $(list).slideToggle('fast');
    });
    //End Menu

    //Dynamically load images
    $("#s1, #s2").each(function(i) {
        $(this).append('<strong>Thank ' + (i + 1) + '</strong>');
        $(this).prepend("<img  src='img/" + (i + 1) + ".png' width='43' height = '75'/>");
    });

    //Directionar 
    $(".main-menu ul li a").click(function() {
        var rel = $(this).attr('rel');
        /*var top = $("#" + rel).offset().top;
        alert(top);*/
        $('html, body').animate({
            scrollTop: $("#"+rel).offset().top
        }, 900, function() {
            //window.location.rel = top;
        });

    });
});
