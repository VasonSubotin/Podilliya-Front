$(document).ready(function () {
    $('.ffl-wrapper').floatingFormLabels();

    $('.owl-carousel').owlCarousel({
        'items': 1,
        'stagePadding': 100,
        'startPosition': 1,
        'center': true,
        'responsive': {
            1025: {
                'items': 5,
                'startPosition': 2,
                'stagePadding': 0,
            },
            768: {
                'items': 3,
                'startPosition': 1,
                'stagePadding': 0,
            },
        },
        onDragged: changeClass,
        onInitialized: changeClass,
    });
});

function changeClass(event) {
    var $element = $(event.target),
    centerElement = $element.find('.owl-item.center');

    $element.find('.owl-item').removeClass('first_active, middle_active');

    if ($(window).width() >= 768) {
        if ($(centerElement).prev().hasClass('active')) $(centerElement).prev().addClass('middle_active');
        if ($(centerElement).next().hasClass('active')) $(centerElement).next().addClass('middle_active');
        // if ($(centerElement).prev().prev().hasClass('active')) $(centerElement).prev().prev().addClass('first_active');
        // if ($(centerElement).next().next().hasClass('active')) $(centerElement).next().next().addClass('first_active');
    }

}