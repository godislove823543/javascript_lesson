//一進來游標就顯示 不用自己點
window.addEventListener('load',(event)=>{
    console.log("網頁已載入")
    let usernameElement=document.getElementById("username")
    usernameElement.focus()
})