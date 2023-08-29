
//objects nesne yapısı bölüm2

// var player1={
//     name:'Faruk',
//     lastName:'Ömer',
//     age: 26,
//     childs:['Nando','Icardi','Lukaku'],
//     fullName:function(){
//         return player1.name+" "+player1.lastName;
//     } //nesnenin kendi yerine this kullanarak yapılması doğru olacaktır.
   
// }
// console.log(player1.fullName()); //Faruk Ömer
// // console.log(player1.childs[0]); //Nando



var player1={
    name:'Faruk',
    lastName:'Ömer',
    age: 26,
    childs:['Nando','Icardi','Lukaku'],
    fullName:function(){
        return this.name + " " + this.lastName;
    } //nesnenin kendi yerine this kullanarak yapılması doğru olacaktır.
   //this nesnenin kendisini ifade eder.
}
console.log(player1.fullName()); //Faruk Ömer

var fullName =function(){
    return this.name + " " + this.lastName;
}
// birbirinin aynısı fonksiyonu nesne içinde kullanmak istiyorsak