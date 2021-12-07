var sidebar_off_btn = document.getElementById("close-sidebar");
var sidebar_in_btn = document.getElementById("open-sidebar");
var sidebar = document.getElementById("sidebar");
const sidebar_toggler = (_) => {
  sidebar.classList.toggle("nav-slide-off");
};

sidebar_off_btn.addEventListener("click", sidebar_toggler);
sidebar_in_btn.addEventListener("click", sidebar_toggler);
