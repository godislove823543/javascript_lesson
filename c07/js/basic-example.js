//為所有li元素 加 點擊事件
let liElements=document.querySelectorAll('li') // 获取所有的li元素，返回一个NodeList对象
liElements.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let liElements=event.currentTarget // 获取当前点击的li元素
        $(liElements).hide(1000,()=>{
            liElements.remove()
        })
         //動畫特效 $jquery物件 (element) hide()點一下 隱藏 1000 一秒
         //在主控台顯示 行為
         // 打印当前点击的li元素到控制台
    })
    })
