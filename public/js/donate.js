var input = document.querySelector('input'); // get the input element
input.addEventListener('input', resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  if (this.value > 5) {
    this.value = 5;
  }
  if (this.value.length >= 1) this.style.width = this.value.length + 0.5 + 'ch';
}

$(document).ready(function () {
  $('.sidenav').sidenav();
});
