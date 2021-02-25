const toggleBtn = document.querySelector('.nav_toggleBtn');
const list = document.querySelector('.nav_list');
const icon = document.querySelector('.nav_icon');

toggleBtn.addEventListener('click', () => {
  list.classList.toggle('active');
  icon.classList.toggle('active');
});
