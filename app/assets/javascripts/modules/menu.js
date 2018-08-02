$(document).on('ready', function () {
  if($('.header').hasClass('icon-larger')) {
    $('.navbar-brand').addClass('scroll');

    $(window).scroll(function(){
      var fromTopPx = 50;
      var scrolledFromtop = $(window).scrollTop();

      if(scrolledFromtop > fromTopPx){
        $('.navbar-brand').removeClass('scroll');
      } else{
        $('.navbar-brand').addClass('scroll');
      }
    });
  } else {
    $('.navbar-brand').removeClass('scroll');
  }

  //Script Buscar
  $('.menu-link-busca').click(function () {
    $('.box-menu').slideUp();
    $('.link-menu').removeClass('active');
    $('.box-buy-ticket').slideUp();
    $('.box-busca').slideToggle('slow');
  });
  $('.link-menu').click(function () {
    $('.link-menu').toggleClass('active');
    $('.box-buy-ticket').slideUp();
    $('.box-busca').slideUp();
    $('.box-menu').slideToggle('slow');
  });

});
