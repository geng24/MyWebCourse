const myHobbies = [
    {name: 'yoga', lengthInYearsAtHobby: 20},
    {name: 'sewing', lengthInYearsAtHobby: 30},
    {name: 'cooking', lengthInYearsAtHobby: 35}
];

function printMyHobbies (hobby) {
    console.log(`${hobby.name} enjoyed for ${hobby.lengthInYearsAtHobby}`)
}


for (let hobby of myHobbies) {
    printMyHobbies(hobby);
}