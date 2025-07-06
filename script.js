
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });


    const images = ["About1.png", "About2.png", "About3.png"];
  let currentIndex = 0;

  const sliderImage = document.getElementById('slider-image');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  function showImage(index) {
    sliderImage.style.opacity = 0; // Start fade out
    setTimeout(() => {
      sliderImage.src = images[index];
      sliderImage.style.opacity = 1; // Fade in
    }, 200); // Wait briefly before showing new image
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Swipe functionality
  let startX = 0;

  sliderImage.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  sliderImage.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = endX - startX;

    if (diffX > 50) {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    } else if (diffX < -50) {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  });