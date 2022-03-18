let numbers = [];

for (let index = 0; index < 125; index += 1) {
    numbers.push(1 + index);
}

let soma = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
    if (numbers[index1] % 3 === 0) {
        soma += 1;
    }
}

if (soma === 50) {
    console.log('#VQV - Foguete não tem ré!');
}
else {
    console.log(soma);
}