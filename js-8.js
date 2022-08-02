
/* IF ELSE ve Mantıksal Operatörler Uygulama */

var a= 4;
var b= -3;
var c= 6;

if(a>b && a>c){

    if( b>c){
        alert(a+  " "+ b +" "+ c);

    }else {
        alert(a+  " "+ c +" "+ b);

    }
}

else if(b>a && b>c){
    if(a>c){
        alert(b+  " "+ a +" "+ c);

    }else {
        alert(b+  " "+ c +" "+ a);

    }
}

else if(c>a && c>b){
    if(a>b){
        alert(c+  " "+ a +" "+ b);

    }else {
        alert(c+  " "+ b +" "+ a);

    }
}
