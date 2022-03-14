let limit = 4;

// verificar os valores começando dos maiores
for (let index = limit; index > 0; index -= 1) {
    
    // verificar os módulos
    for (let divider = 2; divider < index / 2; divider += 1) {
        if (index % divider === 0){
            break;
        }
        else {
console.log('para1');
        }
        console.log('para2');
    }
    console.log('para3');
}
console.log('para4');