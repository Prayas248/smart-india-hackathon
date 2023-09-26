
 

  var fire = firebase.database().ref("ads");
  var teesra = document.getElementById("ads");
  if(teesra){
  teesra.addEventListener("submit", submitForm);
  }
  function submitForm(e) {
    e.preventDefault();
    var name = getElementVal('name');
    var emailid = getElementVal('emailid');
    var passpass = getElementVal('passpass');

    console.log(name,emailid,passpass);
  }
