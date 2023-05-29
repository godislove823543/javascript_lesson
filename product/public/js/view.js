import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js'
import { getFirestore,collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js'

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

  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach(doc => {
    console.log(doc.id)
    let documentData=doc.data()
    console.log(documentData['productName'])
  });