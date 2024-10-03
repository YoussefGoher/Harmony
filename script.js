let currentIndex = 0; // Store the index of the currently displayed image
let images = []; // Array to store all the images

function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");

    // Get all gallery images
    images = document.querySelectorAll('.gallery-image');
    currentIndex = Array.from(images).indexOf(img); // Get the index of the clicked image

    modal.style.display = "block"; // Show the modal
    modalImg.src = img.src; // Set the image source of the modal
    captionText.innerHTML = img.alt; // Set the caption text to the alt attribute of the image

    // Enable/Disable buttons based on the index
    updateNavButtons();
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide the modal
}

function changeImage(direction) {
    currentIndex += direction; // Update index based on direction (1 for next, -1 for previous)

    // Loop around if at the end or beginning
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // Go to the last image
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // Go to the first image
    }

    // Update the modal with the new image
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    modalImg.src = images[currentIndex].src; // Set the new image source
    captionText.innerHTML = images[currentIndex].alt; // Set the new caption text
}

function updateNavButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Enable/Disable buttons based on the index
    prevBtn.style.display = images.length > 1 ? 'block' : 'none';
    nextBtn.style.display = images.length > 1 ? 'block' : 'none';
}
