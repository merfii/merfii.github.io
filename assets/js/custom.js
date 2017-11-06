$(function(){
	initScrollTop();
	initMuteButton();
});

function initScrollTop(){
	// Scroll Top
	$('.top').click(function() {
	  $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
	  if ($(this).scrollTop() > $(window).height()) {
	    $('.top').addClass("up");
	  } else {
	    $('.top').removeClass("up");
	  }
	});	
}

function initMuteButton(){
	// Video mute toggle
	$('#MuteButton').click(function() {
		// Get instance of the plugin
		var instance = $('#vide').data('vide');
		// Get video element of the background. Do what you want.
		videob = instance.getVideoObject();

		if(videob.muted === false){
			videob.muted = true;
			$('#MuteButton').html("<i class=\"fa fa-volume-off fa-lg\"></i> Muted");
		}else{
			videob.muted = false;
			$('#MuteButton').html("<i class=\"fa fa-volume-up fa-lg\"></i> Sound");
		}
		// Resize video background.
		// It calls automatically, if window resize (or element, if you will use something like https://github.com/cowboy/jquery-resize).
		//instance.resize();

		// Destroy plugin instance
		//instance.destroy();
	});	
}
