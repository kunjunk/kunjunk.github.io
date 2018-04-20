
function getTime2() {
  var datetime = new Date();
  var minute = datetime.getMinutes();

  if (minute.toString().length == 1) {
    var minute = '0' + minute;
  }
  var tTime2 = minute;
  return tTime2;
}

setInterval(function update(){
  document.getElementById("minute").textContent = getSeconds();
},
5000
);
