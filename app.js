function countDown() {
  // Retrieve current time - stores as miliseconds
  const currentTime = new Date().getTime();

  // Time of the count down - stores as miliseconds
  const christmas = new Date("Dec 24, 2018 23:59:59").getTime();
  // Remaining time until christmas - in miliseconds
  let difference = christmas - currentTime;

  // Time calculations
  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
// Makes the clock numbers to be two digit number
  if (days < 10) {
    days = "0" + days;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
  
  // When Christmas
  if (difference < 0) {
    clearInterval(countDown);
    let parent = document.getElementsByClassName("clock");
    let child = document.getElementsByTagName("span");
    parent.removeChild(child);

    let christmasMsg = document.getElementsByTagName("h3");
    christmasMsg.innerHTML = "MERRY CHRISTMAS !";
    christmasMsg.style.fontSize = "3.1rem";
  }
}

setInterval(countDown, 1000);
