document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.fade-in-page').style.opacity = 1;
    var elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(function(el) {
        el.style.opacity = 1;
    });
});

// Script written in large part by ChatGPT 4o

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var thumbnails = document.querySelectorAll('.thumbnail');
var currentIndex;
thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.dataset.full;
        currentIndex = index;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal image, close the modal
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Get the next and previous buttons
var next = document.getElementsByClassName("next")[0];
var prev = document.getElementsByClassName("prev")[0];

// Show the next image
next.onclick = function() {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    modalImg.src = thumbnails[currentIndex].dataset.full;
}

// Show the previous image
prev.onclick = function() {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    modalImg.src = thumbnails[currentIndex].dataset.full;
}