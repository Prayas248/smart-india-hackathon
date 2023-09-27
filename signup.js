
  var fire = firebase.database().ref("Logup");
  var teesra = document.getElementById("Logup");
  if(teesra){
  document.getElementById("Logup").addEventListener("submit", submitForm);
  }
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var email = getElementVal('emaili');
    var password = getElementVal('passpass');

    console.log(name,email,password);
    saveMessage(name,email,password);
  }
  var saveMessage = (name,emaili,passpass) => {
    
    var LogupRef = firebase.database().ref("Logup");
    var newContactForm = LogupRef.push();
    
    newContactForm.set({
      
      name: name,
      email: emaili, 
      password: passpass,
    });
  };

