window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    
    var elementBox = document.getElementById('Box');
    elementBox.style.opacity = 0;
    if (scroll > 900 && scroll < 5000) {
            elementBox.style.opacity = (scroll - 1000) / 800;
    }
    
    var elementThis = document.getElementById('This');
    if (scroll > 0 && scroll < 5000) {
        elementThis.style.left = scroll / 26 + "%";
        elementThis.style.opacity = 1;
        if (scroll > 1000 && scroll < 5000) {
            elementThis.style.opacity = 1 - (scroll - 1000) / 500;
        }
    }
    
    var elementHello = document.getElementById('Hello');
    if (scroll > 0 && scroll < 2250) {
        elementHello.style.top = 100 - scroll / 10 + "%";
    }

    var elementMy = document.getElementById('My');
    if (scroll > 0 && scroll < 2000) {
        elementMy.style.left = 100 - scroll / 27 + "%";
        if (scroll > 1000 && scroll < 5000) {
            elementMy.style.opacity = 1 - (scroll - 1000) / 500;
        }
    }

    var elementWebsite = document.getElementById('Website');
        elementWebsite.style.transform = "rotate(0deg)"
    if (scroll > 0 && scroll < 2000) {
        elementWebsite.style.left = 110 - scroll / 15 + "%";
        if (scroll > 1000 && scroll < 5000) {
            elementWebsite.style.opacity = 1 - (scroll - 1000) / 500;
            elementWebsite.style.transform = "rotate(" + - (scroll - 1000) / 10 + "deg)";
        }
    }

    var elementIs = document.getElementById('Is');
    if (scroll > 0 && scroll < 4000) {
        elementIs.style.bottom = 100 - scroll / 30 + "%";
        if (scroll > 850 && scroll < 5000) {
            elementIs.style.opacity = 1 - (scroll - 850) / 500;
        }
    }
    
});