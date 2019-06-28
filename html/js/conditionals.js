let numOne =1;

let stringOne = '1';

console.log('double ==', numOne == stringOne);
console.log('triple ===', numOne === stringOne);
console.log(" ");

const day = new Date().getDay();
if (day ==1) {
    console.log('Back to work!');
}
else if (day ==3) {
    console.log('Over the hump!');
}
else if (day ==0 || day == 6) {
    console.log('Weekend!');
}
else {
    console.log('It is Weekday!');
}

