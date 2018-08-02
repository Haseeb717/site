$(document).on('ready page:load', function () {

  var swiper = new Swiper('.swiper-calendar', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 4,
    spaceBetween: 30,
  });

  $('.date-box').click(function (){
    $(this).parent().siblings().children().removeClass('show')
    $(this).siblings().toggleClass('show');
  });
  
});
