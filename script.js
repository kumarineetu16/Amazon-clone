document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("loginModal");
  const btn = document.getElementById("signinBtn");
  const span = document.querySelector(".close");

  btn.onclick = function () {
    modal.style.display = "flex";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Login successful!");
    modal.style.display = "none";
  });
});