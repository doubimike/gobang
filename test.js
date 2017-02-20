function drawGobang(n) {

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            var block = document.createElement('div');
            block.className = 'gobang_block';
            block.id = 'block_' + i + '_' + j;
            gobang.appendChild(block);
            if (i == 0) {
                block.className += ' top';
            }
            if (i == n - 1) {
                block.className += " bottom";
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

// 画棋子
function drawPiece() {
    // 我困惑的是这里的event难道不需要形参么？
    console.log(event)
    console.log(arguments)
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event),
        targetId = target.id,
        a = targetId.split('_'),
        i = +targetId.split('_')[1],
        j = +targetId.split('_')[2];
    console.log(target)
    console.log(a)

    if (target.className.indexOf('active') < 0) {
        target.className += ' active ' + color;
        // if(gobangArr[i]){
        gobangArr[i][j] = color;
        console.log(gobangArr[i])
        chessWin(i, j, color);
        // }
        color = color == 'black' ? 'white' : 'black';
        if (!win) {
            logStatus(color);
        }
    }


}

function resetGobang() {
    var i, j;
    for (i = 0; i < n; i++) {
        gobangArr[i] = [];
        for (j = 0; j < n; j++) {
            gobangArr[i][j] = '';
        }
    }
    color = 'black';
    gobangStatus.innerHTML = "<p>默认黑棋先下</p>";
    EventUtil.addHandler(gobang, "click", drawPiece);
    // 清楚棋子
    var divClassName, divGroup = gobang.getElementsByTagName('div'),
        len = divGroup.length;

    for (var i = 0; i < len; i++) {
        divClassName = divGroup[i].getAttribute('class');
        if (divClassName.indexOf('active white')) {
            divClassName = divClassName.replace('active white', '')
            divGroup[i].setAttribute('class', divClassName)
        }
        if (divClassName.indexOf('active black')) {
            divClassName = divClassName.replace('active black', '')
            divGroup[i].setAttribute('class', divClassName)
        }
    }
}

function chessWin(i, j, color) {
    var row, col, count = 1;
    // 垂直方向
    for (row = i - 1; row >= 0 && row > i - 5; row--) {
        if (gobangArr[row][j] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }
    }
    for (row = i + 1; row < n && row < i + 5; row++) {
        if (gobangArr[row][j] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }

    }
    count = 1;
    // 水平方向
    for (col = j - 1; col >= 0 && col > j - 5; col--) {
        console.log('gobangArr[col][i]', gobangArr[i][col])
        if (gobangArr[i][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }
    }
    console.log(count)
    for (col = j + 1; col < n && col < j + 5; col++) {
        if (gobangArr[i][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }

    }
    count = 1;
    //45度方向
    for (col = j - 1, row = i - 1; col >= 0 && row >= 0 && col > j - 5 && row > i - 5; col--, row--) {
        console.log('gobangArr[col][i]', gobangArr[i][col])
        if (gobangArr[row][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }
    }
    console.log(count)
    for (col = j + 1, row = i + 1; col < n && row < n && col < j + 5 && row < i + 5; col++, row++) {
        if (gobangArr[row][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }

    }
    count = 1;

    //135度方向
    for (col = j - 1, row = i + 1; col >= 0 && col > j - 5 && row < n && row < i + 5; col--, row++) {
        console.log('gobangArr[col][i]', gobangArr[i][col])
        if (gobangArr[row][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }
    }
    console.log(count)
    for (col = j + 1, row = i - 1; col < n && row >= 0 && col < j + 5 && row < i + 5; col--, row++) {
        if (gobangArr[row][col] == color) {
            count++;
            ifWin(count, color);
        } else {
            break;
        }

    }
    count = 1;

}

function ifWin(count, color) {
    if (count == 5) {
        if (color == "black") {
            gobangStatus.innerHTML = "<p>黑棋赢了</p>";
            alert("黑棋赢了");
        } else {
            gobangStatus.innerHTML = "<p>白棋赢了</p>";
            alert("白棋赢了");
        }
        win = true;
        EventUtil.removeHandler(gobang, "click", drawPiece);
    } else {
        win = false;
    }
}

function logStatus(info) {
    color == 'black' ? gobangStatus.innerHTML = '<p>轮到黑棋下</p>' : gobangStatus.innerHTML = '<p>轮到白棋下</p>'
}
var n = 15,
    gobang = document.getElementById('gobang_main'),
    gobangStatus = document.getElementById('gobang_status'),
    gobangArr = [];
color = 'black', win = 0, gobangToolAgain = document.getElementById("gobang_tool_again");
resetGobang()
drawGobang(15)

EventUtil.addHandler(gobang, 'click', drawPiece);
EventUtil.addHandler(gobangToolAgain, "click", resetGobang);
