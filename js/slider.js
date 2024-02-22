const items = document.querySelectorAll('.slider__item');
const sliderLine = document.querySelector('.slider-line');
const next = document.querySelector('.slider-next');
const prev = document.querySelector('.slider-prev');
let counter = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * items.length + 'px';
    items.forEach(item => {
        item.style.width = width + 'px';
    })

}

next.addEventListener('click', () => {
    counter++;
    if (counter >= items.length) {
        counter = 0;
    }
    rollSlider();
});
prev.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = items.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + counter * width + 'px)'
}

window.addEventListener('resize', init);
init();