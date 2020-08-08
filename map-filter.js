const numbers = [2, 2, 3, 4, 5, 6 ,7];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

function square (element){
    return element * element;
}

onst square = element => element  * element;

const square = x => x * x;

const result = numbers.map(function(x){
    return x * x;
})

const result = numbers.map(x => x * x)
console.log(result);

const bigger = numbers.filter(x => x < 2);

const isBig = numbers.find(x => x > 2);
console.log(isBig)

console.log(bigger)