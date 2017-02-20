function drawGobang(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var block = document.createElement('div');
            block.className = 'gobang_block';
            block._id = 'block_' + i + '_' + j;
            gobang.appendChild(block);
            if (i == 0) {
                block.className += ' top';
            }
            if (i == n - 1) {

            }
            if (j == 0) {
                block.className += ' left';
            }
            if (j == n - 1) {
                block.className += ' right';
            }
        }
    }
}

var gobang = document.getElementById('gobang_main');
EventUtil.addHandler(gobang, 'click', drawPiece);

i = +targetId.split('_')[1];
j = +targetId.split('_')[2];


function chessWin(i, j, color) {

}
