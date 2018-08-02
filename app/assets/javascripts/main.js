function formPartnershipContactValidate() {
  $("#form-partnership-contact").validate({
    debug: true,
    rules: {
      "partnership_contact[email]": {required: true, email: true},
      "partnership_contact[company_name]": {required: true },
      "partnership_contact[responsible_person]": {required: true},
      "partnership_contact[observations]": {required: true},
      "partnership_contact[phone]": {required: true}
    },
    messages: {
      "partnership_contact[email]": {
        required: "Email é obrigatório.",
        email: "E-mail no formato inválido."
      },
      "partnership_contact[responsible_person]": {
        required: "Nome do responsável é obrigatório."
      },
      "partnership_contact[company_name]": {
        required: "Nome da empresa é obrigatório."
      },
      "partnership_contact[observations]": {
        required: "Observação é obrigatório"
      },
      "partnership_contact[phone]": {
        required: "Telefone é obrigatório."
      }
    },
    // make sure error message isn't displayed
    errorPlacement: function(error, element) {
      element.closest('div').find('.help-block').html($(error).text())
    },
    highlight: function (element) {
      div = $(element).closest('div');
      div.addClass('has-error');
    },
    unhighlight: function (element) {
      div = $(element).closest('div');
      div.removeClass('has-error');
      div.find('.help-block').html('')
    }
  });
}
$(function() {
  $('.cta-buy').click(function(){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.link-menu').removeClass('active');
    $('.box-menu').slideUp();
    $('.box-busca').slideUp();
    $('.box-buy-ticket').slideToggle();
  });

  $('.content').click(function(){
    $('.cta-buy').removeClass('active');
    $('.link-menu').removeClass('active');
    $('.box-buy-ticket').slideUp();
    $('.box-menu').slideUp();
    $('.box-busca').slideUp();
  });
  
  $('footer').click(function(){
    $('.cta-buy').removeClass('active');
    $('.link-menu').removeClass('active');
    $('.box-buy-ticket').slideUp();
    $('.box-menu').slideUp();
    $('.box-busca').slideUp();
  });

});

function formBusinessContactValidate() {
  $("#form-business-contact").validate({
    debug: true,
    rules: {
      "business_contact[email]": {required: true, email: true},
      "business_contact[company_name]": {required: true },
      "business_contact[number_participants]": {required: true},
      "business_contact[responsible_person]": {required: true},
      "business_contact[observations]": {required: true},
      "business_contact[date]": {required: true},
      "business_contact[phone]": {required: true},
      "business_contact[kind_event_id]": { required: true }

    },
    messages: {
      "business_contact[email]": {
        required: "Email é obrigatório.",
        email: "E-mail no formato inválido."
      },
      "business_contact[responsible_person]": {
        required: "Nome do responsável é obrigatório."
      },
      "business_contact[company_name]": {
        required: "Nome da empresa é obrigatório."
      },
      "business_contact[number_participants]": {
        required: "Número de participantes é obrigatório."
      },
      "business_contact[observations]": {
        required: "Observação é obrigatório"
      },
      "business_contact[date]": {
        required: "Data é obrigatório."
      },
      "business_contact[phone]": {
        required: "Telefone é obrigatório."
      },
      "business_contact[kind_event_id]": {
        required: "Tipo de evento é obrigatório"
      }
    },
    // make sure error message isn't displayed
    errorPlacement: function(error, element) {
      element.closest('div').find('.help-block').html($(error).text())
    },
    highlight: function (element) {
      div = $(element).closest('div');
      div.addClass('has-error');
    },
    unhighlight: function (element) {
      div = $(element).closest('div');
      div.removeClass('has-error');
      div.find('.help-block').html('')
    }
  });
}
function formContactValidate() {
  $("#form-contact").validate({
    debug: true,
    rules: {
      "contact[email]": {required: true, email: true},
      "contact[name]": {required: true },
      "contact[message]": {required: true},
      "contact[subject_id]": { required: true }

    },
    messages: {
      "contact[email]": {
        required: "Email é obrigatório.",
        email: "E-mail no formato inválido."
      },
      "contact[name]": {
        required: "Name é obrigatório."
      },
      "contact[message]": {
        required: "Mensagem é obrigatório."
      },
      "contact[subject_id]": {
        required: "Assunto é obrigatório"
      }
    },
    // make sure error message isn't displayed
    errorPlacement: function(error, element) {
      element.closest('div').find('.help-block').html($(error).text())
    },
    highlight: function (element, errorClass, validClass) {
      div = $(element).closest('div');
      div.addClass('has-error');
    },
    unhighlight: function (element, errorClass, validClass) {
      div = $(element).closest('div');
      div.removeClass('has-error');
      div.find('.help-block').html('')
    }
  });
}

