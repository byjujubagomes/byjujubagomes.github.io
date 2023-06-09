var multipleCardCarousel = document.querySelector("#carouselDepoimentos2");

if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
	wrap: false,
  });
  var carouselWidth = $("#carouselDepoimentos2 .carousel-inner")[0].scrollWidth;
  var cardWidth = $("#carouselDepoimentos2 .carousel-item").width();
  var scrollPosition = 0;
  $("#carouselDepoimentos2 .carousel-control-next").on("click", function () {
    if (scrollPosition < (cardWidth * 9)) {
      scrollPosition += cardWidth;
      $("#carouselDepoimentos2 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        800
	);
	}
  });
  $("#carouselDepoimentos2 .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselDepoimentos2 .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        800
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})