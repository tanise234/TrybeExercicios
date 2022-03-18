let number = 10;
let factorial = 1;

for (let index = number; index > 0; index = index - 1) {
    factorial = factorial * index;
}
console.log(factorial);