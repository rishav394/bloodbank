$('input').on('keyup', function () {
  this.value = this.value.toUpperCase();
});
var a = ['search', 'delete'];
var i = 1;
$(document).ready(function () {
  new URL(window.location.href).searchParams.forEach((x, y) => {
    if (y != 'rh') document.getElementsByName(y).forEach((p) => (p.value = x));
  });
  $('#hider').click(function () {
    $('#searcher').toggle(400);
    $(this).html('<i class= "material-icons" >' + a[i++ % 2] + '</i >');
  });
  $('.sidenav').sidenav();
});
