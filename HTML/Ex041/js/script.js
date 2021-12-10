let vet1 = [];
let i;
let j;

let display1 = document.querySelector('#mostrar1');
let display2 = document.querySelector('#mostrar2');
let display3 = document.querySelector('#mostrar3');

let array1 = document.querySelectorAll('#mostrar1 span');

let tAddNumber = document.querySelector('#add')

let menor;

function adicionar() {

    limpar()
    let numberAdd = tAddNumber.value
    vet1.push(numberAdd)
    console.log(vet1[vet1.length - 1]);

    arrayUnordered()
    
    return true
}
/* Function used to generate random numbers
function randomNumber(min, max) {
    return ((parseFloat(Math.random() * (max - min) + min))).toFixed(2);
}

 Function used for testing
function aleatorio() {
    limpar()
    for (i = 0; i < 10; i++) {

        vet1[i] = Number((randomNumber(1, 10)));
        display1.innerHTML += `<span>${vet1[i]}</span>`
        console.log(vet1[i]);
    }

    arrayReverse()
    arrayProcessOrdered()
    arrayOrdered()

    return true
}
*/
function limpar() {
    display1.innerHTML = ``;
    display2.innerHTML = ``;
    display3.innerHTML = ``;
}

function reverse() {
    let numberArry = array1.value
    console.log(numberArry)
    arrayReverse()
    return true
}

function Ordered() {
    let numberArry = array1.value
    console.log(numberArry)
    arrayProcessOrdered()
    arrayOrdered()
    return true
}

function arrayProcessOrdered() {
    for (i = 0; i < vet1.length; i++) {

        for (j = 0; j < vet1.length; j++) {

            if (vet1[i] < vet1[j]) {
                menor = vet1[i]
                vet1[i] = vet1[j]
                vet1[j] = menor
            }
        }
    }
    return true
}

function arrayOrdered() {
    for (i = 0; i < vet1.length; i++) {
        display3.innerHTML += `<span>${vet1[i]}</span>`
    }
    return true
}

function arrayUnordered() {
    for (i = 0; i < vet1.length; i++) {

        display1.innerHTML += `<span>${vet1[i]}</span>`
    }
    return true
}

function arrayReverse() {
    for (i = 0; i < vet1.length; i++) {

        display2.innerHTML += `<span>${vet1[(vet1.length - 1) - i]}</span>`
    }
    return true
}