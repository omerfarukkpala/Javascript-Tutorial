
/*Javascript Fonksiyon Yapısı 

SCOPE

*/ 

var x ; //global variable

function samplefunction(){
    var x =05; //local variable
    console.log(x);
}
 
samplefunction();

console.log(x);


function fonk1(){
   //kodlar
}

if (x>7){
  //.....  fonk1();
}

var fonk2=function(){
    //kodlar
}