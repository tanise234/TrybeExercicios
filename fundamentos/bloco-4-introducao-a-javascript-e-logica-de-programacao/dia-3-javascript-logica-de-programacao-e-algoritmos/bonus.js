// exer 1 - quadrado
// let n = 5;
// for (let i = 0; i < n; i += 1) {
//     let display = '';
//     for (let j = 0; j < n; j += 1) {
//         display = display + '*';
//     }
//     console.log(display);
// }

// exer 2 - triângulo à esquerda
// let n = 5;
// for (let i = 0; i < n; i += 1) {
//     let display = '';
//     for (let j = 0; j < i+1; j += 1) {
//         display = display + '*';
//     }
//     console.log(display);
// }


// exer 3 - triângulo à direita
let n = 5;
for (let i = 0; i < n; i += 1) {
    let display = '';
    for (let j = 0; j < n; j += 1) {
        if (n - j <= i + 1) {
            display = display + '*';
        } else {
            display = display + ' ';
        }
    }
    console.log(display);
}

