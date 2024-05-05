function el(){
    if(document.getElementById("check").checked == true){
    document.getElementById("check2").checked = true;
    } 
    if(document.getElementById("check").checked != true){
        document.getElementById("check2").checked = false;
    }
}