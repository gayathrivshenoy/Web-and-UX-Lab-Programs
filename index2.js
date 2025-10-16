
let arr = [];


let n = parseInt(prompt("How many elements do you want to add?"));

for (let i = 0; i < n; i++) {
  let value = prompt(`Enter value for element ${i + 1}:`);
  arr.push(value);
}

console.log("Elements in the array:");
arr.forEach((element) => console.log(element));
