var testimonialCarousel = document.querySelector('.testimonial-carousel-container');

if (testimonialCarousel) {
  var testimonials = testimonialCarousel.getElementsByClassName('carousel-testimonial');
  var testimonialsDiv = testimonialCarousel.querySelector('.testimonials');
  var testimonialNavitems = testimonialCarousel.getElementsByClassName('testimonial-navitem');
  var testimonialsArr = [].slice.call(testimonials);
  var activeTestimonial = 0;

  // add event listeners to prev and next
  testimonialCarousel.querySelector('.testimonial-next').addEventListener('click', function () {
    nextTestimonial();
  });
  testimonialCarousel.querySelector('.testimonial-prev').addEventListener('click', function () {
    prevTestimonial();
  });

  function initTestimonials() {
    // remove any active classes
    for (var i = 0; i < testimonialsArr.length; i++) {
      testimonialsArr[i].classList.remove('active');
      testimonialsArr[i].classList.remove('activeLeft');
      testimonialsArr[i].classList.remove('activeRight');
      testimonialNavitems[i].classList.remove('active');
    }
    // show/set active testimonials
    if (activeTestimonial == 0) {
      testimonialsArr[testimonialsArr.length - 1].classList.add('activeLeft');
    } else {
      testimonialsArr[activeTestimonial - 1].classList.add('activeLeft');
    }
    testimonialsArr[activeTestimonial].classList.add('active');
    if (activeTestimonial == testimonialsArr.length - 1) {
      testimonialsArr[0].classList.add('activeRight');
    } else {
      testimonialsArr[activeTestimonial + 1].classList.add('activeRight');
    }
    testimonialNavitems[activeTestimonial].classList.add('active');
    console.log("active index: " + activeTestimonial);
  }

  function nextTestimonial() {
    // increment active testimonial
    if (activeTestimonial < testimonialsArr.length - 1) {
      activeTestimonial++;
    } else {
      activeTestimonial = 0;
    }

    initTestimonials();
  }

  function prevTestimonial() {
    // decrement active testimonial
    if (activeTestimonial == 0) {
      activeTestimonial = testimonialsArr.length - 1;
    } else {
      activeTestimonial--;
    }

    initTestimonials();
  }

  function gotoTestimonial(index) {
    // update active testimonial
    activeTestimonial = index;

    initTestimonials();
  }

  initTestimonials();
}




