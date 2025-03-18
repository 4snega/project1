// Get references to the elements
const img = document.querySelector('.clickable-img');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

// When the image is clicked, show the popup
img.addEventListener('click', function () {
    popup.style.display = 'flex';
});

// When the close button is clicked, close the popup
closeBtn.addEventListener('click', function () {
    popup.style.display = 'none';
});

// Close the popup if the user clicks outside of the popup content
window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});