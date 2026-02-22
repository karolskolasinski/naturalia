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

const header = document.getElementById("x-header");
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

new Splide(".splide", {
  type: "loop",
  autoplay: true,
  drag: true,
  perPage: 3,
  breakpoints: {
    640: {
      perPage: 1,
    },
  },
  classes: {
    page: "splide__pagination__page !bg-indigo-600 mt-10",
    arrows: "hidden",
  },
}).mount();

// const form = document.getElementById("contact-form");
// const status = document.getElementById("form-status");
// form.addEventListener("submit", async function (e) {
//   e.preventDefault();
//
//   const formData = new FormData(form);
//   const response = await fetch(form.action, {
//     method: form.method,
//     body: formData,
//     headers: { "Accept": "application/json" },
//   });
//
//   if (response.ok) {
//     form.reset();
//     status.classList.remove("hidden");
//     setTimeout(() => status.classList.add("hidden"), 5000);
//   } else {
//     console.error("Błąd przy wysyłaniu formularza");
//   }
// });
