

var lefter = document.getElementById('firstleft');
var righter = document.getElementById('firstright');
var hel = document.getElementById('home');
var secondright = document.getElementById('secondright');
var secondleft = document.getElementById('secondleft');
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    console.log(value);
    if(righter && lefter){
    if(value<2000){
    lefter.style.left = value * (1.3) + 'px';
    righter.style.right = value * (1.3) + 'px';
   
    }
}
    if(secondleft && secondright){
    if(value<2050){
        secondleft.style.right = -1870 + value * (1) + 'px';
        secondright.style.left = -1870 + value * (1) + 'px';
    }
}
    if(hel){
    if(value>=2100){
        hel.style.position = 'absolute';
        hel.style.marginTop = '2100px';
    }
    else{
        hel.style.position = 'fixed';
        hel.style.marginTop = '0px';
    }

}
});