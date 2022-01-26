function randomRange(_min,_max){
    return Number(Math.random()*(_max - _min) + _min).toFixed(2);
} 

function createrMatrix(_i,_j){
    const matrix = [];
    for (let i = 0; i < _i; i++){
        matrix.push(createArray(_j));
    }
    return matrix
}

function createArray(_n){
    const arr = []
    for (let j = 0; j < _n; j++ ){
        console.log(arr);
        arr.push(randomRange(0,100))
    }
    return arr
}

function recursive(_matrix){
    

}



