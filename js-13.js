
/*
Fonksiyonlar  Uygulama
*/

//cevre=2 * 3.14 * r;

var yaricap =prompt("Yarıçapı giriniz");
 
function daireCevreAlan(yaricap){

    var cevre = parseInt(2 * Math.PI * yaricap);
    alert("Daire çevresi: " + cevre);

    var alan = parseInt(Math.PI * Math.pow(yaricap,2));
    alert("Daire alanı: " + alan);

}

daireCevreAlan(yaricap);