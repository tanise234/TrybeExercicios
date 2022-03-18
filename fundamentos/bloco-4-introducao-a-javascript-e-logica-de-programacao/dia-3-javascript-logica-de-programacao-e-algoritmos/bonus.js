// // exer 1 - quadrado
// let n = 5;
// for (let i = 0; i < n; i += 1) {
//     let display = '';
//     for (let j = 0; j < n; j += 1) {
//         display = display + '*';
//     }
//     console.log(display);
// }

// // exer 2 - triângulo à esquerda
// let n = 5;
// for (let i = 0; i < n; i += 1) {
//     let display = '';
//     for (let j = 0; j < i+1; j += 1) {
//         display = display + '*';
//     }
//     console.log(display);
// }


// // exer 3 - triângulo à direita
// let n = 5;
// for (let i = 0; i < n; i += 1) {
//     let display = '';
//     for (let j = 0; j < n; j += 1) {
//         if (n - j <= i + 1) {
//             display = display + '*';
//         } else {
//             display = display + ' ';
//         }
//     }
//     console.log(display);
// }

// exer 4 - árvore de natal
let n = 5;
let par = true;
for (let i = 0; i < n; i += 1) {
    if (par === true) {
        preenche(i);
    }
    par = !par;
}

function preenche(index) {
    let display = '';
    for (let j = 0; j < n; j += 1) {
        if (j < (n-index-1)/2 || j > n-(n-index)/2){
        display = display + ' ';
        } else {
            display = display + '*';
        }
    }
    console.log(display);
}

// exer 5 - contorno da árvore de natal


// // exer 6 - verificar se é primo
// let limit = 50;

// // verificar os valores começando pelos maiores
// for (let index = limit; index > 0; index -= 1) {
//     let primo = true;

//     // verificar se existem divisores começando pelo 2 e indo até a metade do número
//     for (let divider = 2; divider <= index / 2; divider += 1) {
//         if (index % divider === 0) {
//             primo = false;
//             break;
//         }
//     }

//     if (primo === true) {
//         console.log(index + " é o maior primo!");
//         break;
//     }
// }