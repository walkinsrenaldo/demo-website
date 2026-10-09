document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-menu").classList.toggle("open");
});