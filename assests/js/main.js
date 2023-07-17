
// patnert swiper js start
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 5,
    spaceBetween: 10,
    autoplay:false,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    }
});

// partner-swiper js end 
// // //   


function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}