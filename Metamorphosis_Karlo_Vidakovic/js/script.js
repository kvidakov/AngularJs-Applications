"use strict";

var tm = TweenMax;
var hompage_loading_values = {opacity: 0, y:120, delay: 0.7};
var menu_flying_values = {opacity: 0, x:-120, delay: 0.4};
var klik = false;

$(document).ready(function ()
{


	var chpt_back = $(".chapters_background");
	tm.from(".pattern_background", 0.8, {opacity: 0, y:350});
	tm.staggerFrom(".fly_in_when_loaded", 0.5, hompage_loading_values, 0.1);

	var menu_background = document.getElementById("menu_background");
	var menu_text = document.getElementById("menu_text");
	var share_icons = $(".share_icons");
	$("#menu_background").hide();
	$(chpt_back).hide();
	$(".black_overlay, .grey_overlay").hide();
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
		function loop() {
			$(expMore).animate({'margin-top': '23px'}, {
				duration: 1000,
				complete: function() {
					$(expMore).animate({"margin-top": "13"}, {
						duration: 1000,
						complete: loop
					});
				}});
		}
		loop();
		if ($(".explore_more").click(function ()
		{
			$(".white_background").css({
				"visibility": "visible",
				"opacity": "1"
			});
			$(".pattern_background").animate({ height: "0px",opacity: 0 },2500);
			$(".white_background").animate({ height: "100%" },2480);
			//$(".white_background_beginning").animate({height: "140px", opacity: 1},2200);
			$(".second_section_white_background").animate({height: "100%"},3000);
			setTimeout(function ()
			{
				setTimeout(function ()
				{
					$(".second_section_white_background").css({
						visibility: "visible"
					});
					tm.staggerTo(".second_section_fly_in", 0.1, {opacity: 1, y:10,ease:Back.easeOut}, 0.1);
					tm.from(".tree_img_wrapper", 1, {opacity: 0, y:80});
				},1200);


			},700);
			//$(".white_background_beginning").animate({height: "0"},1000);
			setTimeout(function ()
			{
				$(".pattern_background").css({
					"display": "none"
				});
			},2500)
		}));
		//down();
	}
	ExploreMore();


	var about_the_author_exp_bio = $(".about_the_author_exp_bio");
	var about_the_autor_wrapper = $(".about_the_autor_wrapper");
	var chapter_button_about_author = $(".chapter_button_about_author");
	if ($(chapter_button_about_author)){
	$(chapter_button_about_author).click(function ()	{
		if ($(about_the_autor_wrapper).is(":visible") == false){
			$(about_the_autor_wrapper).toggle('slide', {direction: "right"}, 200);
			$(".grey_overlay").show();
			tm.staggerFrom(".about_fly_in",0.3,{left: "100px",delay: 0.5, opacity: 0},.5);
		}
		else {
			RemoveAboutTheAuthor();
		}
	});
	}
	$("#about_x").click(function(){
		RemoveAboutTheAuthor();
	});
	function RemoveAboutTheAuthor()
	{
		$(about_the_autor_wrapper).toggle('slide', {direction: "right"}, 2300);
		$(".grey_overlay").hide();
	}

	var next_pointer = $(".next_pointer");
	var big_right_arrow = $("#big_right_arrow");
	if (next_pointer ){
		if (!$(next_pointer).click(function (){
			$(big_right_arrow).attr("src", "img/big_left_arrow.png");
			$(next_pointer).hover(function (){
				$(big_right_arrow).attr("src", "img/big_left_arrow_hover.png");
			},function ()
			{
				$(big_right_arrow).attr("src", "img/big_left_arrow.png");
			});
			tm.to(".div_for_franz_img, .div_for_bio_text",1,{left: "-1000px"});
			tm.to(".div_for_bio_text_second",.8,{left: "-730px"}, 0.5);
			setTimeout(function ()
			{
				$(".div_for_bio_text_second").css({
					"visibility": "visible"
				});
			},500);
		}));
		else {
			$(big_right_arrow).attr("src", "img/big_right_arrow.png");
			$(next_pointer).hover(function ()
			{
				$(big_right_arrow).attr("src", "img/big_right_arrow_hover.png");
			}, function ()
			{
				$(big_right_arrow).attr("src", "img/big_right_arrow.png");
			});
		}
	}
	
	var second_section_white_background = $(".second_section_white_background");
	console.log("prije funkcije skorl");


	$(second_section_white_background).bind('DOMMouseScroll mousewheel', function(e)
	{
		$(".col-lg-12").removeClass("second_section_fly_in");
		if (!(e.originalEvent.wheelDelta / 120 > 0))
		{
			console.log(("TU je uso u funkciju skollllL!"));
			$(second_section_white_background).css({
				top: 0,
				left: 0
			});
			$(".white_background2").css({
				"visibility": "visible",
				"opacity": "1"
			});
			$(second_section_white_background).animate({height: "0px", opacity: .5, "background-color": "#000"}, 3000);
			$(".text_wrapper").animate({"margin-top": "0px"}, 2500);
			$(".white_background2").animate({height: "100%"}, 2500);
			//$(".white_background_beginning2").animate({height: "140px", opacity: 1},2200);
			$(".section_three_white_background").animate({height: "100%"}, 2400);
			setTimeout(function ()
			{
				setTimeout(function ()
				{
					$(".section_three_white_background").css({
						visibility: "visible"
					});
					tm.from(".section_three_chapter_number_and_text_wrapper", 1, {
						opacity: 0,
						height: 0,
						ease: Back.easeOut
					});
					//tm.from(".tree_img_wrapper", 1, {opacity: 0, y:80});
				}, 1500);


			}, 800);
			//$(".white_background_beginning2").animate({height: "0"},800);
			setTimeout(function ()
			{
				$(second_section_white_background).css({
					"display": "none"
				});
			}, 2600)
		}
	});

	$(".section_three_white_background").bind('DOMMouseScroll mousewheel', function(e)
	{
		if (!(e.originalEvent.wheelDelta / 120 > 0))
		{
			console.log(("TU je uso u funkciju skollllL!"));
			$("footer").css({
				display: "block"
			});
			$(".section_three_white_background").css({
				top: 0,
				left: 0
			});
			if($(".section_three_text_wrapper").scrollTop() + $(".section_three_text_wrapper").height() == $(".section_three_text_wrapper").height()){
				$("footer").animate({"height": "20%"}, 1000);
				$(".section_three_white_background").animate({height: "80%"}, 1000);
				$(".section_three_chapter_number_and_text_wrapper").animate({top: "40%"}, 1000);
				$(".white_transparent_overlay").animate({bottom: "10%"}, 1000);
			}
			//$(".white_background_beginning2").animate({height: "140px", opacity: 1},2200);
			//$(".section_three_white_background").animate({height: "100%"}, 3000);
			//setTimeout(function ()
			//{
			//	setTimeout(function ()
			//	{
			//		$(".section_three_white_background").css({
			//			visibility: "visible"
			//		});
			//		tm.from(".section_three_chapter_number_and_text_wrapper", 1, {
			//			opacity: 0,
			//			height: 0,
			//			ease: Back.easeOut
			//		}, 0.1);
			//		//tm.from(".tree_img_wrapper", 1, {opacity: 0, y:80});
			//	}, 1200);
			//
			//
			//}, 500);
			////$(".white_background_beginning2").animate({height: "0"},800);
			//setTimeout(function ()
			//{
			//	$(second_section_white_background).css({
			//		"display": "none"
			//	});
			//}, 2500)
		}
	});
});

