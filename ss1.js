
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {pageLanguage: 'en'},
        'google_translate_element'
    );
}


var he = document.getElementById('head');
window.addEventListener('scroll', function(){
    let values = window.scrollY;
    if(he){
    if(values>120){
    he.style.backgroundColor = "rgba(4, 106, 4,1)";
    
    }
    else{
        he.style.backgroundColor = "rgba(4, 106, 4, 0.7)";
    }
}
    
})