let x, y, z;
x=10;
y='10';
z=30;


console.log("x is of type " + typeof x);
console.log("y is of type " + typeof y);
console.log("z is of type " + typeof z);

var newX = x++;
console.log("Now newX is " + newX);
console.log("x is " + x);
console.log('The comparison of x==y is:', (x==y));

let timeInMs = Date.now();
console.log("Time is " + timeInMs);

const day = new Date().getDate;
console.log("Date is " + day);
let yearPass = timeInMs / 49;
console.log("Years since 1970 " + yearPass);