/*====================================
                Blog
====================================*/

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


/*====================================
                Blog
====================================*/

// post carousel js //
$('.active-post-carusel').owlCarousel({
    items: 3,
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 1
        },
        768: {
            items: 1
        },
        800: {
            items: 2
        },
        1200: {
            items: 3
        },
        1380: {
            items: 3
        }
    }
});


/*====================================
                Home
====================================*/

$("video").prop('muted', true);

$(".mute-video").click(function () {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false);
        $(this).addClass('unmute-video');

    } else {
        $("video").prop('muted', true);
        $(this).removeClass('unmute-video');
    }
    console.log($("video").prop('muted'))
});


/*====================================
                Contact
====================================*/

$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label');
                }
            } else if (e.type == 'blur') {
                if ($this.val() == '') {
                    $parent.addClass('js-hide-label');
                } else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } else if (e.type == 'focus') {
                if ($this.val() !== '') {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    }
});