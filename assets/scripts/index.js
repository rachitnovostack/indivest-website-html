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

// what in it feature
const listItem = document.querySelectorAll(".for-you-lists .item"); 

listItem.forEach(item=>{
    const image = document.querySelectorAll(".what-in-it .images img");
    item.addEventListener('click',(e)=>{
        // remove active class
        listItem.forEach(item=>{
            if(item.classList.contains("active") && item!=e.target){
                item.classList.remove("active");
            }
            if(item==e.target){
                item.classList.add("active");
                switch(e.target){
                    case listItem[0]: 
                    image[0].src="./assets/img/building-home.png";
                    image[0].classList.add("blink");
                    setTimeout(()=>{
                        image[0].classList.remove("blink")
                    },600)
                    break;
                    case listItem[1]: 
                    image[0].src="./assets/img/taking-vacation.png";
                    image[0].classList.add("blink");
                    setTimeout(()=>{
                        image[0].classList.remove("blink")
                    },600)
                    break;
                    default: 
                    image[0].src="./assets/img/retiring-stress-free.png";
                    image[0].classList.add("blink");
                    setTimeout(()=>{
                        image[0].classList.remove("blink")
                    },600)
                }
            }

        })
    })
})

// faq feature
const faqItems = document.querySelectorAll('.faq-item');
const plusIcon = '<i class="fa-solid fa-plus"></i>';
const minusIcon = '<i class="fa-solid fa-minus"></i>';

faqItems.forEach(item => {
    const question = item.querySelector('.question');

    question.addEventListener('click', (e) => {
        // Toggle the 'active' class to show/hide the answer
        console.log((e.target).querySelector(".icon").innerHTML);
        item.classList.toggle('active');
        if(item.classList.contains('active')){
            (e.target).querySelector(".icon").innerHTML = minusIcon;
        }
        else{
            (e.target).querySelector(".icon").innerHTML = plusIcon;
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