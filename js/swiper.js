const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView:3,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });


// let offset = 0
// const sliderLine = document.querySelector('.swiper-wrapper')

// document.querySelector('.swiper-button-next').addEventListener('click', function(){
//     offset = offset + 150
//     if (offset > 1950) {
//         offset = 0
//     }
// sliderLine.style.left = -offset + 'px'

// })
// document.querySelector('.swiper-button-prev').addEventListener('click', function(){
//     offset = offset - 150
//     if (offset < 0) {
//         offset = 1950
//     }
// sliderLine.style.left = -offset + 'px'

// })
