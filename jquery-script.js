
/* **********************
    css changes using jquery 
***************************** */

$(document).ready(function () {

    // resume container css changes 
    $(".change-bg").addClass("highlight-bg border");


    // Animating header
    let header = $("#mypage-header");
    header.addClass("border-bottom highlight-bg");


    header.hover(
        function () {
            header.stop().animate(
                { height: '100px' }
                , 1000);
        },
        function () {
            header.stop().animate(
                { height: '10px' },
                1000
            );
        }
    );

    // input box
    $(".input-box").addClass("input-field");

    $(".card-color").addClass("card-bg");

    // section title border color
    $(".section-title").addClass("border-color");

    // content text color 
    $(".change-color").addClass("text-color");

    // Animating footer
    let footer = $("#mypage-footer");
    let footer_content = $("#mypage-footer-content");
    footer.addClass("border");

   footer.on("mouseenter", function () {
        footer_content.stop(true, true).slideDown(1000, function () {
           showCustomAlert();
        });
    });

    // showing refernce div
    $("#references").css("display", "flex");


    function showCustomAlert() {
        if ($("#custom-alert").is(":hidden")) {
            $("#custom-alert").css("display", "flex");
        }
    }

    $("#alert-ok-btn").click(function(){
        $("#custom-alert").css("display","none");
        footer_content.stop(true, false).slideUp(1000);
    });


   
});

