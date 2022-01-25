const firebaseConfig = {
    apiKey: "AIzaSyA7uwiPjBrwi-K-mJUnWy3BdsBYFUXtn-4",
    authDomain: "mydatabase-6cf62.firebaseapp.com",
    databaseURL: "https://mydatabase-6cf62-default-rtdb.firebaseio.com",
    projectId: "mydatabase-6cf62",
    storageBucket: "mydatabase-6cf62.appspot.com",
    messagingSenderId: "396747186156",
    appId: "1:396747186156:web:78530b27349b32b19a2ac9"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("MyDataBase");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fname = getElementVal("fname");
    var lname = getElementVal("lname");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msg");
  
    saveMessages(fname, lname, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (fname, lname, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      fname: fname,
      lname: lname,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };