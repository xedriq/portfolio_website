$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 0,
    stagePAdding: 0,
    center: true,
  });

  $(".navigation__link").click(function () {
    $("#navi_toggle").prop("checked", false);
  });
});
