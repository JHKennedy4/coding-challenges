(function ($) {

    // on clicking the link:
    $('a').on('click', startFadeIn);

    // fade in 2s
    function startFadeIn (e) {
        e.preventDefault();
        e.stopPropagation();

        $(".fader").fadeIn(2000, waiter);
    }

    // wait 0.5s
    function waiter () {
        setTimeout(fadeout, 500);
    }

    // fade out 2s
    function fadeout () {
        $(".fader").fadeOut(2000, setFocus);
    }

    // focus input field
    function setFocus() {
        $('input').focus();
    }

}(jQuery));
