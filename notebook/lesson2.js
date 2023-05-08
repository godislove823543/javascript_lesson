const prompt=require('prompt-sync')({sigint: true});
let x = parseInt(prompt("請輸入x:")) //轉成整數 浮點數parseFloat
let subtotal = (x+1)*5;
let shipping = 0.3*(x+1);

let total = subtotal + shipping
console.log(total)
