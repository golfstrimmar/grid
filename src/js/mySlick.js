import $ from "jquery";
import "./slick.js";


$(Document).ready(function () {


$(".slider-js").slick({
  dots: true,
  arrows: true,
  slidesToShow: 1,
  speed: 800,
  easing: "ease",
  cssEase: "linear",
  centerMode: false,
  nextArrow: $(".slider__arrow_next"),
  prevArrow: $(".slider__arrow_prev"),

  customPaging: function (slider, i) {
    var current = i + 1;
    current = current < 10 ? "" + current : current;

    var total = slider.slideCount;
    total = total < 10 ? "" + total : total;

    return (
      '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
  		<span class="slick-dots-current">' +
      current +
      '</span>\
  		<span class="slick-dots-separator">из</span>\
  		<span class="slick-dots-total">' +
      total +
      "</span></button>"
    );
  },
});



 
});
