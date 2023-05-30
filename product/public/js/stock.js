let selectedElement = document.querySelector('#stockSelect')

fetch(new Request('codeSearch.json'))
    .then((response) => {
        return response.json()
    }).then((r) => {
        r.forEach(element => { //一直執行 看有多少個
            let name = element.name
            let code = element.code
            let stockName = `${code}-${name}`
            let optionElement = document.createElement("option")
            optionElement.value=code
            
            optionElement.innerText = stockName
            selectedElement.appendChild(optionElement)
        });
    })

let formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault() //讓送出按鈕無效
    let stockId = selectedElement.value //抓股票代碼
    if (stockId.length > 4) {
        return //跳出function
    }
    
    //抓到年月份
    let monthElement = document.querySelector('input[type="month"]')
    let fullDateString = monthElement.value
    fullDateString = fullDateString.replace("-", "")
    fullDateString+="01"

    let url = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${fullDateString}&stockNo=${stockId}`

    console.log(url)
    fetch(new Request(url), {'mode': 'cors' })
        .then((response) => {
            return response.json()
        }).then((r) => {
            console.log(r)
            let tbodyElement = document.querySelector('#tbody')
            let rowHtmlString = ""
            r.data.forEach(array => {
                
                rowHtmlString += "<tr>"
                rowHtmlString += `<td>${array[0]}</td>`

                rowHtmlString += `<td>${array[1]}</td>`

                rowHtmlString += `<td>${array[2]}</td>`

                rowHtmlString += `<td>${array[3]}</td>`

                rowHtmlString += `<td>${array[4]}</td>`

                rowHtmlString += `<td>${array[5]}</td>`

                rowHtmlString += `<td>${array[6]}</td>`

                rowHtmlString += `<td>${array[7]}</td>`

                rowHtmlString += `<td>${array[8]}</td>`

                rowHtmlString += "</tr>"
            })
            tbodyElement.innerHTML=rowHtmlString
        })


})