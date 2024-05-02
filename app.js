const container = document.querySelector('.container');
document.querySelector('.sliding').addEventListener('input', (e) => {
  container.style.setProperty('--position', `${e.target.value}%`);
})