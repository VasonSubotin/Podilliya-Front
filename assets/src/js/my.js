$(document).ready(function () {
  $('.ffl-wrapper').floatingFormLabels();

  $('.owl-carousel').owlCarousel({
    'items': 1,
    'startPosition': 1,
    'stagePadding': 70,
    'center': true,
    'navText': [
      '<img class="img-fluid" src="./img/arrow-left.svg" alt="Arrow left">',
      '<img class="img-fluid" src="./img/arrow-right.svg" alt="Arrow right">',
    ],
    'responsive': {
      576: {
        'items': 3,
        'startPosition': 2,
        'stagePadding': 50,
      },
      768: {
        'items': 3,
        'startPosition': 2,
        'stagePadding': 50,
        'nav': true,
      },
      992: {
        'items': 3,
        'startPosition': 2,
        'nav': true,
        'stagePadding': 100,
      },
    },
  });
});