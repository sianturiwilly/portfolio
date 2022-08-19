// Event pada saat link diklik
$('.page-scroll').on('click', function(e) {

	// Ambil isi href
	var tujuan = $(this).attr('href');
	// Tangkap elemen ybs
	var elemenTujuan = $(tujuan);

	// Pindahkan scroll
    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');

    e.preventDefault();

});


// Parallax
// About
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	// Jumbotron
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/4 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
	});


	// Portfolio
	if(wScroll > $('.portfolio').offset().top - 250) {
	   $('.portfolio .thumbnail').each(function(i) {
	   	   setTimeout(function() {
	   	   	  $('.portfolio .thumbnail').eq(i).addClass('muncul');
	   	   }, 300 * (i+1));
	   });


	}

})