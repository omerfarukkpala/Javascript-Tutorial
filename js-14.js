/* Fonksiyon Uygulama */

var vize = prompt("Vize notunuzu giriniz");
var final = prompt("Final notunuzu giriniz");

function dersSonucu(vize, final) {
    var dersNotu = parseInt(vize * 0.4) + (final * 0.6);
    if (sonuc >= 50) {
        alert("Dersi geçtiniz" + dersNotu);
    } else { 
        alert("Dersi geçemediniz" + dersNotu);
        }
}

dersSonucu(vize, final);