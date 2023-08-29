
//objects nesne yapısı bölüm2

var player1={
    name:'Faruk',
    lastName:'Ömer',
    age: 26,
    childs:['Nando','Icardi','Lukaku'],
    fullName:function(){
        return player1.name+" "+player1.lastName;
    }
   
}
console.log(player1.fullName()); //Faruk Ömer
// console.log(player1.childs[0]); //Nando