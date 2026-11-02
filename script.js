// ---- carrousel de la page d'accueil ----
document.addEventListener('DOMContentLoaded', function () {
  var slides = document.querySelectorAll('.carousel .slide');
  var dots = document.querySelectorAll('.carousel-dots button');
  if (!slides.length) return;

  var current = 0;
  var DELAY = 5000;

  function show(index) {
    slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
    dots.forEach(function (d, i) { d.classList.toggle('is-active', i === index); });
    current = index;
  }

  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { show(i); resetTimer(); });
  });

  var timer = setInterval(next, DELAY);
  function next() { show((current + 1) % slides.length); }
  function resetTimer() { clearInterval(timer); timer = setInterval(next, DELAY); }

  show(0);
});

// ---- repli des vignettes portfolio sans photo ----
// Si une image de vignette (images/portfolio/xxx.jpg) n'existe pas encore,
// on affiche un bloc avec le titre du projet à la place, plutôt qu'une
// icône d'image cassée.
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.port-thumb img').forEach(function (img) {
    img.addEventListener('error', function () {
      img.style.display = 'none';
      var thumb = img.closest('.port-thumb');
      if (thumb && !thumb.querySelector('.placeholder')) {
        var span = document.createElement('span');
        span.className = 'placeholder';
        span.textContent = img.getAttribute('alt') || '';
        thumb.appendChild(span);
      }
    });
  });
});

// ---- filtres du portfolio (Tout / Fiction / Documentaire / ...) ----
// La barre de filtres est cachée dans le HTML ; elle n'apparaît que si le
// JavaScript fonctionne, pour qu'un visiteur sans JS voie simplement toute la liste.
document.addEventListener('DOMContentLoaded', function () {
  var bar = document.querySelector('.filters');
  if (!bar) return;
  var buttons = bar.querySelectorAll('button');
  var cards = document.querySelectorAll('.port-card');
  bar.hidden = false;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.getAttribute('data-filter');
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
      });
      cards.forEach(function (card) {
        var cats = (card.getAttribute('data-cat') || '').split(' ');
        card.hidden = !(cat === 'all' || cats.indexOf(cat) !== -1);
      });
    });
  });
});
