function changeVideo(newVideoUrl) {
    var dynamicVideo = document.getElementById('dynamicVideo');
    var languageSelect = document.getElementById("languageSelector");
    languageSelect.selectedIndex = 0;
    dynamicVideo.src = newVideoUrl;
    dynamicVideo.load(); // Load the new video

    // Remove the 'active' class from all <li> items
    var liItems = document.querySelectorAll('.GetKnow-tags li');
    for (var i = 0; i < liItems.length; i++) {
      liItems[i].classList.remove('active');
    }

    // Add the 'active' class to the clicked <li> item
    // event.target.classList.add('active');
    findClosestLi(event.target).classList.add('active');
  }

  function findClosestLi(element) {
    if (!element) {
        return null;
    } else if (element.tagName === "LI") {
        return element;
    } else {
        return findClosestLi(element.parentElement);
    }
  }

  function changeLang(){
    console.log("called")
    var dynamicVideo = document.getElementById('dynamicVideo');
    let videoUrl = dynamicVideo.src;
    if(event.target.selectedIndex){
      if(videoUrl === "https://m-imagess.s3.ap-south-1.amazonaws.com/webVideos/1.+About+Indivest+-+English.mp4"){
        dynamicVideo.src = "https://m-imagess.s3.ap-south-1.amazonaws.com/webVideos/1.+About+Indivest+-+HINDI.mp4";
      }
      else{
        dynamicVideo.src = videoUrl.replace("English","Hindi");
      }
    }
    else{
      if(videoUrl != "https://m-imagess.s3.ap-south-1.amazonaws.com/webVideos/1.+About+Indivest+-+English.mp4"){
        dynamicVideo.src = videoUrl.replace("Hindi","English");
      }
      else
      {
        dynamicVideo.src = videoUrl.replace("HINDI","English");
      }
      
    }
    dynamicVideo.load(); // Load the new video

    // Assuming dynamicVideo is a reference to your video element
    dynamicVideo.addEventListener('loadedmetadata', function() {
      // This code will run after the metadata (including duration) has been loaded

      var minutes = Math.floor(dynamicVideo.duration / 60);
      var seconds = Math.floor(dynamicVideo.duration % 60);
      minutes = "<i class='fa-solid fa-play'></i> &nbsp;" + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

      document.querySelector('.GetKnow-tags .active .duration').innerHTML = minutes;
      
      // Add any other code you want to run after the video is loaded here
    });
  }

  

  window.addEventListener('scroll', function() {
    var aboutSection = document.getElementById('what-in-it');
    // console.log(aboutSection)
    var dynamicVideo = document.getElementById('dynamicVideo');

    var rect = aboutSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      dynamicVideo.pause();
    }
  });

  function pauseVideo(element, threshold_value) {
    let heading_observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // console.log(entry.target)
            if (!entry.isIntersecting) {
                entry.target.pause();
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

  // pause video if video not visible on screen
  pauseVideo(document.querySelectorAll('#dynamicVideo'),0.1);
  pauseVideo(document.querySelectorAll('.m-video'),0.1);

  // stoping video on load
  window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#dynamicVideo').pause();
  });