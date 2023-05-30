let selectedElement=document.querySelector('#stockSelect')

fetch(new Request('codeSearch.json'))
.then((response)=>{
    return response.json()
}).then((r)=>{
    r.forEach(element=>{ //一直執行 看有多少個
        let name=element.name
        let code=element.code
        let stockName=`${code}-${name}`
    let selectedElement=document.querySelector('#stockSelect')
let optionElement=document.createElement("option")
optionElement.value=code
optionElement.innerText=stockName
selectedElement.appendChild(optionElement)
})
})

let formElement=document.querySelector('form')
formElement.addEventListener('submit',(event)=>{
    event.preventDefault() //讓送出按鈕無效
    let stockId=selectedElement.value //抓股票代碼
    if(stockId.length>4){
        return //跳出function
    }
    console.log(stockId)
    

})