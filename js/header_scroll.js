window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('header--scroll', window.scrollY > 550);
});