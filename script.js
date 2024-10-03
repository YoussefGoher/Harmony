let startX;
let endX;

// Detect the swipe start
function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

// Detect the swipe end
function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    handleSwipe();
}

// Handle the swipe gesture
function handleSwipe() {
    if (startX > endX + 50) {
        // Swipe left
        changeImage(1);
    } else if (startX < endX - 50) {
        // Swipe right
        changeImage(-1);
    }
}

// Attach event listeners to the modal
const modal = document.getElementById("imageModal");
modal.addEventListener("touchstart", handleTouchStart);
modal.addEventListener("touchend", handleTouchEnd);

let currentImageIndex = 0;
const images = document.querySelectorAll(".gallery-image");

function openModal(img) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
    currentImageIndex = Array.from(images).indexOf(img);
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Go to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Go to first image
    }

    const modalImg = document.getElementById("modalImg");
    const caption = document.getElementById("caption");
    modalImg.src = images[currentImageIndex].src;
    caption.innerHTML = images[currentImageIndex].alt;
}

function updateNavButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Enable/Disable buttons based on the index
    prevBtn.style.display = images.length > 1 ? 'block' : 'none';
    nextBtn.style.display = images.length > 1 ? 'block' : 'none';
}
