let imagesWatkinsGlen = [];
let slideIndexWatkinsGlen = 0;
let currentImg = 1; // Toggle between 1 and 2

fetch('motorsport-images/watkins-glen-imsa-2024-images/track-pictures/images.json')
  .then(response => response.json())
  .then(data => {
    imagesWatkinsGlen = data;
    crossfadeSlidesWatkinsGlen();
  });

function crossfadeSlidesWatkinsGlen() {
  if (imagesWatkinsGlen.length === 0) return;

  const nextImg = (currentImg === 1) ? 2 : 1;
  const currentElement = document.getElementById(`slideshow-img-${currentImg}`);
  const nextElement = document.getElementById(`slideshow-img-${nextImg}`);

  const nextImage = imagesWatkinsGlen[slideIndexWatkinsGlen];
  slideIndexWatkinsGlen = (slideIndexWatkinsGlen + 1) % imagesWatkinsGlen.length;

  // Preload next image
  const tempImg = new Image();
  tempImg.onload = () => {
    nextElement.src = tempImg.src;

    // Fade in new image
    nextElement.classList.add("active");
    currentElement.classList.remove("active");

    currentImg = nextImg;

    // Schedule next transition
    setTimeout(crossfadeSlidesWatkinsGlen, 4000);
  };

  tempImg.onerror = () => {
    console.error("Failed to load:", nextImage.filename);
    setTimeout(crossfadeSlidesWatkinsGlen, 4000);
  };

  tempImg.src = `motorsport-images/watkins-glen-imsa-2024-images/track-pictures/${nextImage.filename}`;
}
