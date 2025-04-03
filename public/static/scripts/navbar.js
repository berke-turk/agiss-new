function myFunction() {
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown").classList.remove("show");
}

function urunler() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("myDropdown1").classList.remove("show");
}

document.addEventListener('DOMContentLoaded', function () {
    // Dropdown için click event listener
    const dropdownTrigger = document.querySelector('.menu a[onclick="urunler()"]');
    const dropdownTrigger1 = document.querySelector('.menu a[onclick="myFunction()"]');
    const dropdownContent = document.getElementById('myDropdown');

    if (dropdownTrigger && dropdownContent) {
        dropdownTrigger.addEventListener('click', function (e) {
            dropdownTrigger.classList.toggle('active');
            dropdownTrigger1.classList.remove('active');

            document.getElementById("myDropdown1").classList.remove("show");

            e.preventDefault(); // Varsayılan link davranışını engelle
            dropdownContent.classList.toggle('show');
        });
    }
    if (dropdownTrigger1) {
        dropdownTrigger1.addEventListener('click', function (e) {
            dropdownTrigger1.classList.toggle('active');
            dropdownTrigger.classList.remove('active');

            e.preventDefault(); // Varsayılan link davranışını engelle

        });
    }
    // Menü başlıkları için event listeners
    const menuTitles = document.querySelectorAll('.menu-title');
    const productsSection = document.querySelector('.products-section2');
    const newSection = document.querySelector('.new-section');

    menuTitles.forEach(title => {
        title.addEventListener('click', function () {
            // Seçili başlık stilini güncelle
            menuTitles.forEach(t => t.classList.remove('selected'));
            this.classList.add('selected');

            // İlgili bölümü göster/gizle
            if (this.id === 'ürünler') {
                productsSection.classList.add('active');
                newSection.classList.remove('active');
                // Tüm Ürünler'i active et
                updateActiveImage('orange-products');
            } else if (this.id === 'yeni') {
                newSection.classList.add('active');
                productsSection.classList.remove('active');
                // İlk yeni ürünü active et
                updateActiveImage('new-product-1');
            }
        });
    });

    // Ürün listesi için event listeners
    const menuItems = document.querySelectorAll('.menu-sections li');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            updateActiveImage(targetId);
        });
    });

    function updateActiveImage(targetId) {
        // Tüm resimleri gizle
        document.querySelectorAll('.gallery img').forEach(img => {
            img.classList.remove('active');
        });
        // Hedef resmi göster
        document.getElementById(targetId).classList.add('active');
    }

    // Dropdown dışı tıklamalarda dropdown'ı kapat
    document.addEventListener('click', function (e) {
        if (!dropdownTrigger.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('show');
        }
    });
});

// Diğer mevcut fonksiyonlar
function gizleGoster(ID) {
    var secilenID = document.getElementById(ID);
    if (secilenID.style.right == "-100%") {
        secilenID.style.right = "0%";
        secilenID.style.transition = "all .5s"
    } else {
        secilenID.style.right = "-100%";
    }
}

function gizle(ID) {
    var secilenID = document.getElementById(ID);
    secilenID.style.right = "-100%";
}