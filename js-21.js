 // object contructor
 /*
 var player1 = {
  name: 'Koro ',
  surname: 'Sensei',
  age: 28,
 }
 console.log(player1);

 var player2 = {
  name: 'Karma ',
  surname: 'Akabane',
  age: 17,
 }
 console.log(player2);
*/

 function Player(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.age = age;
 }
 /*var Player1 = new Player('Koro', 'Sensei', 28);
 var Player2 = new Player('Karma', 'Akabane', 17);
 var Player3 = new Player('Nagisa', 'Shiota', 24);
*/


 var players = [
     new Player('Koro', 'Sensei', 28),
     new Player('Karma', 'Akabane', 17),
     new Player('Nagisa', 'Shiota', 24), 
 ];
 //nesneleri array in içine koyduk.
  console.log(players[0]);
  //Player {name: 'Koro', surname: 'Sensei', age: 28}
  console.log(players[2].name);
  //Nagisa

  console.log(players[2].surname);
  //Shiota


  // nesne yapıcı işlemleri bu şekilde.



