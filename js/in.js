// ******************* progreess bar  ****************************

let element = document.getElementById('pgbar');
// Add an event listener to detect when the animation ends
element.addEventListener('animationend', () => {
  element.classList.add("hide");
});


// ************************ image slider home *************************
let slideIndex = 0;
let timer;

showSlides();
startAutoSlideshow();

function plusSlides(n) {
  resetAutoSlideshowTimer();
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  resetAutoSlideshowTimer();
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Calculate the translation value for the sliding effect
  let translateValue = `translateX(-${slideIndex * 100}%)`;

  // Apply the translation to the slides container
  document.querySelector(".slides").style.transform = translateValue;
}

function startAutoSlideshow() {
  timer = setInterval(function () {
    plusSlides(1);
  }, 5000);
}

function resetAutoSlideshowTimer() {
  clearInterval(timer);
  startAutoSlideshow();
}