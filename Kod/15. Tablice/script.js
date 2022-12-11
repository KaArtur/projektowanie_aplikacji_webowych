let numericArray = [1, 2, 3];
let stringArray = ['one', 'two', 'three'];
let booleanArray = [true, true, false];
let mixArray = [1, 'one', true];

console.log(numericArray);
console.log(stringArray);
console.log(booleanArray);
console.log(mixArray);

console.log('----------');
let n = numericArray[0];
console.log(n);

console.log('----------');
numericArray[1] = 1000;
console.log(numericArray);

console.log('----------');
console.log(numericArray[3]);

console.log('----------');
console.log(numericArray.includes(4));
console.log(numericArray.includes(1));

console.log('---------');
numericArray.push(4);
console.log(numericArray);

console.log('---------');
console.log(typeof numericArray);
console.log(numericArray.length);
