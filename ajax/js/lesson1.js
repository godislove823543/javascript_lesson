let sarea_array=[]
let sareaElement=document.getElementById('sarea')

sareaElement.addEventListener('change',(event)=>{
    let selectedIndex=sareaElement.selectedIndex;
    selectedValue=sareaElement.options[selectedIndex].value
    if(sarea_array.includes(selectedValue)){
        console.log('有這個行政區')
    }
    // console.log(sareaElement.options[selectedIndex].value)
    // sareaElement.options[]
});
function reqListener() {
    let youbikedata=JSON.parse(this.responseText);
    // let sarea_array=[]
    //抓站點資料
    for(const youbike of youbikedata){
        sarea_array.push(youbike.sarea)
    }
    sarea_array=[...new Set(sarea_array)] //set裡的資料不能重複
    let optionElement=document.createElement('option')
    optionElement.textContent='請選擇行政區'
    sareaElement.appendChild(optionElement)
    // console.log(sarea_array)
    //一個一個抓
    for(const area of sarea_array){
        let optionElement=document.createElement('option')
        optionElement.textContent=area
        sareaElement.appendChild(optionElement)//附加元件
    }
}

const windowload = (event) => {
    console.log('網頁已經全部被載入');    
    const req = new XMLHttpRequest();
    req.addEventListener("load", reqListener);//function:reqlistener
    req.open("GET", "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json");
    req.send();//
}
//來處理json的資料

window.addEventListener('load', windowload)