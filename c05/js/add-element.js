let newLiElement=document.createElement('li')
let newTextNode=document.createTextNode("新項目") //把這個加到li下面
newLiElement.appendChild(newTextNode)
var ulElement=document.getElementsByTagName('ul')[0]
ulElement.appendChild(newLiElement)