// preloader page
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});

// hide upper offer
const close__btn = document.querySelector("#close__offer");
const upper__offer = document.querySelector("#upper__offer");
close__btn.addEventListener("click", () => {
  setTimeout(() => {
    upper__offer.style.display = "none";
  }, 290);
  upper__offer.classList.add("hide__offer");
});

// small menu toggle show
const menu__toggler = document.querySelector("#menu__toggler");
const menu = document.querySelector("#menu");
menu__toggler.addEventListener("click", () => {
  menu.classList.toggle("hide__menu");
});

// main menu toggle show
const main__menu__toggler = document.querySelector("#nav__toggler");
const main__menu = document.querySelector("#main__menu");
main__menu__toggler.addEventListener("click", () => {
  main__menu.classList.toggle("show__menu");
});

// slider js code
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// lazy loading
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");

  const lazyLoad = (image) => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    }, options);

    observer.observe(image);
  };

  lazyImages.forEach(lazyLoad);
});
