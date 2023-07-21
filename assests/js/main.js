
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


// 
function auto_grow(element) {
  element.style.height = "5px";
  element.style.height = (element.scrollHeight) + "px";
}

function checkAndShowPopup() {
  var emailInput = document.querySelector('input[type="email"]');
  var queryInput = document.querySelector('textarea');

  if (emailInput.value.trim() !== '' || queryInput.value.trim() !== '') {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';

    setTimeout(function () {
      popup.style.display = 'none';
      emailInput.value = '';
      queryInput.value = ''; 
    }, 3000); 
  }
}