let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let product = [];

// multiplicar os elementos dois a dois
for (let index = 0; index < numbers.length - 1; index += 1) {
    product.push(numbers[index] * numbers[index + 1]);
}

// multiplicar o último elemento por 2
product.push(numbers[numbers.length - 1] * 2);

// imprimir o array
console.log(product);