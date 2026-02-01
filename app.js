let barkInterval = null;

const goose = document.getElementById("goose");
const headerText = document.getElementById("header-text");
const start = document.getElementById("start-butt");

const screen0 = document.getElementById("screen-0");
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");

const barkSound1 = document.getElementById("bark-sound-1");

// // Optional bark loop
// setInterval(() => {
//   barkSound1.currentTime = 0;
//   barkSound1.play();
// }, 1200);

// c lick button to begin
start.addEventListener("click", () => {
  headerText.style.opacity = 0;
  start.style.opacity = 0;

  if (!barkInterval) {
    barkInterval = setInterval(() => {
      barkSound1.currentTime = 0;
      barkSound1.play();
    }, 1200);
  }

  setTimeout(() => {
    screen0.classList.add("hidden");
    screen1.classList.remove("hidden");
  }, 500);
})

// Click Goose → Screen 2
goose.addEventListener("click", () => {
  headerText.style.opacity = 0;

  if (!barkInterval) {
    barkInterval = setInterval(() => {
      barkSound1.currentTime = 0;
      barkSound1.play();
    }, 1200);
  }

  setTimeout(() => {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  }, 500);
});

const gooseScroll = document.getElementById("goose-scroll");
const screen3 = document.getElementById("screen-3");

// Click scroll → reveal letter
gooseScroll.addEventListener("click", () => {
  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");

  if (barkInterval) {
    clearInterval(barkInterval);
    barkInterval = null;
  }
});
