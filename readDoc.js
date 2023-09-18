// const mongoose = require("./index")
const animalModel = require('./index');

// find all documents
animalModel.find().then((data) => {
    // console.log(data);
    data.forEach((animal)=>{
        console.log(animal.name+" "+animal.gender+" "+animal.age)
    })
   })



// Find the animal with the given `id`, or `null` if not found
// animalModel.findById("64b8f243527c9d60bd76a21f").then((dataById)=>{
//     console.log(dataById);
// })

// find Males
// animalModel.find({gender : "Male"}).then((data)=>{
//     console.log("Male animals")
//     console.log(data)
// })

// find by age lessthan 10
animalModel.find({age : {$lt : 10}}).then((data)=>{
    console.log("Animals with age less than 10")
    data.forEach((animal)=>{console.log(animal.name+" -> "+animal.age)})
})

// findOneAndDelete
// animalModel.findOneAndDelete({_id : "64b9061488e9035b773963b2"}).then(console.log("deleted"))

// mongoose.connection.close()