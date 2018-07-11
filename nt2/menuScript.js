
function hover(x,y){
document.getElementById(x).classList.add("linkBgActive");
document.getElementById(y).classList.add("linkInActive");
document.getElementById(x).classList.remove("linkBg");
document.getElementById(y).classList.remove("linkIn");

}

function unhover(x,y){
  document.getElementById(x).classList.add("linkBg");
  document.getElementById(y).classList.add("linkIn");

  document.getElementById(x).classList.remove("linkBgActive");
  document.getElementById(y).classList.remove("linkInActive");

}
