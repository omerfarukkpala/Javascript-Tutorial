//console.log(document.getElementById('myHeader'));

// var myElement = document.getElementById('myHeader');
// console.log(myElement);

// myElement.textContent = "New Junbotron";
// myElement.innerText = 'Yeni Junbotron';
// myElement.innerHTML = '<h3>Küçük Junbotron</h3>';

// console.log(myElement);

// myElement.style.backgroundColor = 'red';

// var myClass = document.getElementsByClassName('nav-link');
// console.log(myClass);

// console.log(myClass[1]);//2. indexi verir

// myClass[2].textContent = 'İletişim';
// myClass[2].style.borderBottom = '1px solid red';


var myElements = document.getElementsByTagName('h4');
console.log(myElements);

myElements[0].textContent = 'H4 Yeni Başlık';

for(var i =0 ; i<myElements.length; i++){
  myElements[i].textContent = 'H4 Yeni Başlık';
}

