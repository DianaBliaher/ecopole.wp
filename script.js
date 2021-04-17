$(function () {

  $(window).scroll(function () {
    $(".top-menu").toggleClass('border-show', $(this).scrollTop() > 0);
  })

  $('.product-item:not(.product-link)').on('click', function () {
    $('.product-dimmed').fadeIn(300);
    $(this).parent().find('.hide-block').fadeIn(300);
  })

  $('.product-dimmed, .hide-block .close').on('click', function () {
    $('.hide-block').fadeOut(200);
    $('.product-dimmed').fadeOut(200);
  })
  $('.menu-mobile .mobile-btn').on('click', function () {
    $(this).siblings('.menu-wrap').addClass('show');
    $('.menu-dimmed').fadeIn(300);
  })
  $('.menu-dimmed, .menu-mobile .close').on('click', function () {
    $('.menu-wrap').removeClass('show');
    $('.menu-dimmed').fadeOut(200);
  })
})