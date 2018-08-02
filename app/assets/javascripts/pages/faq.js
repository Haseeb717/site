$(document).on('ready page:load', function () {

  //Script mostra div da tab selecionada

  $(".faq-tab-link").click(function () {
    var targetId = $(this).attr("data-target");
    var target = $("#" + targetId);

    target.siblings().removeClass("active");
    target.toggleClass("active");

  });

  //Script Accordion Perguntas

  $('.accordion').on('click', '.accordion-title', function(e){
    var target = $(this).parent();

    target.toggleClass('active')
    .parent().find('.active').not(target)
    .removeClass('active');
  });

  $('.sub-accordion').on('click', '.sub-accordion-title', function(e){
    var target = $(this).parent();

    target.toggleClass('active')
    .parent().find('.active').not(target)
    .removeClass('active');
  })

});
