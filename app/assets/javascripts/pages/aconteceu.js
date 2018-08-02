$(document).on('ready page:load', function () {

    var galleryTop = new Swiper('.swiper-container-aconteceu', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
    });
    var galleryThumbs = new Swiper('.gallery-thumbs-aconteceu', {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true,

    });
    galleryTop.params.control = galleryThumbs;
    galleryThumbs.params.control = galleryTop;

});
