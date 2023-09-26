
  var fire = firebase.database().ref("ads");
  var teesra = document.getElementById("ads");
  if(teesra){
  document.getElementById("ads").addEventListener("submit", submitForm);
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
    
    var adsRef = firebase.database().ref("ads");
    var newContactForm = adsRef.push();
    
    newContactForm.set({
      
      name: name,
      email: emaili, 
      password: passpass,
    });
  };

