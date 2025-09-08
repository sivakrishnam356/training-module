/* **********************
    css changes using jquery 
***************************** */ 

$(document).ready(function () {

    // resume container css changes 
    $(".change-bg").addClass("highlight-bg");
    $(".change-bg").addClass("border");

    // header css changes
    $("#mypage-header").addClass("border-bottom");
    $("#mypage-header").addClass("highlight-bg");

    // input box
    $(".input-box").addClass("input-field");

    // section title border color
    $(".section-title").addClass("border-color");

    // content text color 
    $(".change-color").addClass("text-color");

    // hiding footer
    $("#mypage-footer").hide();

    // showing refernce div
    $("#references").show().css("display", "flex");
});

