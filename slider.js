$( document ).ready(function() {

	//Variables
	var
	$slider         = $('#slider'),
	$sliderElements = $('> div', $slider),
	totalElements   = $sliderElements.length,
	current         = 0,
	pause           = $slider.data('pause') ? $slider.data('pause') : 5000,
	fade            = $slider.data('fade') ? $slider.data('fade') : 1000,
	interval,
	leftArrow       = $('.slider-arrow-left'),
	rightArrow      = $('.slider-arrow-right'),
	hoverStop       = $slider.data('hover-stop') ? $slider.data('hover-stop') : true,
	filterBlur      = $slider.data('filter-blur') ? 'blur('+$slider.data('filter-blur')+'px)' : 'blur(0px)';

	$sliderElements
	  .css('filter',filterBlur)
	  .css('webkitFilter',filterBlur)
	  .css('mozFilter',filterBlur)
	  .css('oFilter',filterBlur)
	  .css('msFilter',filterBlur);

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
	if( hoverStop == true ){
		$slider.hover(stopSlider, playSlider);
	}

	resizeSlider();

	if(totalElements == 0){
		$slider.hide();
	} else if(totalElements == 1){
		leftArrow.hide();
		rightArrow.hide();
	} else {
		playSlider();
	}

	$(window).resize(function() {
		resizeSlider();
	});

});
