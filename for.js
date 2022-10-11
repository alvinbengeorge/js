const array = [1, 3, 4, 6];
var sum = 0;
for (let i of array) {
    console.log("+", i);
    sum = sum + i;
}
console.log("---");
console.log(sum)