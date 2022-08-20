const read = require('readline-sync');

const fbmi = (weight, height) => {
    console.log(weight / (height ^ 2));
    return weight / (height ^ 2);
};

const w = read.questionFloat("What's your weight? ");
const h = read.questionFloat("What's your height? ");
fbmi(w,h);

module.exports = {fbmi, w, h};