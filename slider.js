$( document ).ready(function() {

	//Variables
	var current = 0,
		pause = 5000,
		fade = 1000,
		$slider = $('#slider'),
		$sliderElements = $('> div', $slider),
		totalElements = $sliderElements.length,
		interval,
		leftArrow = $('.slider-arrow-left'),
		rightArrow = $('.slider-arrow-right');

	leftArrow.html('<i class="fas fa-chevron-left fa-4x"></i>');
	rightArrow.html('<i class="fas fa-chevron-right fa-4x"></i>');

	//Resize the slider;
	function resizeSlider(){
		$slider.height($(window).height());
	}

	//Hide all Elements and show the Current Element;
	$sliderElements.hide().eq(current).show();

	//Arrows Clicks
	leftArrow.click(function(){
		$sliderElements.fadeOut(fade).eq(--current % totalElements).stop().fadeIn(fade);
	})
	rightArrow.click(function(){
		$sliderElements.fadeOut(fade).eq(++current % totalElements).stop().fadeIn(fade);
	})

	//Stop the Slider
	function stopSlider() {
		clearInterval(interval);
	}

	//Start the Slider
	function playSlider() {
		interval = setInterval(animSlider, pause);
	}

	//Autoplay Slider
	function animSlider() {
		$sliderElements.fadeOut(fade).eq(++current % totalElements).stop().fadeIn(fade);
	}

	//Hover Stop the Slider
	$slider.hover(stopSlider, playSlider);

	resizeSlider();
	playSlider();

	$(window).resize(function() {
		resizeSlider();
	});

});
