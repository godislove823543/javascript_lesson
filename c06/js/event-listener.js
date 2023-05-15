function checkUsername() {
    let feedbackElement = document.getElementById('feedback')
    let username = this.value
    if (username.length < 5) {
        feedbackElement.textContent = "使用者的名稱必需大於5個字元"
    } else {
        feedbackElement.textContent = ""
    }
}

//event listener
/*document.getElementById('button1').addEventListener('click', getText);
*/


document.getElementById('username').addEventListener('blur', checkUsername, false);
//在網頁中的使用者名稱輸入欄位上綁定了一個 "blur" 事件監聽器。當使用者輸入完畢並離開該欄位時，
//就會觸發 checkUsername 函式，以進行相關操作，例如驗證使用者名稱的有效性或執行其他相關任務。