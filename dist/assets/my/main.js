$(document).ready(function() {
    $('.header .navbar-nav li.nav-item').hover(function() {
        $(this).addClass('active').find('.dropdown-menu').addClass('show animated fadeIn');
    }, function() {
        $(this).removeClass('active').find('.dropdown-menu').removeClass('show');
    });
});
