// 赢法数组 三维数组
var wins = [];

for (var i = 0; i < 15; i++) {
    wins[i] = [];
    for (var j = 0; j < 15; j++) {
        wins[i][j] = [];
    }
}

// count是代表是第几种赢法
var count = 0;
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 11; j++) {
        // wins[0][0][0]=true;
        // wins[0][1][0]=true;
        // wins[0][2][0]=true;
        // wins[0][3][0]=true;
        // wins[0][4][0]=true;

        // 5个代表一种赢法，
        // wins[0][1][1]=true;
        // wins[0][2][1]=true;
        // wins[0][3][1]=true;
        // wins[0][4][1]=true;
        // wins[0][5][1]=true;
        for (var k = 0; k < 5; k++) {
            wins[i][j + k][count] = true;
        }
        count++;

        // 上面是所有横线的赢法
    }
}


// 所有竖线赢法
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 11; j++) {
        // wins[0][0][0]=true;
        // wins[1][0][0]=true;
        // wins[2][0][0]=true;
        // wins[3][0][0]=true;
        // wins[4][0][0]=true;

        // 5个代表一种赢法，
        // wins[1][0][1]=true;
        // wins[2][0][1]=true;
        // wins[3][0][1]=true;
        // wins[4][0][1]=true;
        // wins[5][0][1]=true;
        for (var k = 0; k < 5; k++) {
            wins[j + k][i][count] = true;
        }
        count++;

        // 上面是所有横线的赢法
    }
}

// 所有斜线赢法
for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
        // wins[0][0][0]=true;
        // wins[1][1][0]=true;
        // wins[2][2][0]=true;
        // wins[3][3][0]=true;
        // wins[4][4][0]=true;

        // 5个代表一种赢法，
        // wins[1][1][1]=true;
        // wins[2][2][1]=true;
        // wins[3][3][1]=true;
        // wins[4][4][1]=true;
        // wins[5][5][1]=true;
        for (var k = 0; k < 5; k++) {
            wins[i + k][j + k][count] = true;
        }
        count++;

        // 上面是所有横线的赢法
    }
}

// 反斜线
for (var i = 0; i < 11; i++) {
    for (var j = 14; j > 3; j--) {
        // wins[0][14][0]=true;
        // wins[1][13][0]=true;
        // wins[2][12][0]=true;
        // wins[3][11][0]=true;
        // wins[4][10][0]=true;

        // 5个代表一种赢法，
        // wins[1][13][1]=true;
        // wins[2][12][1]=true;
        // wins[3][11][1]=true;
        // wins[4][10][1]=true;
        // wins[5][9][1]=true;
        for (var k = 0; k < 5; k++) {
            wins[i + k][j - k][count] = true;
        }
        count++;

        // 上面是所有横线的赢法
    }
}

// 总共572种赢法 15*15
console.log(count);


// 赢法数组
var myWin = [];
var computerWin = [];

for (var i = 0; i < count; i++) {
    myWin[i] = 0;
    computerWin[i] = 0;
}


// 计算机ai
var computerAI = function() {
    var myScore = [];
    var computerScore = [];
    var max = 0;
    var u = 0,
        v = 0;
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            myScore[i][j] = 0;
            computerScore[i][j] = 0;
        }
    }

    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            // 说明是空的可以下棋
            if (chessBoard[i][j] == 0) {
                // 遍历赢法算分数
                for (var k = 0; k < count; k++) {
                    // 如果这个赢法这个位置能加分
                    if (wins[i][j][k]) {
                        if (myWin[k] == 1) {
                            myScore[i][j] += 200;
                        } else if (myWin[k] == 2) {
                            myScore[i][j] += 400;
                        } else if (myWin[k] == 3) {
                            myScore[i][j] += 2000;
                        } else if (myWin[k] == 4) {
                            myScore[i][j] += 10000;
                        }

                        if (computerWin[k] == 1) {
                            computerScore[i][j] += 220;
                        } else if (computerWin[k] == 2) {
                            computerScore[i][j] += 420;
                        } else if (computerWin[k] == 3) {
                            computerScore[i][j] += 2100;
                        } else if (computerWin[k] == 4) {
                            computerScore[i][j] += 20000;
                        }

                    }
                }
            }
        }
    }

    if (myScore[i][j] > max) {
        max = myScore[i][j];
        u = i;
        v = j;
    } else if (myScore[i][j] = max) {
        if (computerScore[i][j] > computerScore[u][v])
            u = i;
        v = j;
    }

    if (computerScore[i][j] > max) {
        max = computerScore[i][j];
        u = i;
        v = j;
    } else if (myScore[i][j] = max) {
        if (myScore[i][j] > myScore[u][v])
            u = i;
        v = j;
    }




}