//$(document).ready(function(){
//
//	var FadeTransition = Barba.BaseTransition.extend({
//		start: function() {
//			/**
//			 * This function is automatically called as soon the Transition starts
//			 * this.newContainerLoading is a Promise for the loading of the new container
//			 * (Barba.js also comes with an handy Promise polyfill!)
//			 */
//
//			// As soon the loading is finished and the old page is faded out, let's fade the new page
//			Promise
//			.all([this.newContainerLoading, this.fadeOut()])
//			.then(this.fadeIn.bind(this));
//		},
//
//		fadeOut: function() {
//			/**
//			 * this.oldContainer is the HTMLElement of the old Container
//			 */
//			$(".white_background").css({
//				"visibility": "visible",
//				"z-index": "100",
//				"opacity": "1"
//			});
//			$(".pattern_background").animate({ height: "0px",opacity: 0 },2500);
//			$(".white_background").animate({ height: "100%" },2480);
//			$(".white_background_beginning").animate({height: "140px", opacity: 1},2200);
//				setTimeout(function ()
//				{
//					console.log("Izvrsila se jebena funkcija");
//					tm.staggerFrom(".contact_fly_in", 0.6, {opacity: 0, top:80,ease:Back.easeOut, delay: 0.1}, 0.2);
//					tm.from(".tree_img_wrapper", 0.4, {opacity: 0, y:80, delay: 0.7}, 0.2);
//				},1800);
//			$(".white_background_beginning").animate({height: "0"},500);
//			return $(this.oldContainer).animate({opacity: 1},2500).promise();
//		},
//
//		fadeIn: function() {
//			/**
//			 * this.newContainer is the HTMLElement of the new Container
//			 * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
//			 * Please note, newContainer is available just after newContainerLoading is resolved!
//			 */
//
//			var _this = this;
//			var $el = $(this.newContainer);
//
//			$(this.oldContainer).toggle(3000);
//
//			$el.css({
//				visibility : 'visible',
//				opacity : 1
//			});
//			$el.animate({ opacity: 1 }, function() {
//				/**
//				 * Do not forget to call .done() as soon your transition is finished!
//				 * .done() will automatically remove from the DOM the old Container
//				 */
//				setTimeout(function ()
//				{
//					_this.done();
//				},5000);
//			});
//
//		}
//	});
//
//	/**
//	 * Next step, you have to tell Barba to use the new Transition
//	 */
//
//	Barba.Pjax.getTransition = function() {
//		/**
//		 * Here you can use your own logic!
//		 * For example you can use different Transition based on the current page or link...
//		 */
//
//		return FadeTransition;
//	};
//	Barba.Pjax.start();
//	Barba.Prefetch.init();
//});

$(document).ready(function ()
{
	$(".chapter_button_about_author").hover(function ()
	{
		$(".chapter_button_arrow_right").attr("src", "img/arrow_right_hover.svg");
	},function ()
	{
		$(".chapter_button_arrow_right").attr("src", "img/arrow_right.svg");
	});
	//$(".contact_fly_in").ready(loadContactElements());


});
