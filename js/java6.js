var bo;
var counter = 0;
function ho(){
    if(document.getElementById('radio21').checked==true){
        counter=1;
        clearTimeout(bo);
        bo=setTimeout(ho, 4000);
    }
    if(document.getElementById('radio22').checked==true){
        counter=2;
        clearTimeout(bo);
        bo=setTimeout(ho, 4000);
    }
    if(document.getElementById('radio23').checked==true){
        counter=3; 
        clearTimeout(bo);
        bo=setTimeout(ho, 4000);
    }
    counter++;
    if(counter==4){
        counter=1;
    }
    document.getElementById('radio2' + counter).click();
}
ho();