function formNewsletterValidate() {
  $("#form-newsletter").validate({
    debug: true,
    rules: {
      "newsletter[email]": {required: true, email: true}
    },
    messages: {
      "newsletter[email]": {
        required: "Email é obrigatório.",
        email: "E-mail no formato inválido."
      }
    },
    // make sure error message isn't displayed
    errorPlacement: function(error, element) {
      element.closest('div').find('.help-block').html($(error).text())
    },
    highlight: function (element) {
      div = $(element).closest('div');
      div.addClass('has-error');
    },
    unhighlight: function (element) {
      div = $(element).closest('div');
      div.removeClass('has-error');
      div.find('.help-block').html('')
    }
  });
}


$(document).on('ready page:load', function () {
  var myCustomValidate = new CustomValidate();
  myCustomValidate.execute('#form-contact');
  myCustomValidate.execute('#form-newsletter');
  myCustomValidate.execute('#form-business-contact');
  myCustomValidate.execute('#form-partnership-contact');

  formNewsletterValidate();
  formContactValidate();
  formBusinessContactValidate();
  formPartnershipContactValidate();


  //Smooth scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 185
        }, 1000);
        return false;
      }
    }
  });

  //Parallax Sobre
  $('.parallax').parallax({
      speed : 0.55
    });

  //Datepicker Empresarial
  $('#datetimepicker').datepicker({
    format: "dd/mm/yyyy",
    language: "pt-BR"
  });

  $("#box-galeria").owlCarousel({
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsMobile: [700,1],
      navigation: true,
      navigationText: [
      "<span class='pagination-prev'></span>",
      "<span class='pagination-next'></span>"
      ],
  });

  $(".fancybox").fancybox({
    padding: 0,
    margin: [100, 30, 0, 30],
    loop: false
  });


  var NineDigitsMaskBehavior = function (val) {
    return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
  },
  nineDigitsOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(NineDigitsMaskBehavior.apply({}, arguments), options);
      }
  };
  $('.phone-format').mask(NineDigitsMaskBehavior, nineDigitsOptions);

  $('input[type=radio][name=comercial]').change(function() {
      if (this.value == 'evento') {
          $("#form_business").addClass('active');
          $("#form_partnership").removeClass('active');
      }
      else if (this.value == 'parceria') {
          $("#form_partnership").addClass('active');
          $("#form_business").removeClass('active');
      }
  });

});

// Conversion Google

if(document.getElementById("form-business-contact").submit()){
  window.addEventListener('load',function(){
  if(window.location.href.indexOf('/comercial')!=-1)
  {
    var x = 0;
    var myVar = setInterval(function(){
      if(x == 0){
        if(jQuery('.status-message:first').attr('style') == "")
        {
        gtag('event', 'conversion', {'send_to': 'AW-820609263/o8PQCL-JgH4Q74GmhwM'});  
          
          clearInterval(myVar);
          x = 1;
        }
      }
    }, 1000);
    }
  });
}
if(document.getElementById("form-partnership-contact").submit()){
  window.addEventListener('load',function(){
  if(window.location.href.indexOf('/comercial')!=-1)
  {
    var x = 0;
    var myVar = setInterval(function(){
      if(x == 0){
        if(jQuery('.status-message:first').attr('style') == "")
        {
        gtag('event', 'conversion', {'send_to': 'AW-820609263/o8PQCL-JgH4Q74GmhwM'});  
          
          clearInterval(myVar);
          x = 1;
        }
      }
    }, 1000);
    }
  });
}
