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

  // Clear the src temporarily to avoid flicker or mismatched images
  imgElement.src = '';

  // Load image and then show next one
  imgElement.onload = () => {
    setTimeout(showSlidesWatkinsGlen, 4000);
  };

  imgElement.onerror = () => {
    console.error("Image failed to load:", current.filename);
    setTimeout(showSlidesWatkinsGlen, 4000);
  };

  imgElement.src = `motorsport-images/watkins-glen-imsa-2024-images/track-pictures/${current.filename}`;

  slideIndexWatkinsGlen = (slideIndexWatkinsGlen + 1) % imagesWatkinsGlen.length;
}
