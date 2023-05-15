let firstItem=document.getElementById('one')
if(firstItem.hasAttribute('class')){ //hasAttribute() 方法用于判断是否有指定的属性存在，如果存在返回true，否则返回false
    let classAttri_string=firstItem.getAttribute('class')
    resultsElement=document.getElementById('scriptResults')
    resultsElement.innerHTML='<p>第一個item的class屬性值為:'+classAttri_string+'<\p>'
}