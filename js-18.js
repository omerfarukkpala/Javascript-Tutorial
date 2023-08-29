//
// object nesne yapısı

var MyArray=['Ömer','Pala','Faruk'];
console.log(MyArray[0]);

var player1={
    name:'Can',
    lastName:'Ömer',
    age: 35,
    goal: 7
}

console.log(player1.name);

console.log(player1.age);


var variable1 ='name';

console.log(player1[variable1])


player1.age=36;

console.log(player1);

player1['goal']=15;

console.log(player1);


var player2=new Object(); //yeni bir nesne oluşturduk
player2.name='Anıl';
player2.lastName='AE';
player2.age=34;
player2.goal=27;

console.log(player1); //player1 ve player2 aynı nesne yapısına sahip nesnenin tamamını göster.
console.log(player2);