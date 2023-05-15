// is an element that has the same parent element as another element
//這段程式碼是用來選取網頁中的元素並修改它們的樣式類別（class）。假設網頁
//中有一個id為"two"的元素，這段程式碼會找到該元素的前一個兄弟元素和後一個兄
//弟元素，然後將它們的樣式類別分別設定為"complete"和"cool"。


two_element = document.getElementById('two')
var previous_element = two_element.previousElementSibling;
var next_element = two_element.nextElementSibling;
previous_element.className = 'complete'
next_element.className = 'cool'