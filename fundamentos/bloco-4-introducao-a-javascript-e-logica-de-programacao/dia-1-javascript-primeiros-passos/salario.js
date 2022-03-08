let salarioBruto = 3000.00;
let INSS, IR, salarioDeduzido, salarioLiquido;


// cálculo do INSS
if (salarioBruto <= 1556.94) {
    INSS = 0.08 * salarioBruto;
}
else if (salarioBruto <= 2594.92) {
    INSS = 0.09 * salarioBruto;
}
else if (salarioBruto <= 5189.82) {
    INSS = 0.11 * salarioBruto;
}
else {
    INSS = 570.88;
}

salarioDeduzido = salarioBruto - INSS;

// cálculo do IR
if (salarioDeduzido <= 1903.98) {
    IR = 0;
}
else if (salarioDeduzido <= 2826.65) {
    IR = 0.075 * salarioDeduzido - 142.80;
}
else if (salarioDeduzido <= 3751.05) {
    IR = 0.15 * salarioDeduzido - 354.80;
}
else if (salarioDeduzido <= 4664.68) {
    IR = 0.225 * salarioDeduzido - 636.13;
}
else {
    IR = 0.275 * salarioDeduzido - 869.36;
}

// cálculo final
salarioLiquido = salarioDeduzido - IR;

console.log(salarioLiquido);