
const btn = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
