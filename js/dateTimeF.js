function getHours() {
  var datetime = new Date();
  var hour = datetime.getHours();
  if (hour.toString().length == 1) {
    var hour = '0' + hour;
  }
  var tHours = hour;
  return tHours;
}
function getMinutes() {
  var datetime = new Date();
  var minute = datetime.getMinutes();

  if (minute.toString().length == 1) {
    var minute = '0' + minute;
  }
  var tMinutes = minute;
  return tMinutes;
}
function getSeconds() {
  var datetime = new Date();
  var seconds = datetime.getSeconds();

  if (seconds.toString().length == 1) {
    var seconds = '0' + seconds;
  }
  var tSeconds = seconds;
  return tSeconds;
}
setInterval(function update(){
  document.getElementById("hour").textContent = getHours();
  document.getElementById("minute").textContent = getMinutes();
  document.getElementById("seconds").textContent = getSeconds();
},
1000
);
