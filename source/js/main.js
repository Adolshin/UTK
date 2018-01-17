
//Аккордеон
var accTeam = function () {
  $('.catalog__link').click(
    function (e) {
      e.preventDefault();
      if ($(this).parent('.catalog__item').hasClass('catalog__item_active')) {
        $('.catalog__item').removeClass('catalog__item_active');
      } else {
        $('.catalog__item').removeClass('catalog__item_active');
        $(this).parent('.catalog__item').addClass('catalog__item_active');
      }
    });
};
accTeam();

//Фидбэк
$('.header__feedback').click(function (e) {
  e.preventDefault();
  // $(this).toggleClass('hamburger-menu_active');
  $('.overlay').addClass('overlay_active');
  $('body').addClass('body_block');
});
$('.feedback__cross').click(function (e) {
  e.preventDefault();
  $('.overlay').removeClass('overlay_active');
  $('body').removeClass('body_block');
});

//Выход асайда
$('.catalog__tab').click(function (e) {
  e.preventDefault(); 
  $('.content__left').toggleClass('content__left_active'); 
  $('.catalog__tab-img').toggleClass('catalog__tab-img_active');   
  
});
//Слайдер
var slider = function () {
  let list = $('.slider__list'),
    sliderItemsCount = $('.slider__item').length;
  sliderWidth = sliderItemsCount * 100 + "%";
  // Определение ширины слайдера в % в зависимости от количества слайдов
  setSliderWidth = function (element, width) {
    $(element).css(width, sliderWidth);
  }
  // анимация движения
  moveSlide = function (container, slideNum) {
    let items = $('.slider__item'),
      activeSlide = items.filter('.slider__item_active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      duration = 500;

    if (reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, () => {
        activeSlide.removeClass('.slider__item_active');
        reqItem.addClass('.slider__item_active');
      });
    }
  }
  setSliderWidth(list, 'width');
  // прокрутка при нажатии на стрелки вправо или влево
  $('.slider__arrow').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      container = $('.slider'),
      items = $('.slider__item', container),
      activeItem = items.filter('.slider__item_active'),
      existedItem, edgeItem, reqItem;

    if ($this.hasClass('slider__arrow_left')) { //вперед
      existedItem = activeItem.next();
      edgeItem = items.first();
    }
    if ($this.hasClass('slider__arrow_right')) { //назад
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSlide(container, reqItem);
  });
};
slider();