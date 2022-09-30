const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = (car) => {
    const [model, factory, year] = car;
    return {model, factory, year};
}

console.log(toObject(palio));