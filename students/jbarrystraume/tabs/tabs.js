$(function tabs() {
	$(".tab-content").hide();
	$(".tab-content#tab1").show();

	$("li").click(function() {
    	$("li").removeClass("active");
    	$(this).addClass("active");
    	$(".tab-content").hide();
    	var selectedTab = $("a",this).attr("href");
    	$(selectedTab).fadeIn();
	});
});