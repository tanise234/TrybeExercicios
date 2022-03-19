let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// // exer1
// console.log('Bem vinda, ' + info.personagem);

info['recorrente'] = 'Sim';

// // exer2
// console.log(info);

// // exer3
// for (let key in info) {
//     console.log(key);
// }

// // exer4
// for (let key in info) {
//     console.log(info[key]);
// }

// // exer5
// let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim'
// };
// for (let key in info) {
//     if (info[key] != info2[key]) {
//         console.log(info[key] + ' e ' + info2[key]);
//     }
// }

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};

// // exer6
// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor.livrosFavoritos[0].titulo + '".');

// exer7
let novoLivro = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };

leitor.livrosFavoritos[1] = novoLivro;

// exer8
console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');
