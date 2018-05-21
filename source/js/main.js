// $('.hamburger-menu').click(function () {
//     $(this).toggleClass('hamburger-menu_active');
//     $('.overlay').toggleClass('overlay_open');
//     $('body').toggleClass('body_block');
//     $('.overlay__left').toggleClass('left');
//     $('.overlay__right').toggleClass('right');

// });
$('.header__link_feedback').click(function (e) {
    e.preventDefault();
    // $(this).toggleClass('hamburger-menu_active');
    $('.overlay__left').addClass('overlay__left_open');
    $('.overlay__right').addClass('overlay__right_open');
    $('.feedback').addClass('feedback_open');
    $('body').addClass('body_block');
});
$('.feedback__cross').click(function (e) {
    e.preventDefault();
    // $(this).toggleClass('hamburger-menu_active');
    $('.overlay__left').removeClass('overlay__left_open');
    $('.overlay__right').removeClass('overlay__right_open');
    $('.feedback').removeClass('feedback_open');
    $('body').removeClass('body_block');
});
$('.header__link_rating').click(function (e) {
    e.preventDefault();
    // $(this).toggleClass('hamburger-menu_active');
    $('.overlay__left').addClass('overlay__left_open');
    $('.overlay__right').addClass('overlay__right_open');
    $('.rating').addClass('rating_open');
    $('body').addClass('body_block');
});
$('.rating__cross').click(function (e) {
    e.preventDefault();
    // $(this).toggleClass('hamburger-menu_active');
    $('.overlay__left').removeClass('overlay__left_open');
    $('.overlay__right').removeClass('overlay__right_open');
    $('.rating').removeClass('rating_open');
    $('body').removeClass('body_block');
});
