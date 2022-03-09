let numbers = [];

for (let index = 0; index < 51; index += 1) {
    numbers.push(50 + index);
}

let soma = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    soma += numbers[index1];
}

console.log('A soma de 50 até 100 é: ', soma);