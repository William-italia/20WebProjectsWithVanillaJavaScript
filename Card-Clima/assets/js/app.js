const toggle = document.querySelector('.toggle');
const container = document.querySelector('.main-container');
const body = document.querySelector('.body');

toggle.addEventListener('click', () => {
  if (container.classList.contains('dark')) {
    toggle.firstElementChild.className = "fa-regular fa-moon moon";
    container.classList.remove('dark')
    body.classList.add('dark');
  } else {
    toggle.firstElementChild.className = "fa-regular fa-sun sun";
    container.classList.add('dark')
    body.classList.remove('dark');
  }
});