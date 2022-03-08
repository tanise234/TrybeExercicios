let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let odds = 0;

for (const element of numbers) {
    if (element % 2 === 1){
        odds += 1;
    }
}

switch (odds) {
    case 0:
        console.log('nenhum valor ímpar encontrado')
        break;

    default:
        console.log(odds);
        break;
}