// header

document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__menu");
  const body = document.body;
  const links = document.querySelectorAll(".header__link");
  const logo = document.querySelector(".header__logo");

  function toggleMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("lock");
  }

  function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }

  burger.addEventListener("click", toggleMenu);

  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) closeMenu();
    });
  });

  logo.addEventListener("click", () => {
    if (window.innerWidth < 992) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });
});

// header

// Example starter JavaScript for disabling form submissions if there are invalid fields

(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();
  
  // Example starter JavaScript for disabling form submissions if there are invalid fields

let submitted = false;

function handleSubmit(e) {
  const form = e.target;

  if (!form.checkValidity()) {
    e.preventDefault();
    e.stopPropagation();
    form.classList.add('was-validated');
    return false;
  }

  submitted = true;

  window.scrollTo(0, 0);
  document.getElementById('form-wrapper').style.display = 'none';

  // SHOW SPINNER PROPERLY
  const loading = document.getElementById('loading');
  loading.classList.add('show');

  // Prevent background scroll
  document.body.style.overflow = 'hidden';

  return true;
}

function checkRedirect() {
  if (submitted) {
    document.body.style.overflow = '';
    window.location.href = '/submission/';
  }
}

//

window.addEventListener("scroll", function() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});