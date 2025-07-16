const images = [
  "IMG/photo1.jpg",
  "IMG/photo2.jpg",
  "IMG/photo3.jpg"
];

let index = 0;
const slider = document.getElementById("slider-image");

function showImage(i) {
  slider.src = images[i];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}
