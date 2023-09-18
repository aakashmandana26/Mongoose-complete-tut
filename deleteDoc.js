const animalModel = require("./index");

// deleteOne
animalModel.deleteOne({_id : "64b90febceca63b3cc6956fe"}).then(console.log("Deleted Rat"));