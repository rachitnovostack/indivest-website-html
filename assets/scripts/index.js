// Navbar fixed
const navbar = document.querySelector('.navbar');
let preScrollPos = window.screenY || document.documentElement.scrollTop;

window.onscroll = function(){
    if(document.documentElement.scrollTop> 80){
        navbar.classList.add('shadow')
    }
    if(document.documentElement.scrollTop<80){
        navbar.classList.remove("shadow")
    }
}
// Toggle Button (Nav)
const toggleBtn = document.getElementById('toggle-btn');
const bars = '<i class="fa-solid fa-bars toggle-icon"></i>';
const cross = '<i class="fa-solid fa-xmark toggle-icon"></i>';
const toggleNav = document.querySelector(".toggle-nav");
const links_obj = document.querySelectorAll('.toggle-nav .nav-item');
const links_arr = [];
links_obj.forEach(item=>{
    links_arr.push(item);
})
links_arr.push(toggleBtn)
let isOpen = false;

links_arr.forEach(item=>{
    item.addEventListener('click',()=>{
        if(isOpen){
    
            document.body.style.overflow = "auto";
    
            toggleBtn.innerHTML = bars;
            isOpen = false;
            
            toggleNav.classList.toggle('toggle-smooth');
            toggleNav.style.height = '0px'; 
    
            setTimeout(()=>{
                toggleNav.classList.toggle('toggle-smooth');
            },800);
            
        }
        else{
    
            document.body.style.overflow = "hidden";
    
            toggleBtn.innerHTML = cross;
            isOpen = true;
    
            toggleNav.style.display = "block";
    
            if (toggleNav.style.height === '0px' || toggleNav.style.height === '') {
                toggleNav.style.height = '340%';
                toggleNav.classList.toggle('toggle-smooth');
            } 
    
            setTimeout(()=>{
                toggleNav.classList.toggle('toggle-smooth');
            },800);
        }
    })
})


// What in it section
document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll('.images img');
        var index = 0;

        function displayNextImage() {
            images[index].style.display = 'none';
            index = (index + 1) % images.length; // Move to the next image or reset to the first one
            images[index].style.display = 'block';
            setTimeout(displayNextImage, 1500); // Adjust the delay as needed
        }

        // Start the sequential display
        displayNextImage();
})

const faqItems = document.querySelectorAll('.faq-item');
const plusIcon = '<i class="fa-solid fa-plus"></i>';
const minusIcon = '<i class="fa-solid fa-minus"></i>';

faqItems.forEach(item => {
    const question = item.querySelector('.question');
    const icon = item.querySelector('.question .icon');

    item.addEventListener('click', (e) => {
        // Toggle the 'active' class to show/hide the answer
        console.log((e.target).querySelector(".icon").innerHTML);
        console.log("called here also")
        item.classList.toggle('active');
        e.target.querySelector(".icon").innerHTML = ""
        if (item.classList.contains('active')) {
            (e.target).querySelector(".icon").innerHTML = minusIcon;
        } else {
            (e.target).querySelector(".icon").innerHTML = plusIcon;
        }
    });
    
    icon.addEventListener('click', (e) => {
        e.target.innerHTML = " "
        // Toggle the 'active' class to show/hide the answer
        e.stopPropagation(); // Stop the event from propagating up to the item
        console.log("icon clicked");
        console.log(e.target)
        let i = findClosestLi(e.target);
        function findClosestLi(element){
            if (!element) {
                return null;
            } else if (element.tagName === "DIV") {
                return element;
            } else {
                return findClosestLi(element.parentElement);
            }
        }
        
        item.classList.toggle('active');
        if (item.classList.contains('active')) {
            i.innerHTML = minusIcon;
        } else {
            i.innerHTML = plusIcon;
        }
    });
    

    
});

let count = 0;
const faq_items = document.querySelectorAll('.faq-item.none');

// faq click
document.querySelector('.faq-section .read-more-btn').addEventListener('click',()=>{
    faq_items.forEach(item=>{
        
        item.classList.toggle("none");
        if(count%2 !== 0){
            document.querySelector('.faq-section .read-more-btn').innerHTML = "View More";  
        }
        else{
            document.querySelector('.faq-section .read-more-btn').innerHTML = "View Less";
        }
    })
    count++;
})

// Smooth scroll animation
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      console.log("target scroll is ",target)
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
});