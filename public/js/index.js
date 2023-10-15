// import ScrollReveal
const ScrollReveal = require('scrollreveal');

/*========== SCROLL REVEAL ANIMATION ==========*/
window.sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    reset: false
});

sr.reveal(`.animate_top`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.animate_left`, {
  origin: 'left',
  interval: 100,
});

sr.reveal(`.animate_right`, {
    origin: 'right',
    interval: 100,
})

// Document Loaded
document.addEventListener('DOMContentLoaded', () => {});
