const btn = document.querySelector('[data-menu]');
const nav = document.querySelector('[data-nav]');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

(() => {
  const style = document.createElement('style');
  style.textContent = `
    .chapter-no.has-icon{
      background:transparent !important;
      color:transparent !important;
      width:50px !important;
      height:50px !important;
      min-width:50px !important;
      padding:0 !important;
      border:1px solid rgba(15,17,19,.16);
      overflow:hidden;
    }
    .chapter-no.has-icon img{
      display:block;
      width:100%;
      height:100%;
      object-fit:cover;
      filter:grayscale(1) contrast(1.04);
    }
    .chapter-item.is-fragment .chapter-no.has-icon{
      opacity:.82;
      border-color:rgba(15,17,19,.12);
    }
    .page-hero img.chapter-hero-image{
      filter:none !important;
      opacity:.76 !important;
    }
    .page-hero:after{
      background:linear-gradient(0deg,rgba(0,0,0,.72),rgba(0,0,0,.16)) !important;
    }
    @media(max-width:760px){
      .chapter-no.has-icon{
        width:40px !important;
        height:40px !important;
        min-width:40px !important;
      }
    }
  `;
  document.head.appendChild(style);

  const assetPrefix = /\/(chapters|fragments|contents)\//.test(location.pathname)
    ? '../assets/img/'
    : 'assets/img/';

  function keyFromHref(href) {
    if (!href) return null;
    const clean = href.replace(/^\.\.\//, '').replace(/^\//, '');
    let m = clean.match(/chapters\/(\d+)\.html/);
    if (m) return `chapter-${m[1].padStart(2, '0')}`;
    m = clean.match(/fragments\/(\d+)\.html/);
    if (m) return `fragment-${m[1].padStart(2, '0')}`;
    return null;
  }

  document.querySelectorAll('.chapter-item').forEach((item) => {
    const key = keyFromHref(item.getAttribute('href'));
    if (!key) return;
    const target = item.querySelector('.chapter-no');
    if (!target) return;
    target.classList.add('has-icon');
    const label = target.textContent.trim();
    target.innerHTML = `<img src="${assetPrefix}icons/icon-${key}.png" alt="${label}">`;
  });

  const pageMatch = location.pathname.match(/\/(chapters|fragments)\/(\d+)\.html$/);
  if (pageMatch) {
    const kind = pageMatch[1] === 'chapters' ? 'chapter' : 'fragment';
    const key = `${kind}-${pageMatch[2].padStart(2, '0')}`;
    const hero = document.querySelector('.page-hero img');
    if (hero) {
      hero.classList.add('chapter-hero-image');
      hero.src = `${assetPrefix}heroes/hero-${key}.jpg`;
    }
  }
})();
