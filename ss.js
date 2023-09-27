// Remove the following lines since 'lefter' has already been declared above    
var leftVariable = document.getElementById('firstleft');
var right = document.getElementById('firstright');
var fo = document.getElementById('forest');

var sec = document.getElementById('secs');

window.addEventListener('scroll', function () {
   var value = window.scrollY;
   
   if(value>=30 && value<150){
    fo.style.filter = "brightness(" + value/250 + ")";
    
   }
   else if(value==150){
    var w = value/150;
   }
   
   else if(value>150){
    fo.style.filter = "brightness(" + w + ")";
   }
   else{
    fo.style.filter = "brightness(0.2)";
   }
   
   if (value <= 90) {
     
 
     if (sec) {
       sec.style.bottom = value * (-1) + "px";
       sec.style.display = "flex";
     }
   }
   if(value <= 90){
    if (fo) {
      fo.style.top = value * (1) + 'px';
    }
   }
   if (value <= 600) {
     if (leftVariable) {
       leftVariable.style.left = value * (-2.2) + 'px';
     }
     if (right) {
       right.style.right = value * (-2.2) + 'px';
     }
   }
   if (value > 300 && value < 400 ) {
     if (sec) {
       sec.style.bottom = value * (1) + "px";
     }
   }
 
  
 });