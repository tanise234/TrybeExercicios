function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function inserirDias(dias) {
    for (let i = 0; i < dias.length; i += 1) {
        let dia = document.createElement('li');
        dia.innerText = dias[i];

        switch (dia[i]) {
            // feriados
            case 24:
                dia.classList = 'day holiday';
                break;
            case 25:
                dia.classList = 'day holiday friday';
                break;
            case 31:
                dia.classList = 'day holiday';
                break;
            // sextas-feiras
            case 4:
                dia.classList = 'day friday';
                break;
            case 11:
                dia.classList = 'day friday';
                break;
            case 18:
                dia.classList = 'day friday';
                break;
            default:
                dia.className = 'day';
                break;
        }
        document.querySelector('#days').appendChild(dia);
    }
}

inserirDias(dezDaysList);

// Exercício 2
function botaoFeriados(Feriados) {
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerText = 'Feriados';
    document.querySelector('.buttons-container').appendChild(botao);
}

botaoFeriados(); //verificar o parâmetro

// Exercício 3
function destacarFeriados() {
    let botao = document.getElementById('btn-holiday');
    botao.addEventListener('click', console.log('ah funionou!'));
} // verificar