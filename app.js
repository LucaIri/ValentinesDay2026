const goose = document.getElementById("goose");
const headerText = document.getElementById("header-text");

const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");

const barkSound = document.getElementById("bark-sound");

// Optional bark loop
setInterval(() => {
  barkSound.currentTime = 0;
  barkSound.play();
}, 3000);

// Click Goose → Screen 2
goose.addEventListener("click", () => {
  headerText.style.opacity = 0;

  setTimeout(() => {
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
  }, 500);
});