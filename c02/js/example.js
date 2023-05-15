let greeting="Howdy ";
let my_name="Scarlett";
let message=',please check your order:';
let welcome=greeting+my_name+message;
let greetingElement=document.getElementById('greeting'); //document 整個網頁文件
greetingElement.innerText=welcome;

//把id改掉
let sign = "我的咖啡廳"
let userSign_element = document.getElementById('userSign')
userSign_element.innerText = sign;

let tiles = sign.length //磁磚
let tiles_element=document.getElementById('tiles')
tiles_element.innerText = '$'+String(tiles);

let subTotal=tiles*5; //小計
let subTotal_element=document.getElementById('subTotal')
subTotal_element.innerText='$'+String(subTotal)

let shipping=7; //船運
let shipping_element=document.getElementById('shipping')
shipping_element.innerText='$'+shipping;

let grandTotal=shipping+subTotal; //總計
let grandTotal_element =document.getElementById('grandTotal')
grandTotal_element.innerText= '$'+String(grandTotal)


