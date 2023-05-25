let formElement=document.querySelector('#form') //選id要用#


const validateName=()=>{ //驗證name函數
    let inputNameElement=document.querySelector('#inputName')
    let productName=inputNameElement.value
        console.log(productName) //看主控台 填資料 點送出按鈕
}

formElement.addEventListener('submit',(event)=>{
    event.preventDefault() //先不要動
    validateName()
})