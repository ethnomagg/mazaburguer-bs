document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll("nav.main-nav ul li a");
  const langSwitcher = document.querySelector(".lang-switcher");
  const esElements = document.querySelectorAll(".es");
  const enElements = document.querySelectorAll(".en");
  const navbar = document.querySelector(".navbar-toggler");
  const overlay = document.querySelector(".overlay");
  const navbarCollapse = document.getElementById("navbarNav");
  const menuItems = document.querySelectorAll(
    ".navbar-nav .nav-link, .navbar-nav .language-icon, .navbar-nav .search-icon-img"
  );
  const form = document.querySelector(".registration-form");

  function setActiveLink() {
    let fromTop =
      window.scrollY + document.querySelector("header").offsetHeight;

    menuLinks.forEach((link) => {
      link.classList.remove("active");
      let section = document.querySelector(link.hash);
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", setActiveLink);
  setActiveLink();

  langSwitcher.addEventListener("click", function () {
    esElements.forEach((el) => el.classList.toggle("d-none"));
    enElements.forEach((el) => el.classList.toggle("d-none"));
  });

  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  navbar.addEventListener("click", function () {
    overlay.classList.toggle("show");
    navbar.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  overlay.addEventListener("click", function () {
    overlay.classList.remove("show");
    navbarCollapse.classList.remove("show");
    navbar.classList.remove("active");
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      overlay.classList.remove("show");
      navbarCollapse.classList.remove("show");
      navbar.classList.remove("active");
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
        alert("Por favor, complete todos los campos requeridos");
      } else {
        console.log("Formulario enviado correctamente");
        form.reset();
      }
      form.classList.add("was-validated");
    });
  }
});
