function getTime() {
  var datetime = new Date();
  var hour = datetime.getHours();
  var minute = datetime.getMinutes();
  var seconds = datetime.getSeconds();
  if (hour.toString().length == 1) {
    var hour = '0' + hour;
  }
  if (minute.toString().length == 1) {
    var minute = '0' + minute;
  }
  if (seconds.toString().length == 1){
    var second = '0' + seconds;
  }
  var tTime = hour + ':' + minute + ':' + seconds;
  return tTime;
}

//var element = document.getElementById("time");
//element.innerHTML = getTime();

document.getElementById("time").textContent = getTime();
