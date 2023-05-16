let messageElement=document.getElementById('message');
let lastkeyElement=document.getElementById('lastKey');
let charDisplay=document.getElementById('charactersLeft');
messageElement.addEventListener('keyup',(event)=>{ //keyboard的event 然後去查有哪些
    lastkeyElement.textContent=`最後一個key:${event.key},keycode:${event.code}`; //textContent去改變div裡的值
    let textEnter=messageElement.value
    let counter=180-textEnter.length
    charDisplay.textContent=`還剩下${counter}個`
})