let receipt = 0;
function clickBtn() {
    const luckyBtn = document.getElementById('luckyBtn');
    disableOrEnableBtn(luckyBtn);
    count = 1;
    let luckyNumber = [];
    clearInterval(receipt);

    receipt = setInterval(function () {
        const randomNumber = luckyRandomNumber(1, 10);
        console.log(`random: ${randomNumber}`);
        luckyNumber = testIncrement(luckyNumber,randomNumber);
        
        if (6 <= luckyNumber.length) {
            count++
            disableOrEnableBtn(luckyBtn);
            clearInterval(receipt);
            showLuckyNumber(luckyNumber[luckyNumber.length-1]);
            showLuckyNumber("<br/>");
        }else if(luckyNumber.length === count){
            count++
            showLuckyNumber(luckyNumber[luckyNumber.length-1]);
        }
    }, 1000);

    console.log(`recibo: ${receipt}`)
    
    return true
}

function luckyRandomNumber(_max, _min) {
    return Number(parseFloat((Math.random() * (_max - _min) + _min)).toFixed(0));
}

function disableOrEnableBtn(_value){
    if(_value.disabled){
        _value.disabled = false;
    }else{
        _value.disabled = true;
    }
   return true
}

function showLuckyNumber(_value) {
    document.getElementById('text').innerHTML = "Números sorteados:";
    document.getElementById('result').innerHTML += ` ${_value} `;

    return true;
}

function testIncrement(_arr,_value){
    let test = true;
    let result;
    if(_arr.length === 0){
        result = [_value];
    }
    
    for(let i = 0;i < _arr.length; i++){
        if(_arr[i] === _value){
            test = false;
        }
    }
    result = _arr;
    (test === true)?(result.push(_value)):false
    console.log(result)
   return result
}