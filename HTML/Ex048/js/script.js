const numerosSorteados = [];

const luckyBtn = document.querySelector("#luckyBtn")
luckyBtn.addEventListener("click", (event) => {
    event.preventDefault()
    const text = document.querySelector("#text")
    text.innerHTML = "Números sorteados: "

    const sorteioIntervalado = setInterval(sortearNumero, 1000)
    setTimeout(() => {
        clearInterval(sorteioIntervalado)
    }, 6000)
})

function sortearNumero() {
    
    let numSorteado = Math.floor(Math.random() * 60) + 1
    let jaSorteado = false
    let result = document.querySelector("#result")

    for (let i of numerosSorteados) {
        if (numSorteado == i) {
            jaSorteado = true
        }
    }

    if (jaSorteado == false) {
        numerosSorteados.push(numSorteado)
        result.innerHTML += `${numSorteado} `
    } else {
        sortearNumero()
    }
}