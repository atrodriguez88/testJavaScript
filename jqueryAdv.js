$(document).ready(function() {
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
});
