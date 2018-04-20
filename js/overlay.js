

function blurFunction(){
  var x = document.getElementById("overlay");
  x.style.backgroundColor = 'rgba(0,0,0,0.0)';

  var y = document.getElementById('searchline');
  y.style.boxShadow = ("none");
  y.style.transition = ('0.2s ease');

}

function focusFunction()
{
  var x = document.getElementById("overlay");
  x.style.backgroundColor = 'rgba(0,0,0,0.7)';

  var y = document.getElementById('searchline');
  y.style.boxShadow = ("0px 2px 4px #000000");
  y.style.transition = ('0.2s ease');
}
