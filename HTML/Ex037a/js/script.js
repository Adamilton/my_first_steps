/*declarção das variáveis*/
let tn1 = document.getElementById('n1');
let tn2 = document.getElementById('n2');
let res = document.getElementById('resultado')
let s;
let n1;
let n2;

/*função que recebe dois valores e faz a operação de adição*/
function soma() {
    n1 = Number(tn1.value);
    n2 =Number(tn2.value);
    s = n1+ n2;
    res.innerHTML= s;
    return true;

}
/*função que recebe dois valores e faz a operação de subtração*/
function sub() {

    n1 = Number(tn1.value);
    n2 =Number(tn2.value);
    s = n1 - n2;

    resultadoTotal(s);

    return true;
}

/*função que recebe dois valores e divide*/
function div() {
    n1 = Number(tn1.value);
    n2 =Number(tn2.value);
    s = (n1/n2).toFixed(2);
    
    resultadoTotal(s);

    return true;

}  
/*função que recebe dois valores e multiplica*/
function multiplicacao() {
    n1 = Number(tn1.value);
    n2 =Number(tn2.value);
    s = n1*n2;

   resultadoTotal(s);
    return true;
}  

/*função que limpa todos os campas da tela*/
function limparTudo() {
    console.log(tn2)
    tn1.value='';
    tn2.value='';
    res.innerHTML='';

    return true
}


/*função que mostra o resulttado*/
function resultadoTotal(x) {
    res.innerHTML= x;
    return true
}
