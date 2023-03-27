const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minutes");
const secondEl = document.querySelector("#seconds");
const ampmEl = document.querySelector("#ampm");

//function to get data from computer
function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  //use of innerTextHTML
  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl, (innerText = ampm);

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
