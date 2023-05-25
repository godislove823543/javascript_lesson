let formElement=document.querySelector('#form') //選id要用#

let allOfDataArray=[];

const validateName=()=>{ //驗證name函數
    let inputNameElement=document.querySelector('#inputName')
    let productName=inputNameElement.value
    let nameAlertElement=document.querySelector('#nameAlert')
    //沒填資料的話 顯示警告訊息
    if(productName.length ==0){
       //看主控台 填資料 點送出按鈕
        console.log("沒有填資料")
        nameAlertElement.classList.remove('close') //把alert close的close移除
        return  //沒有填寫就跳出 
    }
      console.log(productName) 
      allOfDataArray.push({'productName':productName} )//key:value
}

const clearAllAlertAndData=()=>{
    //清除產品警告
    let nameAlertElement=document.querySelector('#nameAlert')
    nameAlertElement.classList.add("close")

    //清除code警告
    let codeAlertElement=document.querySelector('#codeAlert')
    codeAlertElement.add("close")

    //清除收集的資料(舊資料 警告訊息)
    allOfDataArray=[]
}

const validateCodeFormat=()=>{ //在 產品編號那
    let inputCodeElement=document.querySelector('#inputCode')
    let codeAlertElement=document.querySelector('#codeAlert')
    let inputCodeValue=inputCodeElement.value //輸入資料
    console.log(inputCodeValue)
    if(inputCodeValue.length ==0){
        //看主控台 填資料 點送出按鈕
         console.log("沒有填資料")
         inputCodeElement.classList.remove('close') //把alert close的close移除
         return  //沒有填寫就跳出 
     }
     allOfDataArray.push('code':inputCodeValue) //把輸入的資料放進陣列李
}

formElement.addEventListener('submit',(event)=>{
    clearAllAlertAndData()
    event.preventDefault() //先不要動
    validateName()
    validateCodeFormat()
    console.log(allOfDataArray) //收集填寫的資料
})