const animalModel = require("./index");

// updateOne
animalModel.updateOne({name : "Parrot"}, {age : 5}).then(console.log("Updated age of parrot"))
