/* Switch Case Yapısı 
switch(kontrol edilecek durum){

    case 1:
        kod çalıştır;
        break;
    case 2:
        kod çalıştır;
        break;
    .....

    default:
        kod çalıştır;
        break;


}

*/ 
//meslek kontrol ediyoruz.
var  job=prompt("Doktor");

switch(job){

    case "Öğretmen":
        console.log("Ben bir öğretmenim.");
        break;S

    case "asker":
        console.log("Ben bir askerim.");
        break;
        
    case "Doktor":
        console.log("Ben bir doktorum.");
        break;
        
    default:
        console.log("Ben bir işsizim.");

}

