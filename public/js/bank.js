$('input').on('keyup', function() {
	this.value = this.value.toUpperCase();
});
var a = ['search', 'delete'];
var i = 1;
$(document).ready(function() {
	$('#hider').click(function() {
		$('#searcher').toggle(400);
		$(this).html('<i class= "material-icons" >' + a[i++ % 2] + '</i >');
	});
	$('.sidenav').sidenav();
});
