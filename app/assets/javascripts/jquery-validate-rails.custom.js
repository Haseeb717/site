function CustomValidate() { }

CustomValidate.prototype.execute = function (selector) {
  var $btnSubmit = $('input[type="submit"]', $(selector));

  return $(selector).bind('ajax:error', function(event, jqxhr){
    $(selector).render_form_errors( $.parseJSON(jqxhr.responseText) );
  }).bind('ajax:success', function(){
    $(selector).clear_form();
    $(selector).success();

    $btnSubmit.removeAttr('disabled');
    $btnSubmit.attr('value', 'Enviar');
    $btnSubmit.css('cursor', 'pointer');
  }).bind('ajax:send', function(){
    $btnSubmit.attr('disabled', 'disabled');
    $btnSubmit.attr('value', 'Enviando...');
    $btnSubmit.css('cursor', 'progress');
    //console.log(btnSubmit);
  });
};

(function($) {
  /*
  * Função retorna uma input normal em um form Rails
  * Em caso de select, é necessário adicionar o sufixo '_id' no valor do campo 'name'
  */
  function getFieldFromName(field, model) {
    var defaultInput =  $('[name="' + model + '[' + field + ']"]');
    return defaultInput.length !== 0 ? defaultInput : $('[name="' + model + '[' + field + '_id]"]');
  }

  $.fn.clear_form = function(){
    // clear form input elements
    this.find('input[type="text"]').val('');
    this.find('input[type="email"]').val('');
    this.find('input[type="password"]').val('');
    this.find('input[type="number"]').val('');
    this.find('select').val($("select option:first").val());
    this.find('textarea').val('');

    // clear error state
    this.clear_previous_errors();
  };

  $.fn.render_form_errors = function(errors){
    this.clear_previous_errors();
    model = this.data('model');
    // show error messages in input form-group help-block
    $.each(errors, function(field, messages){
      $input = getFieldFromName(field, model)
      $input.closest('div').addClass('has-error').find('.help-block').html( messages.join(' & ') );
    });
  };

  $.fn.clear_previous_errors = function(){
    $('.has-error', this).each(function(){
      $('.help-block', $(this)).html('');
      $(this).removeClass('has-error');
    });
  }

  $.fn.success = function() {
    $('.status-message', this).show();
  }
}(jQuery));
