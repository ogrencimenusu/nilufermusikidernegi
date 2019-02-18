$(document).ready(function() {
    $('.main-slider .owl-carousel').owlCarousel({
        nav:false,
        items:1
    })
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});