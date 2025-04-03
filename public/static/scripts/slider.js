// Her slider için ayrı seçiciler kullanıyoruz
const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(container => {
    const slider = container.querySelector('.slider-content');
    const prevButton = container.querySelector('.prev-button');
    const nextButton = container.querySelector('.next-button');
    const slideWidth = container.querySelector('.slider-item')?.offsetWidth; // 20 is gap

    prevButton.addEventListener('click', () => {
        slider.scrollLeft -= slideWidth;
    });

    nextButton.addEventListener('click', () => {
        slider.scrollLeft += slideWidth;
    });
});