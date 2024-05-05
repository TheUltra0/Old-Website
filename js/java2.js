var post= document.getElementById('post');
var widget= document.getElementById('star-widget');
var editBtn= document.getElementById('exit');
var x=document.getElementsByTagName("input");
var boxframes = [
  {
    opacity: 1,
  },
  {
    opacity: 0,
  }
]
function animatebox(){
  widget.animate(boxframes2, {
      duration: 1000,
  });
}
function H(){
    widget.style.display="none";
    post.style.display="block";
    setTimeout(function cho() {
      animatebox();
      console.log("Start cho");
      widget.style.display = "block";
      post.style.display = "none";
      
      x[0].checked = false;
      x[1].checked = false;
      x[2].checked = false;
      x[3].checked = false;
      x[4].checked = false;
    }, 4000); 

}
