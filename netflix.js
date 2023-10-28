document.addEventListener('DOMContentLoaded', function() {
    // Navigation bar interaction
    const navbar = document.querySelector('.navbar');
    const langSelect = document.getElementById('lang_select');
    const signButton = document.querySelector('.sign_in_button');
  
    langSelect.addEventListener('change', function() {
      alert('Selected language: ' + langSelect.value);
    });
  
    signButton.addEventListener('click', function() {
      alert('Sign In button clicked');
    });
  
    // Image slider
    const images = document.querySelectorAll('.bg_img');
    let currentImageIndex = 0;
  
    function showImage(index) {
      images[currentImageIndex].classList.remove('active');
      images[index].classList.add('active');
      currentImageIndex = index;
    }
  
    function nextImage() {
      const nextIndex = (currentImageIndex + 1) % images.length;
      showImage(nextIndex);
    }
  
    function prevImage() {
      const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage(prevIndex);
    }
  
    // Auto-advance the image slider
    const sliderInterval = setInterval(nextImage, 5000);
  
    // Add event listeners to the image slider controls
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');
  
    nextButton.addEventListener('click', function() {
      clearInterval(sliderInterval);
      nextImage();
      sliderInterval = setInterval(nextImage, 5000);
    });
  
    prevButton.addEventListener('click', function() {
      clearInterval(sliderInterval);
      prevImage();
      sliderInterval = setInterval(nextImage, 5000);
    });
  });
  