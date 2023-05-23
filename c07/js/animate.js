let liElements=document.querySelectorAll('li')
liElements.forEach((Element)=>{
    Element.addEventListener('click',(event)=>{
        let liElement=event.currentTarget
        $(liElements).animate({  //animate動畫
            opacity:0.2,//不透明度
            paddingLeft:"+=80", //往右移動
        },1000,()=>{
            liElement.remove()
        })
    })
})