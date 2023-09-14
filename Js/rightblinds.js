let searchBtn = document.querySelector('.search-btn');
let searchBar = document.querySelector('.search-bar');
let closeSearch = document.querySelector('.close-search')

  searchBtn.onclick = ()=>{
    searchBar.classList.add('active-search')
  }
  closeSearch.onclick = ()=>{
      searchBar.classList.remove('active-search')
  }

// nav bar mbl js 

let openNav = document.querySelector('.nav-links');
let navBtn = document.querySelector('.toggle-bar');
let closeNav = document.querySelector('.close-nav');

   navBtn.onclick = ()=>{
       openNav.classList.add('active-nav')
   }
   closeNav.onclick = ()=>{
       openNav.classList.remove('active-nav')
   }


var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mySwiper4", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


   
 