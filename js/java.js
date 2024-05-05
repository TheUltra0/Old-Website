
function F(){
    var yourImg = document.getElementById('poza13');
    document.getElementById("poza13").style.height = yourImg.width + "px";
    var yourImg2 = document.getElementById('poza15');
    document.getElementById("poza15").style.height = yourImg2.width + "px";
    var yourImg3 = document.getElementById('poza17');
    document.getElementById("poza17").style.height = yourImg3.width + "px";
}

var bo;
var counter = 0;
function ro(){
    if(counter==0){
        bo=window.setTimeout(ro, 4000);
    }
    if(document.getElementById('radio1').checked==true){
        counter=1;
        window.clearTimeout(bo);
        bo=window.setTimeout(ro, 4000);
    }
    if(document.getElementById('radio2').checked==true){
        counter=2; 
        window.clearTimeout(bo);
        bo=window.setTimeout(ro, 4000);
    }
    if(document.getElementById('radio3').checked==true){
        counter=3;
        window.clearTimeout(bo);
        bo=window.setTimeout(ro, 4000);
    }
    if(document.getElementById('radio4').checked==true){
        counter=4;
        window.clearTimeout(bo); 
        bo=window.setTimeout(ro, 4000);  
    }
    if(counter==4){
        counter=0;
    }
    counter++;
    document.getElementById('radio' + counter).click();
    
}





