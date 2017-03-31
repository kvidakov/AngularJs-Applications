"use strict";

$(document).ready(function ()
{

	var tm = TweenMax;
	var hompage_loading_values = {opacity: 0, y:120, delay: 0.7};
	var menu_flying_values = {opacity: 0, x:-120, delay: 0.4};
	var chpt_back = $(".chapters_background");
	tm.from(".pattern_background", 0.8, {opacity: 0, y:350});
	tm.staggerFrom(".fly_in_when_loaded", 0.5, hompage_loading_values, 0.1);

	var menu_background = document.getElementById("menu_background");
	var menu_text = document.getElementById("menu_text");
	var share_icons = $(".share_icons");
	$("#menu_background").hide();
	$(chpt_back).hide();
	$(".black_overlay").hide();
	share_icons.hide();
	$(".menu_left").click(function ()	{
		this.classList.toggle("change");
		if ($('#menu_background').is(':visible'))
		{
			menu_text.innerHTML = "Menu";
			//$(".black_overlay").removeAttr("id");
			$(".black_overlay").hide();
			$('#menu_background').toggle('slide', {
				direction: 'left'
			}, 600);
			//$("#menu_chapters_icon").removeClass("disable_other_links");
		}
		else
		{
			menu_text.innerHTML = "Close";
			//$("#menu_chapters_icon").addClass("disable_other_links");
			//$(".black_overlay").attr("id", "dark_background");
			$(".black_overlay").show();
			tm.staggerFrom(".fly_in_when_menu_opened", 0.4, menu_flying_values, 0.2);
			$('#menu_background').toggle('slide', {
				direction: 'left'
			}, 600);

		}
	});
	$("#menu_chapters_icon").click(function ()	{
		if ($(chpt_back).is(":visible") == false){
			$(chpt_back).toggle('size', { origin: ["top", "right"] }, 400);
			//$(".black_overlay").attr("id", "dark_background");
			$(".black_overlay").show();
			$(".menu_container").addClass("disable_other_links");
		}
		else {
			RemoveChapers();
		}
	});
	$("#chapter_x").click(function(){
		RemoveChapers();
	});
	function RemoveChapers()
	{
		$(chpt_back).toggle('size', { origin: ["top", "right"] }, 400);
		//$(".black_overlay").removeAttr("id");
		$(".black_overlay").hide();
		$(".menu_container").removeClass("disable_other_links");
	}

	$(".share_button").click(function ()
	{
		if ($(".share_icons").is(":visible") == false){
			shareRotate(180);
			$('.share_icons').toggle('slide', {
				direction: 'right'
			}, 600);
			setTimeout(function ()
			{
				$(".share_button").css("right","3%");
			}, 400);
		}
		else{
			shareRotate(0);
			$('.share_icons').toggle('slide', {
				direction: 'right'
			}, 600);
			setTimeout(function ()
			{
				$(".share_button").css("right","4%");
			}, 400);
		}
	});

	function shareRotate(degrees)
	{
		$(".share_button").css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
			'-moz-transform' : 'rotate('+ degrees +'deg)',
			'-ms-transform' : 'rotate('+ degrees +'deg)',
			'transform' : 'rotate('+ degrees +'deg)'});
	}

	var expMore = $("#exp_more_img");
	function ExploreMore()
	{
		console.log("Uso u exploremore funkciju");
		function down()
		{
			console.log("Uso u down funkciju");
			$(expMore).animate({"margin-top": "8px" }, 500);
			setTimeout(function ()
			{
				function up()
				{
					console.log("Uso u up funkciju");
					$(expMore).animate({"margin-top": "3px" }, 500);
					setTimeout(function ()
					{
						down();
					},500);
				}up()
			},500);

		}
			down();

	}

	$(document).ready(function ()
	{
		ExploreMore()
	});
});

$(document).ready(function(){
	jQuery('#barba-wrapper').ajaxify();
	Barba.Pjax.start();
	var FadeTransition = Barba.BaseTransition.extend({
		start: function() {
			/**
			 * This function is automatically called as soon the Transition starts
			 * this.newContainerLoading is a Promise for the loading of the new container
			 * (Barba.js also comes with an handy Promise polyfill!)
			 */

			// As soon the loading is finished and the old page is faded out, let's fade the new page
			Promise
			.all([this.newContainerLoading, this.fadeOut()])
			.then(this.fadeIn.bind(this));
		},

		fadeOut: function() {
			/**
			 * this.oldContainer is the HTMLElement of the old Container
			 */

			return $(this.oldContainer).animate({ opacity: 0 }).promise();
		},

		fadeIn: function() {
			/**
			 * this.newContainer is the HTMLElement of the new Container
			 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
			 * Please note, newContainer is available just after newContainerLoading is resolved!
			 */

			var _this = this;
			var $el = $(this.newContainer);

			$(this.oldContainer).hide();

			$el.css({
				visibility : 'visible',
				opacity : 0
			});

			$el.animate({ opacity: 1 }, 400, function() {
				/**
				 * Do not forget to call .done() as soon your transition is finished!
				 * .done() will automatically remove from the DOM the old Container
				 */

				_this.done();
			});
		}
	});

	/**
	 * Next step, you have to tell Barba to use the new Transition
	 */

	Barba.Pjax.getTransition = function() {
		/**
		 * Here you can use your own logic!
		 * For example you can use different Transition based on the current page or link...
		 */

		return FadeTransition;
	};
});
