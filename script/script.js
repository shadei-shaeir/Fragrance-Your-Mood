function showMain() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('main').style.display = 'flex';
  window.scrollTo(0, 0);
}

window.addEventListener('load', () => {
  if (window.location.hash === '#home') {
    showMain();
  }
});
