const express = require('express');
const mongoose = require('mongoose');

  mongoose.connect('mongodb://127.0.0.1:27017/trialDb').
  catch(error => handleError(error));


const animalSchema = {
    name : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true,
        min: [1, 'Must be at least 1, got {VALUE}']},

    gender : String
}

const animalModel = mongoose.model('animal', animalSchema);

const animal2 = new animalModel({ name: 'Dog', age:3, gender : 'Male' });
// animal2.save().then(() => console.log('boww'));

module.exports = animalModel;