document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");

  button.addEventListener("click", () => {
    alert("Button clicked!");
    console.log("Button was clicked");
  });
});
