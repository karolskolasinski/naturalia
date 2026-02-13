import "./components/header.js";
import "./components/footer.js";
import "./components/review.js";
import { CountUp } from "./countUp.min.js";

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

let flag = false;
document.addEventListener("mousemove", () => {
  flag = true;
});

const phoneEncoded = "NjY4ODM5ODMz";
const phoneDecoded = window.atob(phoneEncoded);
const phone = document.querySelector("#phone");
phone.addEventListener("click", () => {
  if (flag) {
    const a = document.createElement("a");
    a.href = `tel:${phoneDecoded}`;
    a.innerHTML = phoneDecoded;
    a.classList.add("phone");
    phone.parentNode.appendChild(a);
    phone.parentNode.removeChild(phone);
  }
});

window.onload = function () {
  const countUp = new CountUp("count-up", 25, {
    enableScrollSpy: true,
    startVal: 1,
  });
  countUp.start();
};

const header = document.getElementById("x-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-black");
  } else {
    header.classList.remove("bg-black");
    header.classList.add("bg-transparent");
  }
});

new Rellax(".rellax", { speed: -10 });

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    once: true,
    offset: 200,
    delay: 50,
    duration: 700,
    easing: "ease-in-out",
  });
});
