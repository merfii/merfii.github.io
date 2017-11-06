$(function(){
	window.setTimeout("ChangePlayButtonColor();",2000);
});

var PlayGlobalBlink = false;
function PlayClick(){
   		PlayGlobalBlink = false;
	     var randPlayNum = Math.floor(Math.random()*5);
	     switch(randPlayNum){
	     	case 0:
	     		PlayGlobalBlink = true;
	     		break;
	     	case 1:
				Popup_xkcd();
				break;
	     	case 2:
				Popup_cloth();
	     		break;
	     	case 3:
	     		Fireworks();
	     		break;
	     	case 4:
	     		OpenButterflies();
	     		break;
	}
}

function ChangePlayButtonColor(){
	var randR = Math.floor(Math.random()*180+20);	//不想要太多红色
	var randG = Math.floor(Math.random()*200+30);
	var randB = Math.floor(Math.random()*200+30);

    $("#playground").css("backgroundColor","rgb(" + randR  + "," + randG  + "," + randB + ")");
	if(PlayGlobalBlink){
	    $("div").css("backgroundColor","rgb(" + (255-randR)  + "," + (255-randG)  + "," + (255-randB) + ")");
	}
	window.setTimeout("ChangePlayButtonColor();",200);
}


function Popup_xkcd(){
	var winNode = $("#pop_xkcd");
	winNode.fadeIn("slow");
	$(".newsletter_box").hide();
}  

function Popup_cloth(){
	window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60);
	};

	var winNode = $("#pop_cloth");
	winNode.fadeIn("slow");
	$(".newsletter_box").hide();  
    
    canvas  = document.getElementById('canvas_cloth');
    ctx     = canvas.getContext('2d');
    canvas.width  = 700;
    canvas.height = 600;

    start();
}

function Fireworks(){
	document.body.innerHTML = "<canvas id=\"canvas_fireworks\">Canvas is not supported in your browser.</canvas>"
	$("#canvas_fireworks").css("body {background: #111;margin:0;} canvas {cursor: crosshair;display: block;}");

	// when animating on canvas, it is best to use requestAnimationFrame instead of setTimeout or setInterval
	// not supported in all browsers though and sometimes needs a prefix, so we need a shim
	window.requestAnimFrame = ( function() {
		return window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					function( callback ) {
						window.setTimeout( callback, 1000 / 60 );
					};
	})();

	canvas = document.getElementById( 'canvas_fireworks' );
	ctx = canvas.getContext( '2d' );
	// full screen dimensions
	cw = window.innerWidth;
	ch = window.innerHeight;
	// firework collection
	fireworks = [];
	// particle collection
	particles = [];
	// starting hue
	hue = 120;
	// when launching fireworks with a click, too many get launched at once without a limiter, one launch per 5 loop ticks
	limiterTotal = 4;
	limiterTick = 0;
	// this will time the auto launches of fireworks, one launch per 80 loop ticks
	timerTotal = 20;
	timerTick = 0;
	mousedown = false;

	// set canvas dimensions
	canvas.width = cw;
	canvas.height = ch;

	// mouse event bindings
	// update the mouse coordinates on mousemove
	canvas.addEventListener( 'mousemove', function( e ) {
		mx = e.pageX - canvas.offsetLeft;
		my = e.pageY - canvas.offsetTop;
	});

	// toggle mousedown state and prevent canvas from being selected
	canvas.addEventListener( 'mousedown', function( e ) {
		e.preventDefault();
		mousedown = true;
	});

	canvas.addEventListener( 'mouseup', function( e ) {
		e.preventDefault();
		mousedown = false;
	});

	fireworks_loop();
}

function OpenButterflies(){
	window.location.href = "/works/Playground/svg-3d-butterflies/index.html";
	//window.open("{{site.baseurl}}/works/Playground/svg-3d-butterflies/index.html");
}



