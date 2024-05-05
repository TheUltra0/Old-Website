var bo2;
var counter2 = 0;
function ro(){
    if(document.getElementById('radio1').checked==true){
        counter2=1;
        clearTimeout(bo2);
        bo2=setTimeout(ro, 4000);
    }
    if(document.getElementById('radio2').checked==true){
        counter2=2;
        clearTimeout(bo2);
        bo2=setTimeout(ro, 4000);
    }
    if(document.getElementById('radio3').checked==true){
        counter2=3; 
        clearTimeout(bo2);
        bo2=setTimeout(ro, 4000);
    }
    if(document.getElementById('radio4').checked==true){
        counter2=4;
        clearTimeout(bo2);
        bo2=setTimeout(ro, 4000);
    }
    if(document.getElementById('radio5').checked==true){
        counter2=5;
        clearTimeout(bo2);
        bo2=setTimeout(ro, 4000);
    }
    counter2++;
    if(counter2==6){
        counter2=1;
    }
    document.getElementById('radio' + counter2).click();
}
ro();