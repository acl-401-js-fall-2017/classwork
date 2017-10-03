var z = 1;

function addOne(n) {
    if(n < 0) n = 0;
    if(z < 2) z = 2;
    return n + 1;
}

var x = -12;
console.log(addOne(x));
console.log(x);
console.log(z);

var s1 = 'hello world';
var s2 = 'hello world';
console.log(s1 === s2);
