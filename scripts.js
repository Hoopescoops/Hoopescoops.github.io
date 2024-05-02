document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.fade-in-page').style.opacity = 1;
    var elements = document.querySelectorAll('.fade-in-element');
    elements.forEach(function(el) {
        el.style.opacity = 1;
    });
});