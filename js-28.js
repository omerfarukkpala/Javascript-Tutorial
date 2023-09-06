window.onload = function() {

  var beforeButton = document.querySelector('#beforeButton');
  beforeButton.addEventListener('click', function() {
  var newNode =document.createElement("p");
  newNode.innerHTML = "<strong>I am new</strong>"; 
  newNode.setAttribute("id", "myNode"); 

  var myArray =document.getElementsByClassName("col-md-4");
  myArray[0].insertBefore(newNode, myArray[0].firstElementChild);

  });
}