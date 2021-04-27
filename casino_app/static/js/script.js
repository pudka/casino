$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


jQuery('.link-detailes').click(function () {
	event.preventDefault();
	jQuery(this).toggle();
	jQuery(this).next().toggle();
});