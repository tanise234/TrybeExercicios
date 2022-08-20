const {w,h} = require('./bmi.js');

const f = () => {
    const imc = w / (h * h);
    if (imc < 18.5) {
        console.log('Abaixo do peso (magreza)');
    } else if (imc <= 24.9) {
        console.log('Peso normal');
    } else if (imc <= 29.9) {
        console.log('Acima do peso (sobrepeso)');
    } else if (imc <= 34.9) {
        console.log('Obesidade grau I');
    } else if (imc <= 39.9) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade graus III e IV');
    }
};

module.exports = f;