
let offset = 0
const sliderLine = document.querySelector('.swiper-wrapper')

document.querySelector('.swiper-button-next').addEventListener('click', function(){
    offset = offset + 650
    if (offset > 1950) {
        offset = 0
    }
sliderLine.style.left = -offset + 'px'

})
document.querySelector('.swiper-button-prev').addEventListener('click', function(){
    offset = offset - 650
    if (offset < 0) {
        offset = 1950
    }
sliderLine.style.left = -offset + 'px'

})