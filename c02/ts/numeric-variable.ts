let price:number;
let quantity:number;
let total:number;

//給變數值
price=7;
quantity = 14;

//計算
total = price*quantity;

let cost_div=document.getElementById('cost') as HTMLElement //html裡面的id

cost_div.innerText="$"+ total; 
