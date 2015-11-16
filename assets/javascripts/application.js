
/*
Include your files here
 */

(function() {
  $.stellar();


  /*
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
   */

  $("#quote-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true
  });

  $("#gallery-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true
  });

  $("#rent170-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut'
  });

  $("#rent3-slider").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    animateOut: 'fadeOut'
  });

  $(function() {
    $('#modal-1').on('change', function() {
      if ($(this).is(':checked')) {
        $('body').addClass('modal-open');
      } else {
        $('body').removeClass('modal-open');
      }
    });
    $('.modal-fade-screen, .modal-close').on('click', function() {
      $('.modal-state:checked').prop('checked', false).change();
    });
    $('.modal-inner').on('click', function(e) {
      e.stopPropagation();
    });
  });

  $(document).ready(function() {
    $('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart', function(e) {
      $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
      e.preventDefault();
    });
  });

  $(document).ready(function() {
    var expanderContent, expanderTrigger;
    expanderTrigger = document.getElementById('js-expander-trigger');
    expanderContent = document.getElementById('js-expander-content');
    $('#js-expander-trigger').click(function() {
      $(this).toggleClass('expander-hidden');
    });
  });


  /* mail ajaxify 
  
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
   */

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7QUFBQTtFQU1BLENBQUMsQ0FBQyxPQUFGLENBQUE7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBb0VBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsV0FBbkIsQ0FBK0I7SUFDMUIsS0FBQSxFQUFPLENBRG1CO0lBRTFCLElBQUEsRUFBTSxJQUZvQjtJQUcxQixRQUFBLEVBQVUsSUFIZ0I7SUFJMUIsR0FBQSxFQUFLLEtBSnFCO0lBSzFCLElBQUEsRUFBTSxJQUxvQjtHQUEvQjs7RUFRQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxXQUFyQixDQUFpQztJQUM1QixLQUFBLEVBQU8sQ0FEcUI7SUFFNUIsSUFBQSxFQUFNLElBRnNCO0lBRzVCLFFBQUEsRUFBVSxJQUhrQjtJQUk1QixHQUFBLEVBQUssS0FKdUI7SUFLNUIsSUFBQSxFQUFNLElBTHNCO0dBQWpDOztFQVFBLENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLFdBQXJCLENBQWlDO0lBQzVCLEtBQUEsRUFBTyxDQURxQjtJQUU1QixJQUFBLEVBQU0sSUFGc0I7SUFHNUIsUUFBQSxFQUFVLElBSGtCO0lBSTVCLEdBQUEsRUFBSyxLQUp1QjtJQUs1QixJQUFBLEVBQU0sSUFMc0I7SUFNNUIsVUFBQSxFQUFZLFNBTmdCO0dBQWpDOztFQVNBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsV0FBbkIsQ0FBK0I7SUFDMUIsS0FBQSxFQUFPLENBRG1CO0lBRTFCLElBQUEsRUFBTSxJQUZvQjtJQUcxQixRQUFBLEVBQVUsSUFIZ0I7SUFJMUIsR0FBQSxFQUFLLEtBSnFCO0lBSzFCLElBQUEsRUFBTSxJQUxvQjtJQU0xQixVQUFBLEVBQVksU0FOYztHQUEvQjs7RUFXQSxDQUFBLENBQUUsU0FBQTtJQUNBLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLFNBQUE7TUFDekIsSUFBRyxDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsRUFBUixDQUFXLFVBQVgsQ0FBSDtRQUNFLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLFlBQW5CLEVBREY7T0FBQSxNQUFBO1FBR0UsQ0FBQSxDQUFFLE1BQUYsQ0FBUyxDQUFDLFdBQVYsQ0FBc0IsWUFBdEIsRUFIRjs7SUFEeUIsQ0FBM0I7SUFNQSxDQUFBLENBQUUsa0NBQUYsQ0FBcUMsQ0FBQyxFQUF0QyxDQUF5QyxPQUF6QyxFQUFrRCxTQUFBO01BQ2hELENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLElBQTFCLENBQStCLFNBQS9CLEVBQTBDLEtBQTFDLENBQWdELENBQUMsTUFBakQsQ0FBQTtJQURnRCxDQUFsRDtJQUdBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsU0FBQyxDQUFEO01BQzVCLENBQUMsQ0FBQyxlQUFGLENBQUE7SUFENEIsQ0FBOUI7RUFWQSxDQUFGOztFQWVBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUE7SUFDaEIsQ0FBQSxDQUFFLHVFQUFGLENBQTBFLENBQUMsRUFBM0UsQ0FBOEUsa0JBQTlFLEVBQWtHLFNBQUMsQ0FBRDtNQUNoRyxDQUFBLENBQUUsbURBQUYsQ0FBc0QsQ0FBQyxXQUF2RCxDQUFtRSxZQUFuRTtNQUNBLENBQUMsQ0FBQyxjQUFGLENBQUE7SUFGZ0csQ0FBbEc7RUFEZ0IsQ0FBbEI7O0VBT0EsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQTtBQUNoQixRQUFBO0lBQUEsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEI7SUFDbEIsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEI7SUFDbEIsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsS0FBMUIsQ0FBZ0MsU0FBQTtNQUM5QixDQUFBLENBQUUsSUFBRixDQUFPLENBQUMsV0FBUixDQUFvQixpQkFBcEI7SUFEOEIsQ0FBaEM7RUFIZ0IsQ0FBbEI7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQS9JQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuSW5jbHVkZSB5b3VyIGZpbGVzIGhlcmVcbiMjI1xuXG4jPSByZXF1aXJlIGZpbGVuYW1lLmNvZmZlZVxuXG4kLnN0ZWxsYXIoKTtcblxuXG4jIyNcblx0T3dsLkRlZmF1bHRzID0ge1xuXHRcdGl0ZW1zOiAzLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdGNlbnRlcjogZmFsc2UsXG5cblx0XHRtb3VzZURyYWc6IHRydWUsXG5cdFx0dG91Y2hEcmFnOiB0cnVlLFxuXHRcdHB1bGxEcmFnOiB0cnVlLFxuXHRcdGZyZWVEcmFnOiBmYWxzZSxcblxuXHRcdG1hcmdpbjogMCxcblx0XHRzdGFnZVBhZGRpbmc6IDAsXG5cblx0XHRtZXJnZTogZmFsc2UsXG5cdFx0bWVyZ2VGaXQ6IHRydWUsXG5cdFx0YXV0b1dpZHRoOiBmYWxzZSxcblxuXHRcdHN0YXJ0UG9zaXRpb246IDAsXG5cdFx0cnRsOiBmYWxzZSxcblxuXHRcdHNtYXJ0U3BlZWQ6IDI1MCxcblx0XHRmbHVpZFNwZWVkOiBmYWxzZSxcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxuXG5cdFx0cmVzcG9uc2l2ZToge30sXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG5cdFx0cmVzcG9uc2l2ZUJhc2VFbGVtZW50OiB3aW5kb3csXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOiBmYWxzZSxcblxuXHRcdGZhbGxiYWNrRWFzaW5nOiAnc3dpbmcnLFxuXG5cdFx0aW5mbzogZmFsc2UsXG5cblx0XHRuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2Jyxcblx0XHRzdGFnZUVsZW1lbnQ6ICdkaXYnLFxuXG5cdFx0Ly8gQ2xhc3NlcyBhbmQgTmFtZXNcblx0XHR0aGVtZUNsYXNzOiAnb3dsLXRoZW1lJyxcblx0XHRiYXNlQ2xhc3M6ICdvd2wtY2Fyb3VzZWwnLFxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcblx0XHRjZW50ZXJDbGFzczogJ2NlbnRlcicsXG5cdFx0YWN0aXZlQ2xhc3M6ICdhY3RpdmUnXG5cdH07XG5cblx0TmF2aWdhdGlvbi5EZWZhdWx0cyA9IHtcblx0XHRuYXY6IGZhbHNlLFxuXHRcdG5hdlJld2luZDogdHJ1ZSxcblx0XHRuYXZUZXh0OiBbICdwcmV2JywgJ25leHQnIF0sXG5cdFx0bmF2U3BlZWQ6IGZhbHNlLFxuXHRcdG5hdkVsZW1lbnQ6ICdkaXYnLFxuXHRcdG5hdkNvbnRhaW5lcjogZmFsc2UsXG5cdFx0bmF2Q29udGFpbmVyQ2xhc3M6ICdvd2wtbmF2Jyxcblx0XHRuYXZDbGFzczogWyAnb3dsLXByZXYnLCAnb3dsLW5leHQnIF0sXG5cdFx0c2xpZGVCeTogMSxcblx0XHRkb3RDbGFzczogJ293bC1kb3QnLFxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcblx0XHRkb3RzOiB0cnVlLFxuXHRcdGRvdHNFYWNoOiBmYWxzZSxcblx0XHRkb3REYXRhOiBmYWxzZSxcblx0XHRkb3RzU3BlZWQ6IGZhbHNlLFxuXHRcdGRvdHNDb250YWluZXI6IGZhbHNlLFxuXHRcdGNvbnRyb2xzQ2xhc3M6ICdvd2wtY29udHJvbHMnXG5cdH1cblxuIyMjXG5cbiQoXCIjcXVvdGUtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgaXRlbXM6IDEsXG4gICAgIGxvb3A6IHRydWUsXG4gICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICBuYXY6IGZhbHNlLFxuICAgICBkb3RzOiB0cnVlLFxuICAgICB9KTtcblxuJChcIiNnYWxsZXJ5LXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgIGl0ZW1zOiAxLFxuICAgICBsb29wOiB0cnVlLFxuICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgbmF2OiBmYWxzZSxcbiAgICAgZG90czogdHJ1ZSxcbiAgICAgfSk7XG5cbiQoXCIjcmVudDE3MC1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICBpdGVtczogMSxcbiAgICAgbG9vcDogdHJ1ZSxcbiAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgIG5hdjogZmFsc2UsXG4gICAgIGRvdHM6IHRydWUsXG4gICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcbiAgICAgfSk7XG5cbiQoXCIjcmVudDMtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgaXRlbXM6IDEsXG4gICAgIGxvb3A6IHRydWUsXG4gICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICBuYXY6IGZhbHNlLFxuICAgICBkb3RzOiB0cnVlLFxuICAgICBhbmltYXRlT3V0OiAnZmFkZU91dCdcbiAgICAgfSk7XG5cblxuIyBtb2RhbHNcbiQgLT5cbiAgJCgnI21vZGFsLTEnKS5vbiAnY2hhbmdlJywgLT5cbiAgICBpZiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpXG4gICAgICAkKCdib2R5JykuYWRkQ2xhc3MgJ21vZGFsLW9wZW4nXG4gICAgZWxzZVxuICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzICdtb2RhbC1vcGVuJ1xuICAgIHJldHVyblxuICAkKCcubW9kYWwtZmFkZS1zY3JlZW4sIC5tb2RhbC1jbG9zZScpLm9uICdjbGljaycsIC0+XG4gICAgJCgnLm1vZGFsLXN0YXRlOmNoZWNrZWQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmNoYW5nZSgpXG4gICAgcmV0dXJuXG4gICQoJy5tb2RhbC1pbm5lcicpLm9uICdjbGljaycsIChlKSAtPlxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICByZXR1cm5cbiAgcmV0dXJuXG4gIFxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgJCgnLnNsaWRpbmctcGFuZWwtYnV0dG9uLC5zbGlkaW5nLXBhbmVsLWZhZGUtc2NyZWVuLC5zbGlkaW5nLXBhbmVsLWNsb3NlJykub24gJ2NsaWNrIHRvdWNoc3RhcnQnLCAoZSkgLT5cbiAgICAkKCcuc2xpZGluZy1wYW5lbC1jb250ZW50LC5zbGlkaW5nLXBhbmVsLWZhZGUtc2NyZWVuJykudG9nZ2xlQ2xhc3MgJ2lzLXZpc2libGUnXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuXG4gIHJldHVyblxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICBleHBhbmRlclRyaWdnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZXhwYW5kZXItdHJpZ2dlcicpXG4gIGV4cGFuZGVyQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1leHBhbmRlci1jb250ZW50JylcbiAgJCgnI2pzLWV4cGFuZGVyLXRyaWdnZXInKS5jbGljayAtPlxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MgJ2V4cGFuZGVyLWhpZGRlbidcbiAgICByZXR1cm5cbiAgcmV0dXJuXG5cbiMjIyBtYWlsIGFqYXhpZnkgXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG5cdCQoJy5zdWJtaXQnKS5jbGljayAtPlxuXHQgICQuYWpheFxuXHQgICAgdHlwZTogJ1BPU1QnXG5cdCAgICB1cmw6ICcvc2VuZC5waHAnXG5cdCAgICBkYXRhOlxuXHQgICAgICBuYW1lOiAkKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpLnZhbCgpXG5cdCAgICAgIHBob25lOiAkKCdpbnB1dFtuYW1lPVwicGhvbmVcIl0nKS52YWwoKVxuXHQgICAgZGF0YVR5cGU6ICdqc29uJ1xuXHQgICAgc3VjY2VzczogKHJlc3BvbnNlKSAtPlxuXHQgICAgICBzdGF0dXMgPSAkLnBhcnNlSlNPTihKU09OLnN0cmluZ2lmeShyZXNwb25zZSkpXG5cdCAgICAgICQoJy5mb3JtLXRvcyBzcGFuJykuaHRtbCBzdGF0dXNbJ3N0YXR1cyddXG5cdCAgICAgIHJldHVyblxuXHQgIHJldHVyblxuIyMjIl19