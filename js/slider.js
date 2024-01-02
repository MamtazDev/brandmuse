$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        items: 1,
        loop: true, 
        nav: true, 
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"], // Font Awesome icons
        autoplay: false,
        dots: false,
    });
});