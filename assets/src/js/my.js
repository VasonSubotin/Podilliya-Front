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

window.addEventListener('scroll', stickyHeader);
document.querySelector('.js_open_language').addEventListener('click', toggleLanguage);
$(document).click(function (e){
  var div = $(".languages, .js_open_language");
  if (!div.is(e.target)
      && div.has(e.target).length === 0) {
    $('.languages').removeClass('opened');
  }
});

function stickyHeader() {
  var offsetY = window.pageYOffset;
  var $header = document.querySelector('.js_sticky_header');

  console.log(offsetY, $header);

  if (offsetY > 0) {
    $header.classList.add('sticky');
    document.querySelector('.btn-contact').classList.remove('btn-secondary');
    document.querySelector('.btn-contact').classList.add('btn-primary');
  } else {
    $header.classList.remove('sticky');
    document.querySelector('.btn-contact').classList.add('btn-secondary');
    document.querySelector('.btn-contact').classList.remove('btn-primary');
  }
}

function toggleLanguage() {
  $('.languages').toggleClass('opened');
}