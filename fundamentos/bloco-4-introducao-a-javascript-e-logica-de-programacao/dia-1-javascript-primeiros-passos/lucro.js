const custo = 55;
const venda = 70;

if (custo < 0 || venda < 0) {
    console.log('Erro. Valores negativos.')
}
else {
    let lucro = 1000 * (venda - (custo + 0.2 * custo));
    console.log(lucro);
}