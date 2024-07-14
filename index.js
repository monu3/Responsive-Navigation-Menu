function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".close-btn");

  navLinks.classList.toggle("show");

  if (navLinks.classList.contains("show")) {
    menuBtn.style.display = "none";
    closeBtn.style.display = "flex";
  } else {
    menuBtn.style.display = "flex";
    closeBtn.style.display = "none";
  }
}
// Add click event listeners to dropdown items
document.querySelectorAll(".mobile-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const dropMenu = event.target.nextElementSibling;
    dropMenu.classList.toggle("show");
  });
});
