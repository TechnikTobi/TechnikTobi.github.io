'use strict'
var testimonial = document.getElementById("testimonial"),
    testimonialContent = Array.prototype.slice.call(document.getElementById("testimonial-content").children),
    testimonialSpeed = 1000,
    currentSlide = 0,
    currentActive = 0,
    testimonialTimer,
    additive = 1;
;

window.onload = function() {

    // testimonial Script
    function playSlide() {

        if (currentSlide >= testimonialContent.length-1)
        {
            additive = -1;
        }

        if (currentSlide <= 0)
        {
            additive = +1;
        }
        currentSlide += additive;

        for (var k = 0; k < testimonialContent.length; k++) {
            testimonialContent[k].classList.remove("active");
            testimonialContent[k].classList.remove("inactive");
        }

        if (currentActive != currentSlide) {
            testimonialContent[currentActive].classList.add("inactive");            
        }
        testimonialContent[currentSlide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimonialTimer);
        testimonialTimer = setTimeout(
            function() {playSlide();}, 
            testimonialSpeed
        );
    }

    playSlide();
}