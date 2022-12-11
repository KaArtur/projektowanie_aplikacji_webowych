function simpleFunction(){
    console.log('Wywołano simpleFunction');
}

simpleFunction();

function rewriteIt(text) {
    console.log(text);
}

rewriteIt('Jakiś tekst');

function sumOfTwo(a, b){
    let sum = a+b;
    console.log(a + ' + '+ b + ' = ' +  sum);
}

sumOfTwo(2,3);

function functionWithReturn(){
    return 'Zwracany tekst';
}

console.log(functionWithReturn());

