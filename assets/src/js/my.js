$(document).ready(function () {
  $('.ffl-wrapper').floatingFormLabels();

  $('.owl-carousel').owlCarousel({
    'items': 1,
    'stagePadding': 100,
    'navText': [
      '<img class="img-fluid" src="./img/arrow-left.svg" alt="">',
      '<img class="img-fluid" src="./img/arrow-right.svg" alt="">',
    ],
    'responsive': {
      768: {
        'stagePadding': 0,
      },
    },
  });
});