// var myElement = document.querySelector(' button');

// myElement.onclick = function() {
//   alert('hello');
// };

var myElement =document.querySelector('button');
myElement.addEventListener('click', function1);
myElement.addEventListener('click', function2);

function function1() {
  alert('hello');
}

function function2() {
  alert('world');
}
