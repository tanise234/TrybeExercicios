let limit = 50;

// verificar os valores começando pelos maiores
for (let index = limit; index > 0; index -= 1) {
    let primo = true;

    // verificar se existem divisores começando pelo 2 e indo até a metade do número
    for (let divider = 2; divider <= index / 2; divider += 1) {
        if (index % divider === 0) {
            primo = false;
            break;
        }
    }

    if (primo === true) {
        console.log(index + " é o maior primo!");
        break;
    }
}