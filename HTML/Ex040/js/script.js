const parameters = document.querySelectorAll('span');
const speedEnd = [];
const speedPartial = [];
const factorSkid = [];
const speedMin = [];
const speedMax = [];
let bigger = 0;
let i = 0;
let nameWin;
let nameWinEnd = 0;
let contEd = 0;
let contJu = 0;
let contPe = 0;
let showEd = document.querySelector('#ed');
let showJu = document.querySelector('#ju');
let showPe = document.querySelector('#pe');
let show = document.querySelector('#mostrar');

let choice;


function UmaVolta() {
    /* For que captura os dados e aloca os valores correspondentes em vetor*/
    capturadeDados();
    /*for (i = 2; i < 9; i += 3) {
        if (speedEnd[i] > bigger) {
            bigger = speedEnd[i];
        }
    }*/

    if (speedEnd[2] > speedEnd[5] && speedEnd[2] > speedEnd[8]) {
        bigger = speedEnd[2];
        nameWin = 'Edina';
    }
    else if (speedEnd[5] > speedEnd[8]) {
        bigger = speedEnd[5];
        nameWin = 'Juca';
    }
    else {
        bigger = speedEnd[8];
        nameWin = 'Pedro';
    }
}

/*Function that captures html data*/
function capturadeDados() {
    for (; i < 9; i++) {
        if (i % 3 == 0) {
            speedMin[i] = Number(parameters[i].innerText)
        }
        else if (i % 3 == 1) {
            speedMax[i] = Number(parameters[i].innerText)
        }
        else {
            factorSkid[i] = Number(parameters[i].innerText)
        }
    }

    for (i = 0; i < 9; i++) {
        if (i % 3 == 0) {
            speedPartial[i] = sortition(speedMin[i], speedMax[i + 1]);
        }
        else if (i % 3 == 2) {
            speedEnd[i] = (speedPartial[i - 2] * (1 - factorSkid[i] * 0.01)).toFixed(2);
        }
    }
}

/*Function that receives the value chosen by the user and determines the winner.*/
function optionUser() {
    let tchoice = document.querySelector('#escolha');
    choice = Number(tchoice.value)
   
    modoCorrida(choice)
    winName()
    showWin()
}

/*Function that determines the winner in Eduro race mode.*/
function enduro(x) {
    
    modoCorrida(x)
    winName()
    showWin()
}

/*Function that determines the winner in the Grand Prix race mode.*/
function grandP(x) {
   
    modoCorrida(x)
    winName()
    showWin()
}

/*Function that determines the winner in Quick race mode.*/
function rapida(x) {
    
    modoCorrida(x)
    winName()
    showWin()
}

/*Function that determines the choice of race module*/
function modoCorrida(x) {
    let j = 0
    for (j; j < x; j++) {
        UmaVolta()
        contWin()
    }
}

/*Function that displays the number of laps won by each winner and the winner of the competition.*/
function showWin() {
    showEd.innerHTML = `A Edina ganhou ${contEd} voltas`
    showJu.innerHTML = `O Juca ganhou ${contJu} voltas`
    showPe.innerHTML = `O Pedro ganhou ${contPe} voltas`
    show.innerHTML = `Portanto, ${nameWinEnd} ganhou o troféu da competição`
    limar()
}

function contWin() {
    if (nameWin == 'Edina') {
        contEd++
    } else if (nameWin == 'Juca') {
        contJu++
    }
    else {
        contPe++
    }
}

function winName() {
    if (contEd > contJu && contEd > contPe) {
        nameWinEnd = 'Edina';
    }
    else if (contJu > contPe) {
        nameWinEnd = 'Juca';
    }
    else {
        nameWinEnd = 'Pedro';
    }
}

function sortition(min, max) {
    return ((parseFloat(Math.random() * (max - min) + min))).toFixed(2);
}

function limar() {
    contEd = 0;
    contJu = 0;
    contPe = 0;
}
