// Bu dersimizin konusu kullanıcıdan input alarak , bunu ekrana yazdıran 
//ufak bir Pencere uygulaması olacak.bunların hepsinide aynı satırda Kisi bilgisi olarak
//verelim.


var firstName,secondName,fullName;

firstName = prompt("Adınız nedir: ");

secondName= prompt("Soyadınız nedir?: ");

fullName= firstName + " " + secondName;

alert ("Merhaba, " + fullName);
