import "./components/header.js";
import "./components/footer.js";
import "./components/review.js";

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerCheckbox = document.getElementById("hamburger");
  const menuItems = document.querySelectorAll(
    "#hamburger ~ ul a, #hamburger ~ ul button, #hamburger ~ ul li > a",
  );

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (hamburgerCheckbox.checked) {
        hamburgerCheckbox.checked = false;
      }
    });
  });
});

const header = document.getElementById("header");
let triggerPoint = window.innerHeight - 150;
const updateHeaderBackground = () => {
  if (window.scrollY > triggerPoint) {
    header.classList.remove("bg-white/20");
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
    header.classList.add("bg-white/20");
  }
};

window.addEventListener("resize", () => {
  triggerPoint = window.innerHeight - 150;
  updateHeaderBackground();
});

window.addEventListener("scroll", updateHeaderBackground);
window.addEventListener("DOMContentLoaded", updateHeaderBackground);

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    offset: 200,
    delay: 50,
    duration: 700,
    easing: "ease-in-out",
  });
});
