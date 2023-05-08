"use strict";
let price;
let quantity;
let total;
//給變數值
price = 7;
quantity = 14;
//計算
total = price * quantity;
let cost_div = document.getElementById('cost'); //html裡面的id
cost_div.innerText = "$" + total;
