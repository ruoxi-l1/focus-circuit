let timer;
let totalSeconds = 0;
let elapsed = 0;
let laps = 0;

function startSession() {

  clearInterval(timer);

  let minutes = parseInt(document.getElementById("timeInput").value);
  let lapInterval = parseInt(document.getElementById("lapInput").value);

  totalSeconds = minutes * 60;
  elapsed = 0;
  laps = 0;

  updateUI(lapInterval);

  timer = setInterval(() => {

    elapsed++;

    let remaining = totalSeconds - elapsed;

    let min = Math.floor(remaining / 60);
    let sec = remaining % 60;

    document.getElementById("timer").innerText =
      `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;

    let progress = (elapsed / totalSeconds) * 100;
    document.getElementById("progress").style.width = progress + "%";

    // LAP SYSTEM
    if (elapsed % (lapInterval * 60) === 0) {
      laps++;
      document.getElementById("laps").innerText = laps;
    }

    if (elapsed >= totalSeconds) {
      clearInterval(timer);
    }

  }, 1000);
}

function resetSession() {
  clearInterval(timer);
  document.getElementById("timer").innerText = "00:00";
  document.getElementById("laps").innerText = "0";
  document.getElementById("progress").style.width = "0%";
}

function updateUI() {
  document.getElementById("laps").innerText = "0";
}
