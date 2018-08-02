$(window).load(function() {
    var windowWidth = $(window).width();
      if(windowWidth > 768){
        setTimeout(function(){
          skrollr.init({
            smoothScrolling: true,
            forceHeight: false,
          });
        }, 1500);
    };
});

$(document).on('ready page:load', function () {
  var swiper = new Swiper('.swiper-galeria-teatro', {
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,    
    breakpoints: {
      991: {
        slidesPerView: '1'
      },
      1500: {
        slidesPerView: '2'
      }
    }
  });
});


$(document).on('ready page:load', function () {

  //Script Data Target, para abertura de patrocinadores

  $(".link-patrocinador, .link-fechar-p").click(function () {
    var targetId = $(this).attr("data-target");
    var target = $("#" + targetId);

    target.toggleClass("active");

  });

  $(".link-empreendedor, .link-fechar-e").click(function () {
    var targetId = $(this).attr("data-target");
    var target = $("#" + targetId);

    target.toggleClass("active");

  });
});
function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: -23.593250, lng: -46.691667},


    zoom: 17
  });
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-23.593250, -46.691667),
    map: map,
    icon: 'icon-maps.png'
  });
}
