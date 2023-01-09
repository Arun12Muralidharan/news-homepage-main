const menuButton = document.querySelector(".menu-icon");
const backDrop = document.querySelector(".backdrop");
const navigationContent = document.querySelector(".navigation-content");
const menuClose = document.querySelector(".close-menu");

menuButton.addEventListener("click", toggle);
menuClose.addEventListener("click", toggle);

function toggle() {
  backDrop.classList.toggle("backdrop-active");
  navigationContent.classList.toggle("active");
}
