function changeVideo(newVideoUrl) {
    var dynamicVideo = document.getElementById('dynamicVideo');
    dynamicVideo.src = newVideoUrl;
    dynamicVideo.load(); // Load the new video

    // Remove the 'active' class from all <li> items
    var liItems = document.querySelectorAll('.GetKnow-tags li');
    for (var i = 0; i < liItems.length; i++) {
      liItems[i].classList.remove('active');
    }

    // Add the 'active' class to the clicked <li> item
    event.target.classList.add('active');

    // Update the <p> tag with the selected list item name
    var pTag = document.querySelector('.GetKnow-tags-box p');
    pTag.textContent = event.target.innerText;

    // Close the dropdown
    toggleTagsList();
  }

  function toggleTagsList() {
    var dropdown = document.querySelector('.GetKnow-tags-list-drop');
    if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  }

  function changeLanguage() {
    var dropdown = document.getElementById("languageDropdown");
    var selectedLanguage = dropdown.value;

    var listItems = document.querySelectorAll('.GetKnow-tags ul li');
    var activeVideo = document.querySelector('.GetKnow-tags li.active');

    // Update the display property of list items
    listItems.forEach(function (item) {
      if (item.dataset.language === selectedLanguage) {
        item.style.display = "list-item";
      } else {
        item.style.display = "none";
      }
    });

    // Check if the active video is visible after language change
    if (activeVideo && activeVideo.style.display === "none") {
      // Find the first visible video in the selected language
      var visibleVideos = document.querySelectorAll('.GetKnow-tags li[data-language="' + selectedLanguage + '"]');
      if (visibleVideos.length > 0) {
        activeVideo.classList.remove('active');
        visibleVideos[0].classList.add('active');

        // Change the video source and load the new video
        var newVideoUrl = visibleVideos[0].getAttribute('onclick').match(/'([^']+)'/)[1];
        var dynamicVideo = document.getElementById('dynamicVideo');
        dynamicVideo.src = newVideoUrl;
        dynamicVideo.load(); // Load the new video
      }
    }
  }

  window.addEventListener('scroll', function() {
    var newsSection = document.getElementById('news');
    var dynamicVideo = document.getElementById('dynamicVideo');

    var rect = newsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      dynamicVideo.pause();
    }
  });

  window.addEventListener('DOMContentLoaded', changeLanguage);