
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

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOztHQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsQ0FBQyxDQUFDLE9BQUYsQ0FBQSxDQU5BLENBQUE7O0FBU0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FUQTs7QUFBQSxFQTZFQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLFdBQW5CLENBQStCO0FBQUEsSUFDMUIsS0FBQSxFQUFPLENBRG1CO0FBQUEsSUFFMUIsSUFBQSxFQUFNLElBRm9CO0FBQUEsSUFHMUIsUUFBQSxFQUFVLElBSGdCO0FBQUEsSUFJMUIsR0FBQSxFQUFLLEtBSnFCO0FBQUEsSUFLMUIsSUFBQSxFQUFNLElBTG9CO0dBQS9CLENBN0VBLENBQUE7O0FBQUEsRUFxRkEsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsV0FBckIsQ0FBaUM7QUFBQSxJQUM1QixLQUFBLEVBQU8sQ0FEcUI7QUFBQSxJQUU1QixJQUFBLEVBQU0sSUFGc0I7QUFBQSxJQUc1QixRQUFBLEVBQVUsSUFIa0I7QUFBQSxJQUk1QixHQUFBLEVBQUssS0FKdUI7QUFBQSxJQUs1QixJQUFBLEVBQU0sSUFMc0I7R0FBakMsQ0FyRkEsQ0FBQTs7QUFBQSxFQThGQSxDQUFBLENBQUUsU0FBQSxHQUFBO0FBQ0EsSUFBQSxDQUFBLENBQUUsVUFBRixDQUFhLENBQUMsRUFBZCxDQUFpQixRQUFqQixFQUEyQixTQUFBLEdBQUE7QUFDekIsTUFBQSxJQUFHLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxFQUFSLENBQVcsVUFBWCxDQUFIO0FBQ0UsUUFBQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsUUFBVixDQUFtQixZQUFuQixDQUFBLENBREY7T0FBQSxNQUFBO0FBR0UsUUFBQSxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsV0FBVixDQUFzQixZQUF0QixDQUFBLENBSEY7T0FEeUI7SUFBQSxDQUEzQixDQUFBLENBQUE7QUFBQSxJQU1BLENBQUEsQ0FBRSxrQ0FBRixDQUFxQyxDQUFDLEVBQXRDLENBQXlDLE9BQXpDLEVBQWtELFNBQUEsR0FBQTtBQUNoRCxNQUFBLENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLElBQTFCLENBQStCLFNBQS9CLEVBQTBDLEtBQTFDLENBQWdELENBQUMsTUFBakQsQ0FBQSxDQUFBLENBRGdEO0lBQUEsQ0FBbEQsQ0FOQSxDQUFBO0FBQUEsSUFTQSxDQUFBLENBQUUsY0FBRixDQUFpQixDQUFDLEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFNBQUMsQ0FBRCxHQUFBO0FBQzVCLE1BQUEsQ0FBQyxDQUFDLGVBQUYsQ0FBQSxDQUFBLENBRDRCO0lBQUEsQ0FBOUIsQ0FUQSxDQURBO0VBQUEsQ0FBRixDQTlGQSxDQUFBOztBQUFBLEVBNkdBLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUEsR0FBQTtBQUNoQixJQUFBLENBQUEsQ0FBRSx1RUFBRixDQUEwRSxDQUFDLEVBQTNFLENBQThFLGtCQUE5RSxFQUFrRyxTQUFDLENBQUQsR0FBQTtBQUNoRyxNQUFBLENBQUEsQ0FBRSxtREFBRixDQUFzRCxDQUFDLFdBQXZELENBQW1FLFlBQW5FLENBQUEsQ0FBQTtBQUFBLE1BQ0EsQ0FBQyxDQUFDLGNBQUYsQ0FBQSxDQURBLENBRGdHO0lBQUEsQ0FBbEcsQ0FBQSxDQURnQjtFQUFBLENBQWxCLENBN0dBLENBQUE7O0FBQUEsRUFvSEEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO0FBQ2hCLFFBQUEsZ0NBQUE7QUFBQSxJQUFBLGVBQUEsR0FBa0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IscUJBQXhCLENBQWxCLENBQUE7QUFBQSxJQUNBLGVBQUEsR0FBa0IsUUFBUSxDQUFDLGNBQVQsQ0FBd0IscUJBQXhCLENBRGxCLENBQUE7QUFBQSxJQUVBLENBQUEsQ0FBRSxzQkFBRixDQUF5QixDQUFDLEtBQTFCLENBQWdDLFNBQUEsR0FBQTtBQUM5QixNQUFBLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxXQUFSLENBQW9CLGlCQUFwQixDQUFBLENBRDhCO0lBQUEsQ0FBaEMsQ0FGQSxDQURnQjtFQUFBLENBQWxCLENBcEhBLENBQUE7QUFBQSIsImZpbGUiOiJhcHBsaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyIsInNvdXJjZXNDb250ZW50IjpbIiMjI1xuSW5jbHVkZSB5b3VyIGZpbGVzIGhlcmVcbiMjI1xuXG4jPSByZXF1aXJlIGZpbGVuYW1lLmNvZmZlZVxuXG4kLnN0ZWxsYXIoKTtcblxuXG4jIyNcblx0T3dsLkRlZmF1bHRzID0ge1xuXHRcdGl0ZW1zOiAzLFxuXHRcdGxvb3A6IGZhbHNlLFxuXHRcdGNlbnRlcjogZmFsc2UsXG5cblx0XHRtb3VzZURyYWc6IHRydWUsXG5cdFx0dG91Y2hEcmFnOiB0cnVlLFxuXHRcdHB1bGxEcmFnOiB0cnVlLFxuXHRcdGZyZWVEcmFnOiBmYWxzZSxcblxuXHRcdG1hcmdpbjogMCxcblx0XHRzdGFnZVBhZGRpbmc6IDAsXG5cblx0XHRtZXJnZTogZmFsc2UsXG5cdFx0bWVyZ2VGaXQ6IHRydWUsXG5cdFx0YXV0b1dpZHRoOiBmYWxzZSxcblxuXHRcdHN0YXJ0UG9zaXRpb246IDAsXG5cdFx0cnRsOiBmYWxzZSxcblxuXHRcdHNtYXJ0U3BlZWQ6IDI1MCxcblx0XHRmbHVpZFNwZWVkOiBmYWxzZSxcblx0XHRkcmFnRW5kU3BlZWQ6IGZhbHNlLFxuXG5cdFx0cmVzcG9uc2l2ZToge30sXG5cdFx0cmVzcG9uc2l2ZVJlZnJlc2hSYXRlOiAyMDAsXG5cdFx0cmVzcG9uc2l2ZUJhc2VFbGVtZW50OiB3aW5kb3csXG5cdFx0cmVzcG9uc2l2ZUNsYXNzOiBmYWxzZSxcblxuXHRcdGZhbGxiYWNrRWFzaW5nOiAnc3dpbmcnLFxuXG5cdFx0aW5mbzogZmFsc2UsXG5cblx0XHRuZXN0ZWRJdGVtU2VsZWN0b3I6IGZhbHNlLFxuXHRcdGl0ZW1FbGVtZW50OiAnZGl2Jyxcblx0XHRzdGFnZUVsZW1lbnQ6ICdkaXYnLFxuXG5cdFx0Ly8gQ2xhc3NlcyBhbmQgTmFtZXNcblx0XHR0aGVtZUNsYXNzOiAnb3dsLXRoZW1lJyxcblx0XHRiYXNlQ2xhc3M6ICdvd2wtY2Fyb3VzZWwnLFxuXHRcdGl0ZW1DbGFzczogJ293bC1pdGVtJyxcblx0XHRjZW50ZXJDbGFzczogJ2NlbnRlcicsXG5cdFx0YWN0aXZlQ2xhc3M6ICdhY3RpdmUnXG5cdH07XG5cblx0TmF2aWdhdGlvbi5EZWZhdWx0cyA9IHtcblx0XHRuYXY6IGZhbHNlLFxuXHRcdG5hdlJld2luZDogdHJ1ZSxcblx0XHRuYXZUZXh0OiBbICdwcmV2JywgJ25leHQnIF0sXG5cdFx0bmF2U3BlZWQ6IGZhbHNlLFxuXHRcdG5hdkVsZW1lbnQ6ICdkaXYnLFxuXHRcdG5hdkNvbnRhaW5lcjogZmFsc2UsXG5cdFx0bmF2Q29udGFpbmVyQ2xhc3M6ICdvd2wtbmF2Jyxcblx0XHRuYXZDbGFzczogWyAnb3dsLXByZXYnLCAnb3dsLW5leHQnIF0sXG5cdFx0c2xpZGVCeTogMSxcblx0XHRkb3RDbGFzczogJ293bC1kb3QnLFxuXHRcdGRvdHNDbGFzczogJ293bC1kb3RzJyxcblx0XHRkb3RzOiB0cnVlLFxuXHRcdGRvdHNFYWNoOiBmYWxzZSxcblx0XHRkb3REYXRhOiBmYWxzZSxcblx0XHRkb3RzU3BlZWQ6IGZhbHNlLFxuXHRcdGRvdHNDb250YWluZXI6IGZhbHNlLFxuXHRcdGNvbnRyb2xzQ2xhc3M6ICdvd2wtY29udHJvbHMnXG5cdH1cblxuIyMjXG5cbiQoXCIjcXVvdGUtc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgaXRlbXM6IDEsXG4gICAgIGxvb3A6IHRydWUsXG4gICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICBuYXY6IGZhbHNlLFxuICAgICBkb3RzOiB0cnVlLFxuICAgICB9KTtcblxuJChcIiNnYWxsZXJ5LXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgIGl0ZW1zOiAxLFxuICAgICBsb29wOiB0cnVlLFxuICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgbmF2OiBmYWxzZSxcbiAgICAgZG90czogdHJ1ZSxcbiAgICAgfSk7XG5cbiMgbW9kYWxzXG4kIC0+XG4gICQoJyNtb2RhbC0xJykub24gJ2NoYW5nZScsIC0+XG4gICAgaWYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKVxuICAgICAgJCgnYm9keScpLmFkZENsYXNzICdtb2RhbC1vcGVuJ1xuICAgIGVsc2VcbiAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyAnbW9kYWwtb3BlbidcbiAgICByZXR1cm5cbiAgJCgnLm1vZGFsLWZhZGUtc2NyZWVuLCAubW9kYWwtY2xvc2UnKS5vbiAnY2xpY2snLCAtPlxuICAgICQoJy5tb2RhbC1zdGF0ZTpjaGVja2VkJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5jaGFuZ2UoKVxuICAgIHJldHVyblxuICAkKCcubW9kYWwtaW5uZXInKS5vbiAnY2xpY2snLCAoZSkgLT5cbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgcmV0dXJuXG4gIHJldHVyblxuICBcbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gICQoJy5zbGlkaW5nLXBhbmVsLWJ1dHRvbiwuc2xpZGluZy1wYW5lbC1mYWRlLXNjcmVlbiwuc2xpZGluZy1wYW5lbC1jbG9zZScpLm9uICdjbGljayB0b3VjaHN0YXJ0JywgKGUpIC0+XG4gICAgJCgnLnNsaWRpbmctcGFuZWwtY29udGVudCwuc2xpZGluZy1wYW5lbC1mYWRlLXNjcmVlbicpLnRvZ2dsZUNsYXNzICdpcy12aXNpYmxlJ1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVyblxuICByZXR1cm5cblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgZXhwYW5kZXJUcmlnZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWV4cGFuZGVyLXRyaWdnZXInKVxuICBleHBhbmRlckNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtZXhwYW5kZXItY29udGVudCcpXG4gICQoJyNqcy1leHBhbmRlci10cmlnZ2VyJykuY2xpY2sgLT5cbiAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzICdleHBhbmRlci1oaWRkZW4nXG4gICAgcmV0dXJuXG4gIHJldHVyblxuIl19