(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
	 
  });

})(jQuery);



document.getElementById('sidebar').classList.toggle('active');

var nav = document.querySelector('components');
nav.addEventListener('toggle', function (event) {

	// Only run if the dropdown is open
	if (!event.target.open) return;

	// Get all other open dropdowns and close them
	var dropdowns = nav.querySelectorAll('.items[open]');
	Array.prototype.forEach.call(dropdowns, function (dropdown) {
		if (dropdown === event.target) return;
		dropdown.removeAttribute('open');
	});

}, true);



