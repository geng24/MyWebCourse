let myHobbies = ['yoga', 'cooking', 'sewing'];

function printHobbies (getHobbies) {
    console.log(`I like ${getHobbies.length} things`);
        for (let index = 0; index < getHobbies.length; index++) {
            let item = getHobbies[index];
            console.log('I like ' + item);
        }  
}

printHobbies (myHobbies);

console.log(' ');
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));
