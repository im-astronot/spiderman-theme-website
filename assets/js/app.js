/* MAIN NAVBAR */
$(window).on("scroll", function () {
      var scrollTop = $(window).scrollTop();
      var section2Offset = $("#section2").offset().top;

      if (scrollTop >= section2Offset) {
            $(".navbar").addClass("scrolled");
      } else {
            $(".navbar").removeClass("scrolled");
      }
});

/* SCROLL TO TOP */
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

