const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => {
  if (container.classList.contains("white")) {
    container.classList.remove('white');
    toggle.firstElementChild.className = "fa-regular fa-sun"
  } else {
    container.classList.add("white");
    toggle.firstElementChild.className = "fa-regular fa-moon"
  }
});
