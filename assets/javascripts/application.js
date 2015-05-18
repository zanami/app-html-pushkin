
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

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcGxpY2F0aW9uLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOztHQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsQ0FBQyxDQUFDLE9BQUYsQ0FBQSxDQU5BLENBQUE7O0FBU0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FUQTs7QUFBQSxFQTZFQSxDQUFBLENBQUUsZUFBRixDQUFrQixDQUFDLFdBQW5CLENBQStCO0FBQUEsSUFDMUIsS0FBQSxFQUFPLENBRG1CO0FBQUEsSUFFMUIsSUFBQSxFQUFNLElBRm9CO0FBQUEsSUFHMUIsUUFBQSxFQUFVLElBSGdCO0FBQUEsSUFJMUIsR0FBQSxFQUFLLEtBSnFCO0FBQUEsSUFLMUIsSUFBQSxFQUFNLElBTG9CO0dBQS9CLENBN0VBLENBQUE7O0FBQUEsRUFxRkEsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsV0FBckIsQ0FBaUM7QUFBQSxJQUM1QixLQUFBLEVBQU8sQ0FEcUI7QUFBQSxJQUU1QixJQUFBLEVBQU0sSUFGc0I7QUFBQSxJQUc1QixRQUFBLEVBQVUsSUFIa0I7QUFBQSxJQUk1QixHQUFBLEVBQUssS0FKdUI7QUFBQSxJQUs1QixJQUFBLEVBQU0sSUFMc0I7R0FBakMsQ0FyRkEsQ0FBQTs7QUFBQSxFQTZGQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxXQUFyQixDQUFpQztBQUFBLElBQzVCLEtBQUEsRUFBTyxDQURxQjtBQUFBLElBRTVCLElBQUEsRUFBTSxJQUZzQjtBQUFBLElBRzVCLFFBQUEsRUFBVSxJQUhrQjtBQUFBLElBSTVCLEdBQUEsRUFBSyxLQUp1QjtBQUFBLElBSzVCLElBQUEsRUFBTSxJQUxzQjtBQUFBLElBTTVCLFVBQUEsRUFBWSxTQU5nQjtHQUFqQyxDQTdGQSxDQUFBOztBQUFBLEVBc0dBLENBQUEsQ0FBRSxlQUFGLENBQWtCLENBQUMsV0FBbkIsQ0FBK0I7QUFBQSxJQUMxQixLQUFBLEVBQU8sQ0FEbUI7QUFBQSxJQUUxQixJQUFBLEVBQU0sSUFGb0I7QUFBQSxJQUcxQixRQUFBLEVBQVUsSUFIZ0I7QUFBQSxJQUkxQixHQUFBLEVBQUssS0FKcUI7QUFBQSxJQUsxQixJQUFBLEVBQU0sSUFMb0I7QUFBQSxJQU0xQixVQUFBLEVBQVksU0FOYztHQUEvQixDQXRHQSxDQUFBOztBQUFBLEVBaUhBLENBQUEsQ0FBRSxTQUFBLEdBQUE7QUFDQSxJQUFBLENBQUEsQ0FBRSxVQUFGLENBQWEsQ0FBQyxFQUFkLENBQWlCLFFBQWpCLEVBQTJCLFNBQUEsR0FBQTtBQUN6QixNQUFBLElBQUcsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLEVBQVIsQ0FBVyxVQUFYLENBQUg7QUFDRSxRQUFBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLFlBQW5CLENBQUEsQ0FERjtPQUFBLE1BQUE7QUFHRSxRQUFBLENBQUEsQ0FBRSxNQUFGLENBQVMsQ0FBQyxXQUFWLENBQXNCLFlBQXRCLENBQUEsQ0FIRjtPQUR5QjtJQUFBLENBQTNCLENBQUEsQ0FBQTtBQUFBLElBTUEsQ0FBQSxDQUFFLGtDQUFGLENBQXFDLENBQUMsRUFBdEMsQ0FBeUMsT0FBekMsRUFBa0QsU0FBQSxHQUFBO0FBQ2hELE1BQUEsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsSUFBMUIsQ0FBK0IsU0FBL0IsRUFBMEMsS0FBMUMsQ0FBZ0QsQ0FBQyxNQUFqRCxDQUFBLENBQUEsQ0FEZ0Q7SUFBQSxDQUFsRCxDQU5BLENBQUE7QUFBQSxJQVNBLENBQUEsQ0FBRSxjQUFGLENBQWlCLENBQUMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsU0FBQyxDQUFELEdBQUE7QUFDNUIsTUFBQSxDQUFDLENBQUMsZUFBRixDQUFBLENBQUEsQ0FENEI7SUFBQSxDQUE5QixDQVRBLENBREE7RUFBQSxDQUFGLENBakhBLENBQUE7O0FBQUEsRUFnSUEsQ0FBQSxDQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0IsU0FBQSxHQUFBO0FBQ2hCLElBQUEsQ0FBQSxDQUFFLHVFQUFGLENBQTBFLENBQUMsRUFBM0UsQ0FBOEUsa0JBQTlFLEVBQWtHLFNBQUMsQ0FBRCxHQUFBO0FBQ2hHLE1BQUEsQ0FBQSxDQUFFLG1EQUFGLENBQXNELENBQUMsV0FBdkQsQ0FBbUUsWUFBbkUsQ0FBQSxDQUFBO0FBQUEsTUFDQSxDQUFDLENBQUMsY0FBRixDQUFBLENBREEsQ0FEZ0c7SUFBQSxDQUFsRyxDQUFBLENBRGdCO0VBQUEsQ0FBbEIsQ0FoSUEsQ0FBQTs7QUFBQSxFQXVJQSxDQUFBLENBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFBLEdBQUE7QUFDaEIsUUFBQSxnQ0FBQTtBQUFBLElBQUEsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEIsQ0FBbEIsQ0FBQTtBQUFBLElBQ0EsZUFBQSxHQUFrQixRQUFRLENBQUMsY0FBVCxDQUF3QixxQkFBeEIsQ0FEbEIsQ0FBQTtBQUFBLElBRUEsQ0FBQSxDQUFFLHNCQUFGLENBQXlCLENBQUMsS0FBMUIsQ0FBZ0MsU0FBQSxHQUFBO0FBQzlCLE1BQUEsQ0FBQSxDQUFFLElBQUYsQ0FBTyxDQUFDLFdBQVIsQ0FBb0IsaUJBQXBCLENBQUEsQ0FEOEI7SUFBQSxDQUFoQyxDQUZBLENBRGdCO0VBQUEsQ0FBbEIsQ0F2SUEsQ0FBQTtBQUFBIiwiZmlsZSI6ImFwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiIyMjXG5JbmNsdWRlIHlvdXIgZmlsZXMgaGVyZVxuIyMjXG5cbiM9IHJlcXVpcmUgZmlsZW5hbWUuY29mZmVlXG5cbiQuc3RlbGxhcigpO1xuXG5cbiMjI1xuXHRPd2wuRGVmYXVsdHMgPSB7XG5cdFx0aXRlbXM6IDMsXG5cdFx0bG9vcDogZmFsc2UsXG5cdFx0Y2VudGVyOiBmYWxzZSxcblxuXHRcdG1vdXNlRHJhZzogdHJ1ZSxcblx0XHR0b3VjaERyYWc6IHRydWUsXG5cdFx0cHVsbERyYWc6IHRydWUsXG5cdFx0ZnJlZURyYWc6IGZhbHNlLFxuXG5cdFx0bWFyZ2luOiAwLFxuXHRcdHN0YWdlUGFkZGluZzogMCxcblxuXHRcdG1lcmdlOiBmYWxzZSxcblx0XHRtZXJnZUZpdDogdHJ1ZSxcblx0XHRhdXRvV2lkdGg6IGZhbHNlLFxuXG5cdFx0c3RhcnRQb3NpdGlvbjogMCxcblx0XHRydGw6IGZhbHNlLFxuXG5cdFx0c21hcnRTcGVlZDogMjUwLFxuXHRcdGZsdWlkU3BlZWQ6IGZhbHNlLFxuXHRcdGRyYWdFbmRTcGVlZDogZmFsc2UsXG5cblx0XHRyZXNwb25zaXZlOiB7fSxcblx0XHRyZXNwb25zaXZlUmVmcmVzaFJhdGU6IDIwMCxcblx0XHRyZXNwb25zaXZlQmFzZUVsZW1lbnQ6IHdpbmRvdyxcblx0XHRyZXNwb25zaXZlQ2xhc3M6IGZhbHNlLFxuXG5cdFx0ZmFsbGJhY2tFYXNpbmc6ICdzd2luZycsXG5cblx0XHRpbmZvOiBmYWxzZSxcblxuXHRcdG5lc3RlZEl0ZW1TZWxlY3RvcjogZmFsc2UsXG5cdFx0aXRlbUVsZW1lbnQ6ICdkaXYnLFxuXHRcdHN0YWdlRWxlbWVudDogJ2RpdicsXG5cblx0XHQvLyBDbGFzc2VzIGFuZCBOYW1lc1xuXHRcdHRoZW1lQ2xhc3M6ICdvd2wtdGhlbWUnLFxuXHRcdGJhc2VDbGFzczogJ293bC1jYXJvdXNlbCcsXG5cdFx0aXRlbUNsYXNzOiAnb3dsLWl0ZW0nLFxuXHRcdGNlbnRlckNsYXNzOiAnY2VudGVyJyxcblx0XHRhY3RpdmVDbGFzczogJ2FjdGl2ZSdcblx0fTtcblxuXHROYXZpZ2F0aW9uLkRlZmF1bHRzID0ge1xuXHRcdG5hdjogZmFsc2UsXG5cdFx0bmF2UmV3aW5kOiB0cnVlLFxuXHRcdG5hdlRleHQ6IFsgJ3ByZXYnLCAnbmV4dCcgXSxcblx0XHRuYXZTcGVlZDogZmFsc2UsXG5cdFx0bmF2RWxlbWVudDogJ2RpdicsXG5cdFx0bmF2Q29udGFpbmVyOiBmYWxzZSxcblx0XHRuYXZDb250YWluZXJDbGFzczogJ293bC1uYXYnLFxuXHRcdG5hdkNsYXNzOiBbICdvd2wtcHJldicsICdvd2wtbmV4dCcgXSxcblx0XHRzbGlkZUJ5OiAxLFxuXHRcdGRvdENsYXNzOiAnb3dsLWRvdCcsXG5cdFx0ZG90c0NsYXNzOiAnb3dsLWRvdHMnLFxuXHRcdGRvdHM6IHRydWUsXG5cdFx0ZG90c0VhY2g6IGZhbHNlLFxuXHRcdGRvdERhdGE6IGZhbHNlLFxuXHRcdGRvdHNTcGVlZDogZmFsc2UsXG5cdFx0ZG90c0NvbnRhaW5lcjogZmFsc2UsXG5cdFx0Y29udHJvbHNDbGFzczogJ293bC1jb250cm9scydcblx0fVxuXG4jIyNcblxuJChcIiNxdW90ZS1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICBpdGVtczogMSxcbiAgICAgbG9vcDogdHJ1ZSxcbiAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgIG5hdjogZmFsc2UsXG4gICAgIGRvdHM6IHRydWUsXG4gICAgIH0pO1xuXG4kKFwiI2dhbGxlcnktc2xpZGVyXCIpLm93bENhcm91c2VsKHtcbiAgICAgaXRlbXM6IDEsXG4gICAgIGxvb3A6IHRydWUsXG4gICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICBuYXY6IGZhbHNlLFxuICAgICBkb3RzOiB0cnVlLFxuICAgICB9KTtcblxuJChcIiNyZW50MTcwLXNsaWRlclwiKS5vd2xDYXJvdXNlbCh7XG4gICAgIGl0ZW1zOiAxLFxuICAgICBsb29wOiB0cnVlLFxuICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgbmF2OiBmYWxzZSxcbiAgICAgZG90czogdHJ1ZSxcbiAgICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgICB9KTtcblxuJChcIiNyZW50My1zbGlkZXJcIikub3dsQ2Fyb3VzZWwoe1xuICAgICBpdGVtczogMSxcbiAgICAgbG9vcDogdHJ1ZSxcbiAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgIG5hdjogZmFsc2UsXG4gICAgIGRvdHM6IHRydWUsXG4gICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0J1xuICAgICB9KTtcblxuXG4jIG1vZGFsc1xuJCAtPlxuICAkKCcjbW9kYWwtMScpLm9uICdjaGFuZ2UnLCAtPlxuICAgIGlmICQodGhpcykuaXMoJzpjaGVja2VkJylcbiAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyAnbW9kYWwtb3BlbidcbiAgICBlbHNlXG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MgJ21vZGFsLW9wZW4nXG4gICAgcmV0dXJuXG4gICQoJy5tb2RhbC1mYWRlLXNjcmVlbiwgLm1vZGFsLWNsb3NlJykub24gJ2NsaWNrJywgLT5cbiAgICAkKCcubW9kYWwtc3RhdGU6Y2hlY2tlZCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuY2hhbmdlKClcbiAgICByZXR1cm5cbiAgJCgnLm1vZGFsLWlubmVyJykub24gJ2NsaWNrJywgKGUpIC0+XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIHJldHVyblxuICByZXR1cm5cbiAgXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICAkKCcuc2xpZGluZy1wYW5lbC1idXR0b24sLnNsaWRpbmctcGFuZWwtZmFkZS1zY3JlZW4sLnNsaWRpbmctcGFuZWwtY2xvc2UnKS5vbiAnY2xpY2sgdG91Y2hzdGFydCcsIChlKSAtPlxuICAgICQoJy5zbGlkaW5nLXBhbmVsLWNvbnRlbnQsLnNsaWRpbmctcGFuZWwtZmFkZS1zY3JlZW4nKS50b2dnbGVDbGFzcyAnaXMtdmlzaWJsZSdcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm5cbiAgcmV0dXJuXG5cbiQoZG9jdW1lbnQpLnJlYWR5IC0+XG4gIGV4cGFuZGVyVHJpZ2dlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1leHBhbmRlci10cmlnZ2VyJylcbiAgZXhwYW5kZXJDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzLWV4cGFuZGVyLWNvbnRlbnQnKVxuICAkKCcjanMtZXhwYW5kZXItdHJpZ2dlcicpLmNsaWNrIC0+XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcyAnZXhwYW5kZXItaGlkZGVuJ1xuICAgIHJldHVyblxuICByZXR1cm5cbiJdfQ==