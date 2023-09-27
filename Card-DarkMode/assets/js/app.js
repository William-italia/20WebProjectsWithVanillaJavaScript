const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
  container.classList.toggle("white")
    ? (toggle.firstElementChild.className = "fa-regular fa-moon")
    : (toggle.firstElementChild.className = "fa-regular fa-sun");
});