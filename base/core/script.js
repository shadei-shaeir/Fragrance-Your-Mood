window.addEventListener('load', () => {
  if (window.location.hash === '#home') {
    document.getElementById('main').style.display = 'flex';
    window.scrollTo(0, 0);
  }
});
