let edina = {
}

let juca = {
}

let pedro = {
}

function addcar() {
    edina.car = carDraw()
    juca.car = carDraw()
    pedro.car = carDraw()
    gerarCars()
    fillCar()
    return true
}

function speed(min, max) {
    return parseFloat(Math.random() * (max - min) + min).toFixed(2)
}

function carDraw() {
    let typeofCar;
    let luck = Math.random() * 100
    if (luck <= 60) {
        typeofCar = "Popular";
    } else if (luck <= 95) {
        typeofCar = "Sport";
    } else {
        typeofCar = "Super Sport";
    }
    return typeofCar;
}

function minVelocity(car) {
    let velocity
    if (car === "Popular") {
        velocity = speed(110, 130);
    } else if (car === "Sport") {
        velocity = speed(125, 145);
    } else {
        velocity = speed(140, 160);
    }
    return velocity;
}

function maxVelocity(car) {
    let velocity
    if (car === "Popular") {
        velocity = speed(180, 200);
    } else if (car === "Sport") {
        velocity = speed(195, 215);
    } else {
        velocity = speed(210, 230);
    }
    return velocity;
}

function carSkid(car) {
    let sideslip
    if (car === "Popular") {
        sideslip = speed(3, 4);
    } else if (car === "Sport") {
        sideslip = speed(2, 3);
    } else {
        sideslip = speed(1, 1.175);
    }
    return sideslip;
}

function finalSpeed(min, max, skid) {
    return parseFloat(speed(min, max) * (1 - skid * 0.01)).toFixed(2)
}

function fillCar() {
    let edinaVMin = document.getElementById('veloMinEdina')
    let edinaVMax = document.getElementById('veloMaxEdina')
    let edinaVSkid = document.getElementById('DerrEdina')

    let jucaVMin = document.getElementById('veloMinJuca')
    let jucaVMax = document.getElementById('veloMaxJuca')
    let jucaVSkid = document.getElementById('DerrJuca')

    let pedroVMin = document.getElementById('veloMinPedro')
    let pedroVMax = document.getElementById('veloMaxPedro')
    let pedroVSkid = document.getElementById('DerrPedro')

    edinaVMin.innerHTML = edina.minSpeed;
    edinaVMax.innerHTML = edina.maxSpeed;
    edinaVSkid.innerHTML = edina.skid;

    jucaVMin.innerHTML = juca.minSpeed;
    jucaVMax.innerHTML = juca.maxSpeed;
    jucaVSkid.innerHTML = juca.skid;

    pedroVMin.innerHTML = pedro.minSpeed;
    pedroVMax.innerHTML = pedro.maxSpeed;
    pedroVSkid.innerHTML = pedro.skid;
}

function gerarCars() {

    edina.minSpeed = minVelocity(edina.car),
    edina.maxSpeed = maxVelocity(edina.car),
    edina.skid = carSkid(edina.car);
    edina.winCount = 0;

    juca.minSpeed = minVelocity(juca.car),
    juca.maxSpeed = maxVelocity(juca.car),
    juca.skid = carSkid(juca.car);
    juca.winCount = 0;

    pedro.minSpeed = minVelocity(pedro.car),
    pedro.maxSpeed = maxVelocity(pedro.car),
    pedro.skid = carSkid(pedro.car);
    pedro.winCount = 0;

    return true
}

function lapWinner(player1, player2, player3) {

    if (player1 > player2 && player1 > player3) {
        edina.winCount = edina.winCount + 1;
    }
    else if (player2 > player3) {
        juca.winCount = juca.winCount + 1;
    }
    else if (player3 > player2) {
        pedro.winCount = pedro.winCount + 1;
    }
    return true;
}

function winName(count1, count2, count3) {
    let nameWin;
    if (count1 > count2 && count1 > count3) {
        nameWin = 'Edina';
    }
    else if (count2 > count3) {
        nameWin = 'Juca';
    }
    else if (count3 > count2) {
        nameWin = 'Pedro';
    }
    
    return nameWin
}

function race(n) {
    let name
    edina.finalSpeed = finalSpeed(Number(edina.minSpeed), edina.maxSpeed, edina.skid);
    juca.finalSpeed = finalSpeed(Number(juca.minSpeed), juca.maxSpeed, juca.skid);
    pedro.finalSpeed = finalSpeed(Number(pedro.minSpeed), pedro.maxSpeed, pedro.skid);

    for (let i = 0; i < n; i++) {
        edina.finalSpeed = finalSpeed(Number(edina.minSpeed), edina.maxSpeed, edina.skid);
        juca.finalSpeed = finalSpeed(Number(juca.minSpeed), juca.maxSpeed, juca.skid);
        pedro.finalSpeed = finalSpeed(Number(pedro.minSpeed), pedro.maxSpeed, pedro.skid);

        lapWinner(edina.finalSpeed, juca.finalSpeed, pedro.finalSpeed);

    }
    name = winName(edina.winCount, juca.winCount, pedro.winCount)
    console.log(name)
    showWin(edina.winCount, juca.winCount, pedro.winCount, name)
    return true
}

function showWin(count1, count2, count3, name) {
    let showEd = document.querySelector('#ed');
    let showJu = document.querySelector('#ju');
    let showPe = document.querySelector('#pe');
    let show = document.querySelector('#mostrar');

    showEd.innerHTML = `A Edina ganhou ${count1} voltas`
    showJu.innerHTML = `O Juca ganhou ${count2} voltas`
    showPe.innerHTML = `O Pedro ganhou ${count3} voltas`
    show.innerHTML = `Portanto, ${name} ganhou o troféu da competição`
    clear()
}

function optionUser() {
    let tchoice = document.querySelector('#escolha');
    let choice = Number(tchoice.value)

    race(choice)
}

function clear() {
    pedro.winCount = 0;
    juca.winCount = 0;
    edina.winCount = 0;
}

