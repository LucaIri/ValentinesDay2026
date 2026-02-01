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

const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("click", () => {
  const padding = 100;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = padding + Math.random() * (maxX - padding);
  const randomY = padding + Math.random() * (maxY - padding);

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

noBtn.addEventListener("mouseenter", () => {
  noBtn.click();
});

const yesBtn = document.getElementById("yes-btn");

const assets = [
  "assets/heart_1.svg",
  "assets/tulip.svg",
  "assets/rose.svg",
];

yesBtn.addEventListener("click", () => {
  setInterval(() => {
    const img = document.createElement("img");
    img.src = assets[Math.floor(Math.random() * assets.length)];
    img.classList.add("falling");

    img.style.left = Math.random() * window.innerWidth + "px";
    img.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(img);

    setTimeout(() => img.remove(), 6000);
  }, 200);
});
