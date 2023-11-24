function moveX(element, threshold_value) {
    let heading_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // console.log(entry.target)
            if (entry.isIntersecting) {
                entry.target.style.transition = "0.6s ease";
                entry.target.style.transform = 'translateX(0px)';
                entry.target.style.opacity = '1';
                heading_observer.unobserve(entry.target);
            }
        })
        // console.log(entries)
    }, {
        threshold: threshold_value
    })

    element.forEach(e => {
        heading_observer.observe(e)
    });
}

function moveY(element, threshold_value) {
    let heading_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // console.log(entry.target)
            if (entry.isIntersecting) {
                entry.target.style.transition = "0.6s ease";
                entry.target.style.transform = 'translateY(0px)';
                entry.target.style.opacity = '1';
                heading_observer.unobserve(entry.target);
                console.log(entry.target)
                if(entry.target == document.querySelector('.service-card:nth-child(2)')){
                    document.querySelector('.service-cards').style.marginTop = '50px';
                    console.log("yes")
                }
            }
        })
        // console.log(entries)
    }, {
        threshold: threshold_value
    })

    element.forEach(e => {
        heading_observer.observe(e)
    });
}

function addShadow(element,threshold_value) {
    let heading_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // console.log(entry.target)
            if (entry.isIntersecting) {
                entry.target.style.transition = '0.3s';
                entry.target.style.opacity = 1;
                entry.target.style.boxShadow = "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
                
            }
            else{
                entry.target.style.transition = '0.3s';
                entry.target.style.boxShadow = "none";
                entry.target.style.opacity = "0.4";
            }
        })
        // console.log(entries)
    }, {
        threshold: threshold_value
    })

    element.forEach(e => {
        heading_observer.observe(e)
    });
}

function increaseValue(org,element,pre,sub,counter,speed) {
    // let current = 1;
    let counter_speed  = counter;
    let intervalId = setInterval(() => {
        // element.innerHTML = current;
        element.innerHTML = counter;
        if (counter == org) {
            clearInterval(intervalId)
            // element.innerHTML = current + sub;
            if(element == document.getElementById("thousand")){
                let a = counter.toString().split("")
                a.splice(1,0,',')
                // a.join("")
                element.innerHTML = pre + a.join("") + sub;
            }
            else{
                element.innerHTML = pre + counter + sub;
            }
        }
        // current++;
        counter+=counter_speed;
    },speed) //20
}


moveX(document.querySelectorAll('.hero-section .hero-content'),0.5);
moveX(document.querySelectorAll('.hero-section .iphone-container'),0.2);
moveX(document.querySelectorAll('.what-in-it .content'),0.1);
moveX(document.querySelectorAll('.what-in-it .images'),0.1);

// services animation
moveY(document.querySelectorAll('.service-card:nth-child(2)'),0.6);
moveY(document.querySelectorAll('.service-card:nth-child(1)'),0.3);
moveY(document.querySelectorAll('.service-card:nth-child(3)'),0.3);

// features animation
moveX(document.querySelectorAll('.block:nth-child(even) .feature'),0.1);
moveX(document.querySelectorAll('.block:nth-child(odd) .feature'),0.1);

// news animation
moveY(document.querySelectorAll('.news-section .row'),0.2);

// blog animation
moveY(document.querySelectorAll('.blog-section .blog-card:nth-child(2)'),0.1);
moveX(document.querySelectorAll('.blog-section .blog-card:nth-child(1)'),0.2);
moveX(document.querySelectorAll('.blog-section .blog-card:nth-child(3)'),0.2);

// faq animation
moveX(document.querySelectorAll('.faq-section .content:nth-child(1)'),0.1);
moveX(document.querySelectorAll('.faq-section .content:nth-child(2)'),0.1);
// videos section
addShadow(document.querySelectorAll('.about-section .video-container'),0.5);

increaseValue(document.querySelector(28,'.data-section .data:nth-child(1)'),"","",)