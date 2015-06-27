function chessBoard(size) {
    var board = '';
    for (row = 0; row < size; row++) {
        for (col = 0; col < size; col++) {
            board += (row + col) % 2 ? '#' : ' ';
        }
        board += '\n';
    }
    return board;
}

console.log(chessBoard(8));
