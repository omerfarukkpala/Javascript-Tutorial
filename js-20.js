//3 kitaptan hangisinin okunup hangisinin okunmadığı ile ilgili bir ugulama yapalım.
var library = [ 
  // kitaplar hakkında bilgileri tutan objeler
  {
    title: 'İnce Memed',
    author:'Yaşar Kemal',
    status: true
  },
  {
    title: 'Kuyucaklı Yusuf',
    author:'Sebahattin Ali',
    status: true

  },
  {
    title: 'Memleketimden İnsan Manzaraları',
    author:'Nazım Hikmet Ran',
    status: false
  } ];

 // okunan okunmayan kitaplar hakkında bilgiii veren fonksiyon
 
 for (var i=0; i<library.length; i++) {
  //kitabın okunup okunmadığına dair geri dönüş yapsım istiyorum.
   var book = library[i].title + " yazarı " + library[i].author + " . ";
    if (library[i].status) {
      //statüse baksın ve true ise okundu false ise okunmadı yazsın.
      console.log(book + "Okundu.");
    } else {
      console.log(book + "Okunmadı.");
    }
 }
 

