
function findX (t ,V, fn){

    var x=t*V;
    return fn(x);
}


function sum10(param1) {
    return param1+10;
}


var yol =findX(4,50,sum10);
console.log(yol);

var yol2 =findX(7,63,sum10);

console.log(yol2);  