let mevcutGorsel = 0;
const gorseller = [
    "static/parfum.jpg",
    "static/parfum.jpg",
    "static/parfum.jpg",
    "static/parfum.jpg",
    "static/parfum.jpg",
    "static/parfum.jpg"
];
const kucukResimler = document.querySelectorAll('.small-image');
const anaGorsel = document.getElementById('anaGorsel');

function gorselDegistir(index) {
    mevcutGorsel = index;
    anaGorsel.src = gorseller[index];

    // active küçük resmi güncelle
    kucukResimler.forEach((resim, i) => {
        if (i === index) {
            resim.classList.add('active');
        } else {
            resim.classList.remove('active');
        }
    });
}

function gorselleriGezin(yon) {
    mevcutGorsel = (mevcutGorsel + yon + gorseller.length) % gorseller.length;
    gorselDegistir(mevcutGorsel);
}