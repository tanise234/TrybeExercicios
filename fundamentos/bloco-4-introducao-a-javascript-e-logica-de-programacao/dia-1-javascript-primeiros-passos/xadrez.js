let piece = 'bishop';
piece = piece.toLowerCase();

switch (piece) {
    case 'pawn':
        console.log('foward');
        break;
    case 'bishop':
        console.log('diagonally');
        break;
    case 'knight':
        console.log('L shape');
        break;
    case 'rook':
        console.log('horizontally or vertically');
        break;
    case 'queen':
        console.log('diagonally, horizontally or vertically');
        break;
    case 'king':
        console.log('one square in any direction');
        break;
    default:
        console.log("Invalid piece's name")
        break;
}