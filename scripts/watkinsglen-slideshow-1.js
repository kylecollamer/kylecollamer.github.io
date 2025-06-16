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
  const captionElement = document.getElementById('caption-watkinsglen');
  const current = imagesWatkinsGlen[slideIndexWatkinsGlen];

  // Temporarily clear image and caption to avoid mismatched states
  imgElement.src = '';
  captionElement.textContent = '';

  // When the new image loads, update caption and schedule next slide
  imgElement.onload = () => {
    captionElement.textContent = current.caption || '';
    setTimeout(showSlidesWatkinsGlen, 4000);
  };

  imgElement.onerror = () => {
    console.error("Image failed to load:", current.filename);
    captionElement.textContent = 'Image failed to load.';
    setTimeout(showSlidesWatkinsGlen, 4000);
  };

  // Trigger the image load
  imgElement.src = `motorsport-images/watkins-glen-imsa-2024-images/track-pictures/${current.filename}`;

  slideIndexWatkinsGlen = (slideIndexWatkinsGlen + 1) % imagesWatkinsGlen.length;
}
