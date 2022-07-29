/* JAVASCRIPT OPERATION */
// Aritmetik Operatörler + - * / %

var x =5;
console.log(x);

x += 6; //Toplama islemini bu şekilde gosterebiliriz.
console.log(x);

x -= 4; //Cikarma islemini bu şekilde gosterebiliriz.       
console.log(x);

x *= 3; //Carpma islemini bu sekilde gosterebiliriz.
console.log(x);

x /= 7; //Bölme islemini bu sekilde gosterebiliriz.

console.log(x);

var x =4 * 3* 5 ;
console.log(x);


var x =5;
var y =6;

if (x==y){
    // Her zaman doğru olur.
    console.log("x ve y eşittir.");
}
else{
    alert("x ve y eşit değil");
}

/*x ve ynin esitligini degerlendiren if-else yapısı yaptık.Eger x ve y sayıca esitse
 İf bloguna,degıllerse de else bloguna girecektir.
 (==) ile gosterilen cıft esıttır sadece sayıları atar
 (===) ile gosterılen uc esıttır ise Veri tiplerini ve sayıların esıtlıgını ınceler. */


 //Modulus Operator %

 var year=2022;
var kalan = year % 5;
console.log(kalan);

var kalan = x % 6; //Mod operatorumuz bize bolundugu sayıdan kalan sonucu verir

console.log(kalan);

//Increment *****************************************************************************************

var x=x+1;
x +=1;
x++;
++x;


var x =4;
console.log(x++);
console.log(x);

//decrement *****************************************************************************************
x--; //x ten bir çıkarttık  ve degerını 6 iken 5 yaptık.
console.log(--x);//Onemlı olan eksilerin ve artıların yeri goruldugu gibi burda eksi x'in onunde 
//yani yapılan bu azaltma islemi bu satıra dahıl oluyor x degerı 5 yazacaktır ekrana.

console.log(x);//ekrana 5 yazdırır.
console.log(x++);//x in degerını bir sonrakı yazdırma ıslemı ıcın 1 arttırmıs olduk fakat değeri 5 yaptık.

console.log(x);//1 oncekı satırda arttırılma ıslemı bu satıra devretti artık x'in degerı 6.

console.log(x++);//x degeri 5 olduğu için x'in degeri 6 yazacaktır.