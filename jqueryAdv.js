$(document).ready(function() {
    var fix = $("#fix");
    $("#s4").css('opacity', 0);
    $(window).scroll(function() {

        var windowHeight = $(window).height();
        var windowScrollTop = $(window).scrollTop();
        var windowScrollBottom = windowHeight + windowScrollTop;
        //document.getElementById("fix").innerHTML = $(window).scrollTop();
        //fix.html(windowScrollBottom);

        var offsetS4 = $("#s4").offset();
        var offsetS4Top = offsetS4.top;

        fix.html(offsetS4Top);

        if (!$("#s4").hasClass('animation-complete')) {
            if (offsetS4Top < windowScrollBottom) {
                $("#s4").animate({ "opacity": 1 }, 3000).addClass('animation-complete');
            }
        }
    });
});
