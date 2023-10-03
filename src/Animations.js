import $ from "jquery";

function slideRight(element) {
    $(element).filter(function () {
      const elementPosition = $(this).offset().top; //Calculating the position of the element that has to be animated
      const currentPosition = $(window).scrollTop() + $(window).height() - 300; //(current position on the page) + visible window (200 is a small offset to start the animation later)
  
      if (elementPosition < currentPosition) {
        $(this).addClass('active');
      }
    });
  }
  
  function slideLeft(element) {
    $(element).filter(function () {
      const elementPosition = $(this).offset().top;
      const currentPosition = $(window).scrollTop() + $(window).height() - 300 ; 
  
      if (elementPosition < currentPosition) {
        $(this).addClass('active');
      }
    });
  }

  function slideUp(element) {
    $(element).filter(function () {
      const elementPosition = $(this).offset().top;
      const currentPosition = $(window).scrollTop() + $(window).height() - 200 ; 
  
      if (elementPosition < currentPosition) {
        $(this).addClass('active');
      }
    });
  }

  function slideDown(element) {
    $(element).filter(function() {
      const elementPosition = $(this).offset().top;
      const currentPosition = $(window).scrollTop() + $(window).height() - 500;
  
      if (elementPosition < currentPosition) {
        $(this).addClass('active'); // Use $(this) to target the current element
      }
    });
  
};

function addBuzz(element){
  setTimeout(() => {
    $(element).addClass('buzz');
  }, 1000);
  setTimeout(() => {
    $(element).removeClass('buzz');
  }, 1600);
}



  export {slideLeft, slideRight, slideUp, slideDown, addBuzz};
  