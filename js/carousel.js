var multipleCardCarousel = document.querySelector("#carouselDepoimentos2");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
	wrap: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselDepoimentos2 .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      $("#carouselDepoimentos2 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselDepoimentos2 .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselDepoimentos2 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}
