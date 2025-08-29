window.onload = function () {
  alert("Welcome to Super Star Awning!");
};

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});