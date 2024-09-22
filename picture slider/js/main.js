var slider_img = document.querySelector('.slider-img');
var images = ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg', 'e.jpg'];
var i = 0; // current image index

// Function to display the previous image
function Prev() {
    if (i <= 0) i = images.length;
    i--;
    setImg();
}

// Function to display the next image
function Next() {
    if (i >= images.length - 1) i = -1;
    i++;
    setImg();
}

// Function to update the image source
function setImg() {
    slider_img.setAttribute('src', 'images/' + images[i]);
}
