let imagesWatkinsGlen = [];
let slideIndexWatkinsGlen = 0;

fetch('motorsport-images/watkins-glen-imsa-2024-images/track-pictures/images.json')
  .then(response => response.json())
  .then(data => {
    imagesWatkinsGlen = data;
    showSlidesWatkinsGlen();
  });

function showSlidesWatkinsGlen() {
  if (imagesWatkinsGlen.length === 0) return;

  const imgElement = document.getElementById('slideshow-image-watkinsglen');
  const current = imagesWatkinsGlen[slideIndexWatkinsGlen];

  // Start fade-out
  imgElement.style.opacity = 0;

  setTimeout(() => {
    // Set new image source
    imgElement.src = `motorsport-images/watkins-glen-imsa-2024-images/track-pictures/${current.filename}`;

    imgElement.onload = () => {
      // Fade back in once image has loaded
      imgElement.style.opacity = 1;

      // Schedule the next image
      setTimeout(showSlidesWatkinsGlen, 4000);
    };

    imgElement.onerror = () => {
      console.error("Image failed to load:", current.filename);
      setTimeout(showSlidesWatkinsGlen, 4000);
    };
  }, 500); // Delay to allow fade out before switching src

  // Move to next image in list
  slideIndexWatkinsGlen = (slideIndexWatkinsGlen + 1) % imagesWatkinsGlen.length;
}

