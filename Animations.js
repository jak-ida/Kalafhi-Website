
function reveal() {
    var reveals = document.querySelectorAll(".reveal-fade-up");
    var reveals2 = document.querySelectorAll(".reveal-fade-up-2");
    var reveals3 = document.querySelectorAll(".reveal-fade-up-3");
    var revealLeft = document.querySelectorAll(".reveal-fade-left");
    var revealRight = document.querySelectorAll(".reveal-fade-right");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals2[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals2[i].classList.add("active");
        } else {
          reveals2[i].classList.remove("active");
        }
      }
      for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals3[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals3[i].classList.add("active");
        } else {
          reveals3[i].classList.remove("active");
        }
      }
    for (var i = 0; i < revealLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          revealLeft[i].classList.add("active");
        } else {
          revealLeft[i].classList.remove("active");
        }
      }
      for (var i = 0; i < revealRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealRight[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          revealRight[i].classList.add("active");
        } else {
          revealRight[i].classList.remove("active");
        }
      }
  }
  
  window.addEventListener("scroll", reveal);
  