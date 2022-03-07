const estado = 'ap';
let message;

switch (estado) {
    case 'ap':
        console.log('aprovada');
    case 'rep':
        console.log('reprovada');
        break;
    case 'le':
        console.log('lista de espera');
        break;
    default:
        console.log('não se aplica');
        break;
}