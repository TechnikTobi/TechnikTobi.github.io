'use strict'
var testimonial = document.getElementById("testimonial"),
    testimonialDots = Array.prototype.slice.call(document.getElementById("testimonial-dots").children),
    testimonialContent = Array.prototype.slice.call(document.getElementById("testimonial-content").children),
    testimonialLeftArrow = document.getElementById("left-arrow"),
    testimonialRightArrow = document.getElementById("right-arrow"),
    testimonialSpeed = 3000,
    currentSlide = 0,
    currentActive = 0,
    testimonialTimer,
    touchStartPos,
    touchEndPos,
    touchPosDiff,
    ignoreTouch = 30;
;

window.onload = function() {

    // testimonial Script
    function playSlide(slide) {
        for (var k = 0; k < testimonialDots.length; k++) {
            testimonialContent[k].classList.remove("active");
            testimonialContent[k].classList.remove("inactive");
            testimonialDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimonialContent.length-1;
        }

        if (slide > testimonialContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimonialContent[currentActive].classList.add("inactive");            
        }
        testimonialContent[slide].classList.add("active");
        testimonialDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimonialTimer);
        testimonialTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimonialSpeed)
    }

    for (var l = 0; l < testimonialDots.length; l++) {
        testimonialDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimonialDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimonialLeftArrow.click();
                break;
                
            case 39:
                testimonialRightArrow.click();
                break;

            case 39:
                testimonialRightArrow.click();
                break;

            default:
                break;
        }
    })
    
    testimonial.addEventListener("touchstart", function(e) {
        touchStartPos = e.changedTouches[0].clientX;
    })
  
    testimonial.addEventListener("touchend", function(e) {
        touchEndPos = e.changedTouches[0].clientX;
      
        touchPosDiff = touchStartPos - touchEndPos;
      
        console.log(touchPosDiff);
        console.log(touchStartPos); 
        console.log(touchEndPos); 

      
        if (touchPosDiff > 0 + ignoreTouch) {
            testimonialLeftArrow.click();
        } else if (touchPosDiff < 0 - ignoreTouch) {
            testimonialRightArrow.click();
        } else {
          return;
        }
      
    })
}