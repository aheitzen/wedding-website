$(document).ready(function (){
    $("#activearrow").click(function (){
            	console.log("I work");
                $('html, body').animate({
                    scrollTop: $("#pictures").offset().top
                }, 1000);
            });
        });

$(document).ready(function() {
		$(".fancybox").fancybox();
	});
