
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

function isValidEmail(email) {
  // Simple email validation using regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkAndShowPopup() {
  var emailInput = document.querySelector('input[type="email"]');
  var queryInput = document.querySelector('textarea');

  var emailValue = emailInput.value.trim();
  var queryValue = queryInput.value.trim();

  // Validate email and query inputs
  if (emailValue === '' || !isValidEmail(emailValue)) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (queryValue === '') {
    alert("Please enter your query.");
    queryInput.focus();
    return;
  }

  var popup = document.getElementById('popup');
  popup.style.display = 'block';

  setTimeout(function () {
    popup.style.display = 'none';
    emailInput.value = ''; // Clear email input field
    queryInput.value = ''; // Clear query input field
  }, 3000); // 3000 milliseconds = 3 seconds
}