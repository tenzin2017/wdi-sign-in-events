document.addEventListener('DOMContentLoaded', function() {
  var signIn = document.querySelector('.signin');
  var modal = document.querySelector('.modal');

  signIn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  var close = document.querySelector('.close');
  close.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  var submit = document.querySelector('.submit');
  var input = document.querySelectorAll('input');

  submit.addEventListener('click', function() {
    for(var i=0; i<input.length; i++) {
      input[i].className = 'error';
    }
  });
var input1 = input[0];
var input2 = input[1];
  input1.addEventListener('mousedown', function() {
    input1.classList.remove('error');
  });

  input2.addEventListener('mousedown', function(){
    input2.classList.remove('error');
  });
});
