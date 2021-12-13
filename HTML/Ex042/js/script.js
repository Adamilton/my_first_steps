let matriz = [
    [false, false, false],
    [false, false, false],
    [false, false, false]
];
player = "player2";

let elementQuadrant = document.querySelectorAll(".box")
let win = document.getElementById("win")
//console.log(elementQuadrant)
let count = 0;
let winPlayer;

/*function that is called by the click, it is a player's move.*/
function move(i, j) {
    if (matriz[i][j] === false && winPlayer != "player ◯" && winPlayer != "player X") {
        AlternatingPlayer()
        addValuesMatrix(i, j)
        PlayCount()
        if (count > 4) {
            victoryCondition()
        }
    }
}
/*function that checks if someone has won the match*/
function victoryCondition() {

    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < 3; i++) {
        let accumLine = 0;
        let accumColumn = 0;


         /*repeat that scans the entire array*/
        for (let j = 0; j < 3; j++) {
            accumLine += matriz[i][j]; //checks all lines, adding values
            accumColumn += matriz[j][i]; //checks all columns, summing the values
            if (j == i) {
                mainDiagonal += matriz[i][j]; //check the main diagonal, adding the values
               // console.log(mainDiagonal)
            }
            if (j + i == 2) {
                secondaryDiagonal += matriz[i][j];//check the secondary diagonal, adding the values
            }
        }

        if (accumLine === 3 || accumColumn === 3 || secondaryDiagonal === 3 || mainDiagonal === 3) {
            winPlayer = "player ◯"
            console.log(winPlayer)
            console.log(win.innerHTML)
            win.innerHTML = `O vencedore é o ${winPlayer}`
        }
        if (accumLine === 60 || accumColumn === 60 || secondaryDiagonal === 60 || mainDiagonal === 60) {
            winPlayer = "player X"
            console.log(winPlayer)
            win.innerHTML = `O vencedore é o ${winPlayer}`
            console.log(win.innerHTML)
        }
        if (count === 9) {
            win.innerHTML = "O jogo velhou"
        }
    }
}
/*function that counts the number of moves*/
function PlayCount() {
    return count++
}
//function that adds values to the matrix and displays it on the user's screen
function addValuesMatrix(i, j) {
    if (player === "player1") {
        elementQuadrant[OneDimensionalConversation(i, j)].value = '◯';
        matriz[i][j] = 1;
    } else {
        elementQuadrant[OneDimensionalConversation(i, j)].value = 'X';
        matriz[i][j] = 20;
    }
    return matriz;
}
//function that alternates the moves
function AlternatingPlayer() {
    if (player == "player1") {
        player = "player2"
    } else
        player = "player1"
    return player
}
//captured element is a one-dimensional vector, so two-dimensional input is converted to one-dimensional.
function OneDimensionalConversation(i, j) {
    return 3 * i + j
}
