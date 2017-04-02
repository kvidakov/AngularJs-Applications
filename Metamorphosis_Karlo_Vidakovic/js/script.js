"use strict";

var tm = TweenMax;
var hompage_loading_values = {opacity: 0, y:120, delay: 0.7};
var menu_flying_values = {opacity: 0, x:-120, delay: 0.4};

$(document).ready(function ()
{
	var chpt_back = $(".chapters_background");
	var ptrn_back = $(".pattern_background");
	var menu_text = document.getElementById("menu_text");
	var share_icons = $(".share_icons");
	var menu_background = $("#menu_background");
	var bol = $(".black_overlay");
	var gol = $(".grey_overlay");
	tm.from(ptrn_back, 0.8, {opacity: 0, y:350});
	tm.staggerFrom(".fly_in_when_loaded", 0.5, hompage_loading_values, 0.1);
	$(menu_background).hide();
	$(chpt_back).hide();
	$(bol).hide();
	$(gol).hide();
	share_icons.hide();
	$(".menu_left").click(function ()	{
		this.classList.toggle("change");
		if ($(menu_background).is(':visible'))
		{
			menu_text.innerHTML = "Menu";
			$(bol).hide();
			$(menu_background).toggle('slide', {
				direction: 'left'
			}, 600);
		}
		else
		{
			menu_text.innerHTML = "Close";
			$(bol).show();
			tm.staggerFrom(".fly_in_when_menu_opened", 0.4, menu_flying_values, 0.2);
			$(menu_background).toggle('slide', {
				direction: 'left'
			}, 600);

		}
	});

	var menu_cont = $(".menu_container");
	$("#menu_chapters_icon").click(function ()	{
		if ($(chpt_back).is(":visible") == false){
			$(chpt_back).toggle('size', { origin: ["top", "right"] }, 400);
			$(bol).show();
			$(menu_cont).addClass("disable_other_links");
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
		$(bol).hide();
		$(menu_cont).removeClass("disable_other_links");
	}

	var sh_btn = $(".share_button");
	$(sh_btn).click(function ()
	{
		if ($(share_icons).is(":visible") == false){
			shareRotate(180);
			$(share_icons).toggle('slide', {
				direction: 'right'
			}, 600);
			setTimeout(function ()
			{
				$(sh_btn).css("right","3%");
			}, 400);
		}
		else{
			shareRotate(0);
			$(share_icons).toggle('slide', {
				direction: 'right'
			}, 600);
			setTimeout(function ()
			{
				$(sh_btn).css("right","4%");
			}, 400);
		}
	});

	function shareRotate(degrees)
	{
		$(sh_btn).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
			'-moz-transform' : 'rotate('+ degrees +'deg)',
			'-ms-transform' : 'rotate('+ degrees +'deg)',
			'transform' : 'rotate('+ degrees +'deg)'});
	}

	var expMoreImg = $("#exp_more_img");
	var wh_back = $(".white_background");
	var s_s_wh_back = $(".second_section_white_background");

	function ExploreMore()
	{
		function loop() {
			$(expMoreImg).animate({'margin-top': '23px'}, {
				duration: 1000,
				complete: function() {
					$(expMoreImg).animate({"margin-top": "13"}, {
						duration: 1000,
						complete: loop
					});
				}});
		}
		loop();
		if ($(".explore_more").click(function ()
		{
			$(wh_back).css({
				"visibility": "visible",
				"opacity": "1"
			});
			$(ptrn_back).animate({ height: "0px",opacity: 0 },2500);
			$(wh_back).animate({ height: "100%" },2480);
			$(s_s_wh_back).animate({height: "100%"},3000);
			setTimeout(function ()
			{
				setTimeout(function ()
				{
					$(s_s_wh_back).css({
						visibility: "visible"
					});
					tm.staggerTo(".second_section_fly_in", 0.1, {opacity: 1, y:10,ease:Back.easeOut}, 0.1);
					tm.from(".tree_img_wrapper", 1, {opacity: 0, y:80});
				},1200);
			},700);
			setTimeout(function ()
			{
				$(ptrn_back).css({
					"display": "none"
				});
			},2500)
		}));
	}
	ExploreMore();

	var about_the_author_exp_bio = $(".about_the_author_exp_bio");
	var about_the_autor_wrapper = $(".about_the_autor_wrapper");
	var chapter_button_about_author = $(".chapter_button_about_author");
	if ($(chapter_button_about_author)){
	$(chapter_button_about_author).click(function ()	{
		if ($(about_the_autor_wrapper).is(":visible") == false){
			$(about_the_autor_wrapper).toggle('slide', {direction: "right"}, 200);
			$(gol).show();
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
		$(gol).hide();
	}
	$(chapter_button_about_author).hover(function ()
	{
		$(".chapter_button_arrow_right").attr("src", "img/arrow_right_hover.svg");
	},function ()
	{
		$(".chapter_button_arrow_right").attr("src", "img/arrow_right.svg");
	});


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

	var wh_back_2 = $(".white_background2");
	var sec_three_wh_back = $(".section_three_white_background");
	var sec_three_cap_num_txt_wrap = $(".section_three_chapter_number_and_text_wrapper");
	$(s_s_wh_back).bind('DOMMouseScroll mousewheel', function(e)
	{
		$(".col-lg-12").removeClass("second_section_fly_in");
		if (!(e.originalEvent.wheelDelta / 120 > 0))
		{
			$(s_s_wh_back).css({
				top: 0,
				left: 0
			});
			$(wh_back_2).css({
				"visibility": "visible",
				"opacity": "1"
			});
			$(s_s_wh_back).animate({height: "0px", opacity: .5, "background-color": "#000"}, 3000);
			$(".text_wrapper").animate({"margin-top": "0px"}, 2500);
			$(wh_back_2).animate({height: "100%"}, 2500);
			$(sec_three_wh_back).animate({height: "100%"}, 2400);
			setTimeout(function ()
			{
				setTimeout(function ()
				{
					$(sec_three_wh_back).css({
						visibility: "visible"
					});
					tm.from(sec_three_cap_num_txt_wrap, 1, {
						opacity: 0,
						height: 0,
						ease: Back.easeOut
					});
				}, 1500);
			}, 800);
			setTimeout(function ()
			{
				$(s_s_wh_back).css({
					"display": "none"
				});
			}, 2600)
		}
	});

	var fot = $("footer");
	var sec_three_txt_wrap = $(".section_three_text_wrapper");
	$(sec_three_wh_back).bind('DOMMouseScroll mousewheel', function(e)
	{
		if (!(e.originalEvent.wheelDelta / 120 > 0))
		{
			$(fot).css({
				display: "block"
			});
			$(sec_three_wh_back).css({
				top: 0,
				left: 0
			});
			if($(sec_three_txt_wrap).scrollTop() + $(sec_three_txt_wrap).height() == $(sec_three_txt_wrap).height()){
				$(fot).animate({"height": "20%"}, 1000);
				$(sec_three_wh_back).animate({height: "80%"}, 1000);
				$(sec_three_cap_num_txt_wrap).animate({top: "40%"}, 1000);
				$(".white_transparent_overlay").animate({bottom: "10%"}, 1000);
			}
		}
	});
});
$(document).ready(function ()
{

});
