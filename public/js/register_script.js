$.fn.ForceNumericOnly = function () {
  return this.each(function () {
    $(this).keydown(function (e) {
      var key = e.charCode || e.keyCode || 0;
      // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
      // home, end, period, and numpad decimal
      return (
        key == 8 ||
        key == 9 ||
        key == 13 ||
        key == 46 ||
        key == 110 ||
        key == 190 ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      );
    });
  });
};

$('input').on('keyup', function () {
  this.value = this.value.toUpperCase();
});

$('#phone').ForceNumericOnly();

$.ajax({
  type: 'GET',
  url: '/cities.json',
  success: function (response) {
    response.forEach((city) => {
      var o = new Option(city, city);
      $(o).html(city);
      $('#city').append(o);
    });
  },
});

$(document).ready(() => {
  $('.sidenav').sidenav();
});
