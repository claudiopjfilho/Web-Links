$(document).ready(function () {
  $(window).on("resize", function (e) {
    checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize() {
    var newWindowWidth = $(window).width();
    if (newWindowWidth < 481) {
      $(".right").insertBefore(".left");
    } else {
      $(".left").insertBefore(".right");
    }
  }
});
