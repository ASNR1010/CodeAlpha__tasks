// List of images in the gallery
const images = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg',
    'images/img4.jpg',
    'images/img5.jpg'
];

let currentIndex = 0; // Track the current image index

// Function to show the previous image
function prevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    document.getElementById('gallery-image').src = images[currentIndex];
}

// Function to show the next image
function nextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    document.getElementById('gallery-image').src = images[currentIndex];
}
