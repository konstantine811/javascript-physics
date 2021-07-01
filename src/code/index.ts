document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const prelaodEl = document.querySelector('.full-preloader');
  const logoHeader = document.getElementById('header-logo');
  logoHeader.style.opacity = '0';
  setTimeout(() => {
    prelaodEl.classList.add('fade-out');
    logoHeader.style.opacity = '1';
    logoHeader.classList.add('logo-start-anim');
  }, 1000);
}
