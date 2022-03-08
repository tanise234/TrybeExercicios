const angA = 60;
const angB = 80;
const angC = 40;

let soma = angA + angB + angC;

if (angA >= 0 && angB >= 0 && angC >= 0 && soma === 180){
    console.log(true)
}
else {
    console.log('Erro. Verifique as medidas dos ângulos.')
}