let popupImages = document.querySelectorAll('.result-details');
let productPopup = document.querySelector('.product-popup');
let backPage = document.querySelector('.main-page-link');

// Loop through each popup image element
popupImages.forEach(popupImage => {
    popupImage.onclick = () => {
        productPopup.classList.add('active-popup');
    };
});

backPage.onclick = () => {
    productPopup.classList.remove('active-popup');
};

var swiper = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper6", {
    loop: true,
    spaceBetween: 10,
    thumbs: {
        swiper: swiper,
    },
});