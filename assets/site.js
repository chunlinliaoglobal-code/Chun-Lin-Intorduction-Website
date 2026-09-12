const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-navigation');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(expanded));
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.focus();
  }
});
document.querySelector('#print-cv')?.addEventListener('click',()=>window.print());
if(document.body.classList.contains('cv-page')) document.querySelectorAll('details').forEach(d=>d.open=true);
const legacyPages={research:'research.html',publications:'papers.html',experience:'experience.html',teaching:'teaching.html',education:'education.html',awards:'awards.html',leadership:'beyond-research.html'};
if(document.body.classList.contains('page-about') && legacyPages[location.hash.slice(1)]) location.replace(legacyPages[location.hash.slice(1)]);
