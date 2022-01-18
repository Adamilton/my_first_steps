let initialSize = 15;

function makeSizer(size) {
    return function () {
        initialSize = initialSize + size;
        document.body.style.fontSize = (initialSize) + 'px';
    };
}

let increase = makeSizer(10);
let decrease = makeSizer(-10);

document.getElementById('max').onclick = increase;
document.getElementById('min').onclick = decrease; 

//alternate code
 /* function zoom(){
    let size= 16;

    function plus(){
        console.log(size);
        size++;
        console.log(document.querySelector('body').style.fontSize = `${size}px`);
    }
    function less(){
        console.log(size);
        size--;
        console.log(document.querySelector('body').style.fontSize = `${size}px`);
    }
    return {
        plus:plus,
        less:less
    }
}
let font = zoom();
document.getElementById('min').onclick = font.less ;
document.getElementById('max').onclick = font.plus; */