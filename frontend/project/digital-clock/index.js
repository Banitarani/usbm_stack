function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let second = now.getSeconds();
  clock.textContent = `${hours}:${minutes}:${second}`;
}
updateClock();
setInterval(updateClock, 1000);
