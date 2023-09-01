var i =0;
var images = ['https://picsum.photos/id/247/400/200',
'https://picsum.photos/id/237/400/200',
'https://picsum.photos/id/217/400/200',
];

var duration = 2000;

function slideImage(){ 

  document.slide.src = images[i];

  if(i < images.length -1){
    i++;
  }else {
    i = 0;
  }
  
  setTimeout("slideImage()", duration);
}

window.onload = slideImage;//onload oldugunda calisacak