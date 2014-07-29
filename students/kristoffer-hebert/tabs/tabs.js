$( document ).ready(function() {
    $('nav a').on('click', function(e) {
        var anchor = $(this),
            target = $(anchor.attr("href")),
            tabs = $('div'),
            nav = $('nav a');
        nav.removeClass('active');
        anchor.addClass('active');
        tabs.removeClass('show');
        target.addClass('show');
    });
});