let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// passar por todos os elementos do array
for (let index = 1; index < numbers.length; index += 1) {
    
    // verificar o elemento atual com os outros elementos
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
        
        // mudar de posição caso necessário
        if (numbers[index] < numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

// imprimir o array
console.log(numbers);