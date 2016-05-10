$(document).ready(function (){
            $("#activearrow").click(function (){
                $('html, body').animate({
                    scrollTop: $("#pictures").offset().top
                }, 1000);
            });
        });