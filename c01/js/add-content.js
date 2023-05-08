"use strict";
let my_name = "Sc"; //
console.log(my_name);
var xxx_name = "Chang";
console.log(xxx_name);
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 13) {
    greeting = 'Good Afternoon!';
}
else if (hourNow > 17) {
    greeting = 'Good Evening!';
}
else if (hourNow > 0) {
    greeting = 'Good Morning!';
}
else {
    greeting = 'hahaha where are you??';
}
document.write('<h3>' + greeting + '</h3>'); //這是用程式寫的h3
