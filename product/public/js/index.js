import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
import { getFirestore,addDoc,collection } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDB1nEikfSyia4yWS76A6wKmcsP9SR2Xrk",
    authDomain: "project-javascript-f5727.firebaseapp.com",
    projectId: "project-javascript-f5727",
    storageBucket: "project-javascript-f5727.appspot.com",
    messagingSenderId: "986386632957",
    appId: "1:986386632957:web:61380e21f543995436ae94",
    measurementId: "G-3DKN0JY6VR"
  };
  const app = initializeApp(firebaseConfig);
  const db=getFirestore(app);
  ///////////////////////////////以上都是在firebase複製過來的

  let formElement = document.querySelector('#form')
  let allOfDataObject = {};
  
  
  const setupCurrentDate = () => {
      let current = new Date()
      let year = current.getFullYear()
      let month = current.getMonth()+1
      let date = current.getDate()
  
  
      let month_string = String(month).padStart(2,"0")
      let date_string = String(date).padStart(2,"0")
      let current_date_string = `${year}-${month_string}-${date_string}`
  
      let dateElement = document.querySelector('#warrantyDate')
      dateElement.value = current_date_string
      dateElement.min = current_date_string
  
  }
  
  //setup現在的日期
  setupCurrentDate()
  
  const validateName = ()=>{
      let inputNameElement = document.querySelector('#inputName')
      let nameAlertElement = document.querySelector('#nameAlert')
      let productName = inputNameElement.value
      if (productName.length == 0){
          //console.log("沒有填資料")
          nameAlertElement.classList.remove("close")
          return
      }
     //allOfDataArray.push({'productName':productName})
      allOfDataObject['productName'] = productName
  }
  
  const validateCodeFormat = () =>{
      let inputCodeElement = document.querySelector('#inputCode')
      let codeAlertElement = document.querySelector('#codeAlert')
      let inputCodeValue = inputCodeElement.value
      
      //正規則表達式
      const codePatternReg = /\w\w\w-\w\w\w-\w\w\w/g
  
      if (inputCodeValue.length == 0 || codePatternReg.test(inputCodeValue) == false){
          //console.log("沒有填資料")
          codeAlertElement.classList.remove("close")
          console.log("執行錯誤")
          return
      }
      //allOfDataArray.push({'code':inputCodeValue})
      allOfDataObject['code'] = inputCodeValue
  }
  
  const checkRadioValue = () => {
      let radionElements = document.querySelectorAll('.form-check-input')
      radionElements.forEach(element => {
          if(element.checked){
              //console.log(element.value)
              //allOfDataArray.push({'category':element.value})
              allOfDataObject['category'] = element.value
          }
      })
  }
  
  const warrantyCheck = () =>{
      let checkboxElement = document.querySelector('#warrantyCheck1')
      if (checkboxElement.checked){
          //allOfDataArray.push({'warranty':true})
          allOfDataObject['warranty'] = true
      }else{
          //allOfDataArray.push({'warranty':false})
          allOfDataObject['warranty'] = false
      }
  }
  
  const getWranntyDate = () => {
      let dateElement = document.querySelector('#warrantyDate')
      //allOfDataArray.push({'warrantyDate':dateElement.value})
      allOfDataObject['warrantyDate'] = dateElement.value
  }
  
  const clearAllAlertAndData = ()=>{
      //清除產品警告
      let nameAlertElement = document.querySelector('#nameAlert')
      nameAlertElement.classList.add("close")
  
      //清除code警告
      let codeAlertElement = document.querySelector('#codeAlert')
      codeAlertElement.classList.add("close")
  
      //清除收集的資料
      allOfDataObject = {}
  }
  
  const setEmpty = () => {
      let inputNameElement = document.querySelector('#inputName')
      inputNameElement.value = ""
      let inputCodeElement = document.querySelector('#inputCode')
      inputCodeElement.value = ""
      let radio1Element = document.querySelector('#inlineRadio1')
      radio1Element.checked = true
      let checkboxElement = document.querySelector('#warrantyCheck1')
      checkboxElement.checked = false
      setupCurrentDate()
  }
  
  formElement.addEventListener('submit',async(event)=>{
      clearAllAlertAndData()
      event.preventDefault()
      validateName()
      validateCodeFormat()
      checkRadioValue()
      warrantyCheck()
      getWranntyDate()
      console.log(allOfDataObject)
      try {
        const docRef = await addDoc(collection(db, "products"),allOfDataObject);
          
    
        console.log("這個文件的ID是: ", docRef.id);
        }catch(e){
            console.error("錯誤的添加資訊: ", e);
        }
      setEmpty()
  })