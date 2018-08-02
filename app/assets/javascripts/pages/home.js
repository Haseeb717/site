$(document).on('ready page:load', function () {

  //////* Slider Destaque Utilizando SWIPER *//////

  var swiper = new Swiper('.swiper-container-big', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    parallax: true,
    autoplay: 9000,
    breakpoints: {
   		991: {
	    	direction: 'horizontal'
	    }
    }
  });
  console.log(swiper);

  //////* Gerador de Indicators para o Carousel do Bootstrap *//////
    var bootCarousel = $(".carousel");
    bootCarousel.append("<ol class='carousel-indicators'></ol>");
    var indicators = $(".carousel-indicators");
    bootCarousel.find(".carousel-inner").children(".item").each(function(index) {

        (index === 0) ?
        indicators.append("<li data-target='#slider-secundario-box' data-slide-to='" + index + "' class='active'></li>") :
        indicators.append("<li data-target='#slider-secundario-box' data-slide-to='" + index + "'></li>");
    });


  //////* Slider Secundário Utilizando o Carousel do Bootstrap+Animate *//////

  //Function para animar a caption dos Sliders
	function doAnimations( elems ) {

		//Cache do evento da animação em uma variable
		var animEndEv = 'webkitAnimationEnd animationend';

		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}

	//Variables no load da page
	var $myCarousel = $('#slider-secundario-box'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

	//Inicializa carousel
	$myCarousel.carousel({
    interval: 13000
  });
 
  var sync1 = $("#slider-comercial");
  var sync2 = $("#sync-comercial");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: false,
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
  });
 
  sync2.owlCarousel({
    items : 8,
    itemsDesktop      : [1199,10],
    itemsDesktopSmall     : [979,10],
    itemsTablet       : [768,8],
    itemsMobile       : [479,4],
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    }
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $("#sync-comercial")
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($("#sync-comercial").data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $("#sync-comercial").on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }

	//Animate captions no primeiro slide no load da page
	doAnimations($firstAnimatingElems);


	//Anima os outros sliders no slide do carousel
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});

});
