const animalModel = require('./index');

// InsertOne
animalModel.create({name : "Rat", age : 0, gender : "Male"}).
then(console.log("inserted data"));

// InsertMany
const rat = {name : "Rat", age : 2, gender : "Male"};
const lion = {name : "Lion", age : 23, gender : "Male"};
const cow = {name : "Cow", age : 12, gender : "Female"};

// animalModel.insertMany([rat,lion,cow]).then(console.log("Inserted docs"))