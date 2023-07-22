
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('Movie')

let ticketPrice = +movieSelect.value;

function updateSelectedCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.select');
    const SelectedSeatsCount = selectedSeats.length;
    count.innerText = SelectedSeatsCount;
    total.innerText = SelectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

container.addEventListener('click', (e) => {
    const el = e.target;
    if(el.classList.contains('seat') && !el.classList.contains('occupied')) {
        el.classList.toggle('select');

        updateSelectedCount();
    }
})

