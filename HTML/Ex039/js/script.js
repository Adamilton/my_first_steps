/*Declaration of variables that will be used throughout the main and minor scope.*/
let tphrase = document.getElementById('frase-criada');
let tquantity = document.getElementById('qtd-frase');
let blackBoard = document.getElementById('quadro');
let dataBart = document.getElementById('dados')
let cont1;
let cont2;
let lastLine;
let deleteBoard;
let random;

/*Function that shows information on how many times Bart erased the blackboard and how many lines he left written last time.*/
function informacaoFinal() {
    console.log(lastLine)
    dataBart.innerHTML = ``;
    dataBart.innerHTML = `<h3>O Bart apagou o quadro ${deleteBoard} vezes e ao final, ele deixou o quadro com  ${lastLine} repetições</h3>`;

    return true
}

/*Function that shows the phrase only once on the blackboard.*/
function vizualizar() {
    capturar();
    blackBoard.innerHTML = '';
    blackBoard.innerHTML += `<h2>${phrase}</h2>`;

    return true
}

/*Function that shows the last sentence and information.*/
function Escrever() {
    blackBoard.innerHTML = '';
    capturar()
    displayRepeticao()
    console.log(lastLine)
    informacaoFinal()

    return true
}

/*Function that processes how many sentences should appear last time.*/
function displayRepeticao() {

    cont1 = 0;
    cont2 = 0;
    deleteBoard = (quantity / 11).toFixed(0);
    lastLine = quantity % 11;

    console.log(phrase);

    console.log(deleteBoard);
    console.log(quantity);
    if (lastLine == 0 && quantity >= 11) {
        lastLine = 11
    }
    console.log(lastLine)
    while (cont1 < (lastLine)) {
        cont1++
        blackBoard.innerHTML += `<h2>${phrase}</h2>`;
    }
    return true
}

/*Function that clears all fields including the blackboard.*/
function Limpar() {
    blackBoard.innerHTML = ``;
}

/*function that captures the data of the text field and the number field.*/
function capturar() {
    phrase = tphrase.value;
    quantity = Number(tquantity.value)

    return true
}

/*function that starts the process, this function is activated when the 'Confirmar' button is clicked.*/
function confirmar() {
    let phrase = document.getElementById('frase-criada').value;
    let quantity = Number(document.getElementById('qtd-frase').value);

    console.log(phrase);
    console.log(quantity);

    return true
}

/*function that generates a random Bart phrase when clicking the 'Frase Aleatório' button.*/
function aleatora() {
    blackBoard.innerHTML = ``;
    capturar()
    fraseAlearira()

    console.log(phrase)
    console.log(quantity);
    displayRepeticao()
    informacaoFinal()
    return true
}

/*function that chooses a Bart phrase from the random number.*/
function fraseAlearira() {
    capturar()
    getRandom()
    console.log(random)
    switch (random) {
        case 0:
            phrase = 'Eu não desperdiçarei giz.';

        case 1:
            phrase = 'Eu não andarei de skate nos corredores';

        case 2:
            phrase = 'Eu não arrotarei na aula';

        case 3:
            phrase = 'Eu não vou desenhar mulheres nuas na sala de aula';

        case 4:
            phrase = 'Eu não vi Elvis';
        case 5:
            phrase = 'Chiclete de alho não é engraçado';
        case 6:
            phrase = 'Eu não gritarei “Fogo” em uma sala de aula cheia';
        case 7:
            phrase = 'Eu não incentivarei os outros a voarem';
        case 8:
            phrase = 'Alcatrão não é brincadeira';
        case 9:
            phrase = 'Eu não vou xerocar meu traseiro';
        case 10:
            phrase = 'Eu não chamarei minha professora de Bolo Quente';
            break;
        default:

    }
    return true
}
/*function that generates an integer random number between 0 and 10.*/
function getRandom() {
    random = Number((Math.random() * 10).toFixed(0));
    return true
}
