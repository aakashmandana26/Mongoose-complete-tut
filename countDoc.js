const animalModel = require("./index");

// Male animals count
animalModel.count({ gender : "Male" }).count().then((res)=>{
    console.log(res)
})

// Total animals
animalModel.count({ }).count().then((res)=>{
    console.log(res)
})