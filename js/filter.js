$(document).ready(function () {
  var $grid = $(".blogall").isotope({});

  $(".filterBtn").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");

    // toggle active class on clicked button only
    $(".filterBtn button").removeClass("active");
    $(this).addClass("active");

    $grid.isotope({ filter: filterValue });
  });
});
