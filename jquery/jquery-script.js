$(document).ready(function () {
    // for changing the css for resume_container
    resume_container();

    // Add styling class to input boxes
    input_box();

    // Hide the footer
    footer_content();

    // Add references section above footer
    add_references();
});

/* *******************************************
    changing resume-container css using jquery 
   ******************************************** */
function resume_container() {
    // Change ID for
    let resume_container = $("#resume-container");
    resume_container.addClass("body-content");
}

/* *******************************************
    changing input-box css using jquery 
   ******************************************** */
function input_box() {
    // Adding a new class to all input fields
    let input_box = $(".input-box");
    input_box.addClass("input-field");
}


/* *******************************************
            Hiding the footer 
   ******************************************** */
function footer_content() {
    // Hides footer
    let footer_content = $("#mypage-footer");
    footer_content.hide();
}

/* *******************************************
    Adding new div to the container before footer
   ******************************************** */
function add_references() {
    // Adding a new div with before the footer
    let footer_content = $("#mypage-footer");
    footer_content.before('<div id="references"></div>');

    // Add class
    $('#references').addClass("section-row");

    // Adding text to the div
    $('#references').html(`
        <div class="section-title"><h2>References</h2></div>
        <div class="section-content">
            <p>
                <strong>Ryan Ramirez</strong> – Product Lead<br>
                Seashore Enterprises<br>
                187 Clive Road, House Springs, Missouri 63940<br>
                (636) 423-2759<br>
                <em>Ryan was my direct manager from March 2018 until March 2020</em>
            </p>
            <p>
                <strong>Michael Brown</strong> – Director of Operations<br>
                FutureTech Enterprises<br>
                9102 Oak Boulevard, Rivertown, TX 75001<br>
                (555) 555-1212
            </p>
        </div>
    `);

    // For showing refernce section
    $('#references').show();
}
