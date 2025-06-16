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
  imgElement.src = `motorsport-images/watkins-glen-imsa-2024-images/track-pictures/${current.filename}`;
  captionElement.textContent = current.caption || '';
  slideIndexWatkinsGlen = (slideIndexWatkinsGlen + 1) % imagesWatkinsGlen.length;
  setTimeout(showSlidesWatkinsGlen, 4000);
}