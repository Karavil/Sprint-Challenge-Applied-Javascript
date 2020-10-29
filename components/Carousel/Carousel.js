function Carousel(imageSources) {
   // Main div
   const carousel = document.createElement('div');
   carousel.classList.add('carousel');

   // Create carousel buttons
   const leftButton = document.createElement('div');
   const rightButton = document.createElement('div');

   leftButton.classList.add('left-button');
   rightButton.classList.add('right-button');

   leftButton.textContent = '<';
   rightButton.textContent = '>';

   leftButton.addEventListener('click', prevImage);
   rightButton.addEventListener('click', nextImage);

   // Add images and buttons to main div
   carousel.appendChild(leftButton);

   // Fetch the source of each image and create a DOM object
   imageSources.forEach(src => {
      const carouselImage = document.createElement('img');
      carouselImage.src = src;
      carousel.appendChild(carouselImage);
   });

   // Assign current positions to images at the start (and last image as previous)
   carousel.appendChild(rightButton);

   return carousel;
}

function showImage(index) {
   for (let i = 0; i < carouselImages.length; i++) {
      if (i === index) {
         carouselImages[i].classList.add('active');
      } else {
         carouselImages[i].classList.remove('active');
      }
   }
}

function nextImage() {
   currentIndex += 1;
   if (currentIndex >= carouselImages.length) {
      currentIndex = 0;
   }
   showImage(currentIndex);
}

function prevImage() {
   currentIndex -= 1;
   if (currentIndex < 0) {
      currentIndex = carouselImages.length - 1;
   }
   showImage(currentIndex);
}


let currentIndex = 0;

const images = [
   "./assets/carousel/mountains.jpeg",
   "./assets/carousel/computer.jpeg",
   "./assets/carousel/trees.jpeg",
   "./assets/carousel/turntable.jpeg"
];

const myCarousel = Carousel(images);
const carousel = document.querySelector('.carousel-container');
carousel.appendChild(myCarousel);

const carouselImages = document.querySelectorAll('.carousel img');
showImage(currentIndex);



