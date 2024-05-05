var bo3;
var counter3 = 0;
function ho3(){
    if(document.getElementById('radio31').checked==true){
        counter3=1;
        clearTimeout(bo3);
        bo3=setTimeout(ho3, 4000);
    }
    if(document.getElementById('radio32').checked==true){
        counter3=2;
        clearTimeout(bo3);
        bo3=setTimeout(ho3, 4000);
    }
    if(document.getElementById('radio33').checked==true){
        counter3=3; 
        clearTimeout(bo3);
        bo3=setTimeout(ho3, 4000);
    }
    if(document.getElementById('radio34').checked==true){
        counter3=4;
        clearTimeout(bo3);
        bo3=setTimeout(ho3, 4000);
    }
    if(document.getElementById('radio35').checked==true){
        counter3=5;
        clearTimeout(bo3);
        bo3=setTimeout(ho3, 4000);  
    }
    counter3++;
    if(counter3==6){
        counter3=1;
    }
    document.getElementById('radio3' + counter3).click();
}
ho3();