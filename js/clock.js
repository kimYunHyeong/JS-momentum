const time = document.querySelector(".clock h2:first-child");
const second = document.querySelector(".clock h2:last-child");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  time.innerText = `${hours}:${minutes}`;
  second.innerText = `${seconds}`;
}

getClock();
setInterval(getClock, 1000);
