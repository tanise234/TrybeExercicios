let word = 'tryber';

let auxiliar = [];

for (let index = 0; index < word.length; index += 1) {
    auxiliar[index] = word[(word.length-1)-index];
}
console.log(auxiliar.join(''));