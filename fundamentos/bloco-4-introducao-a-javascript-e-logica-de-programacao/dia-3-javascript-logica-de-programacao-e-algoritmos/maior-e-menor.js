let array = ['java', 'javascript', 'python', 'html', 'css'];

let menor = array[0];
let maior = array[0];

// achar a menor palavra
for (let index = 1; index < array.length; index += 1) {
    if (menor.length > array[index].length){
        menor = array[index];
    }
}


// achar a maior palavra
for (let index = 1; index < array.length; index += 1) {
    if (maior.length < array[index].length){
        maior = array[index];
    }
}

console.log('o menor é:', menor, "\no maior é:", maior);