let headerordermenu = document.querySelector('.header-order-menu');
let mobordermenu = document.querySelector('.mob-order-menu');
let backdroporder = document.querySelector('.backdrop-order');
let orderclosemodal = document.querySelector('.order-close-modal');

headerordermenu.addEventListener('click', () => {
  backdroporder.classList.add('is-open');
});

mobordermenu.addEventListener('click', () => {
  backdroporder.classList.add('is-open');
});

orderclosemodal.addEventListener('click', e => {
  e.preventDefault();
  backdroporder.classList.remove('is-open');
});
