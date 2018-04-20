

function grow(z){
  document.getElementById(z).style.width = '70%';
}

function lbxg(a){
  document.getElementById(a).style.width = '150px';
}

function min(y){
  document.getElementById(y).style.width = '50%';
}
function lbxm(b){
  document.getElementById(b).style.width = '100px';
}


  function rotateIn(){
    document.getElementById('rotate').className = 'over';
    document.getElementById('bxcontainer').style.opacity = '1';
    document.getElementById('bxcontainer').className = 'slideout';
  }



function rotateOut(){
//  setTimeout(function(){
    document.getElementById('rotate').className = 'out';
    document.getElementById('bxcontainer').style.opacity = '0';
    document.getElementById('bxcontainer').className = 'slidein';
//  }, 5000);
}
