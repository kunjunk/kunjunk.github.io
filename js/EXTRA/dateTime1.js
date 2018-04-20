function getTime() {
  var datetime = new Date();
  var hour = datetime.getHours();
  if (hour.toString().length == 1) {
    var hour = '0' + hour;
  }
  var tTime = hour;
  return tTime;
}

//var element = document.getElementById("time");
//element.innerHTML = getTime();

document.getElementById("hour").textContent = getTime();
