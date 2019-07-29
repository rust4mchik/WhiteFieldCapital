jQuery(document).ready(function ($) {

  // Mobile menu expansion
  $('#trigger-mob-nav').on('click', function () {
    $(this).toggleClass('active');
    $('.header-bottom__nav').toggleClass('d-block');
  });

  // Deleting classes of the mobile menu, if the window width is more than 768px to avoid bugs
  $(window).on('resize', function () {
    const scrollbarWidth = 17;
    if ($(window).width() >= (768 - scrollbarWidth)) {
      $('#trigger-mob-nav').removeClass('active');
      $('.header-bottom__nav').removeClass('d-block');
    }
  });

  // Adding a class when scrolling
  $(window).on('load', function () {
    let scroll =  $(window).scrollTop() >= 50 ? $('.header').addClass('scroll') : $('.header').removeClass('scroll');
  }).on('scroll', function () {
    let scroll =  $(window).scrollTop() >= 50 ? $('.header').addClass('scroll') : $('.header').removeClass('scroll');
  });

  // Sending letter
  $('#contact-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "php/mail.php",
      data: $(this).serialize()
    }).done(function () {
      $('#contact-form button[type="submit"]').after('<div class="alert alert-success"><strong>Success!</strong> Your message is sent.</div>');
      $('#contact-form').trigger('reset');
    });
    return false;
  });

});