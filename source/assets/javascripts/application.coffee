###
Include your files here
###

#= require filename.coffee

$.stellar();


###
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,
		responsiveClass: false,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		// Classes and Names
		themeClass: 'owl-theme',
		baseClass: 'owl-carousel',
		itemClass: 'owl-item',
		centerClass: 'center',
		activeClass: 'active'
	};

	Navigation.Defaults = {
		nav: false,
		navRewind: true,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotData: false,
		dotsSpeed: false,
		dotsContainer: false,
		controlsClass: 'owl-controls'
	}

###

$("#quote-slider").owlCarousel({
     items: 1,
     loop: true,
     autoplay: true,
     nav: false,
     dots: true,
     });

$("#gallery-slider").owlCarousel({
     items: 1,
     loop: true,
     autoplay: true,
     nav: false,
     dots: true,
     });

$("#rent170-slider").owlCarousel({
     items: 1,
     loop: true,
     autoplay: true,
     nav: false,
     dots: true,
     animateOut: 'fadeOut',
     });

$("#rent3-slider").owlCarousel({
     items: 1,
     loop: true,
     autoplay: true,
     nav: false,
     dots: true,
     animateOut: 'fadeOut'
     });


# modals
$ ->
  $('#modal-1').on 'change', ->
    if $(this).is(':checked')
      $('body').addClass 'modal-open'
    else
      $('body').removeClass 'modal-open'
    return
  $('.modal-fade-screen, .modal-close').on 'click', ->
    $('.modal-state:checked').prop('checked', false).change()
    return
  $('.modal-inner').on 'click', (e) ->
    e.stopPropagation()
    return
  return
  
$(document).ready ->
  $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on 'click touchstart', (e) ->
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass 'is-visible'
    e.preventDefault()
    return
  return

$(document).ready ->
  expanderTrigger = document.getElementById('js-expander-trigger')
  expanderContent = document.getElementById('js-expander-content')
  $('#js-expander-trigger').click ->
    $(this).toggleClass 'expander-hidden'
    return
  return

### mail ajaxify 

$(document).ready ->
	$('.submit').click ->
	  $.ajax
	    type: 'POST'
	    url: '/send.php'
	    data:
	      name: $('input[name="name"]').val()
	      phone: $('input[name="phone"]').val()
	    dataType: 'json'
	    success: (response) ->
	      status = $.parseJSON(JSON.stringify(response))
	      $('.form-tos span').html status['status']
	      return
	  return
###