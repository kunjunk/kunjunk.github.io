
setInterval(function getSeconds() {
  var datetime = new Date();
  var seconds = datetime.getSeconds();

  if (seconds.toString().length == 1) {
    var seconds = '0' + seconds;
  }
  var tTime3 = seconds;
  return tTime3;
},
1000
);

document.getElementById("seconds").textContent = getSeconds();
