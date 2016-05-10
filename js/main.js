$(document).ready(function (){
            $("#activearrow").click(function (){
                $('html, body').animate({
                    scrollTop: $("#projects").offset().top
                }, 1000);
            });
        });