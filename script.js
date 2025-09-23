
/* ********************
    Finding max 
   ********************* */
function max_of_numbers() {

    // Getting values from the input fields
    let first_number = document.getElementById("first-number").value.trim();
    let second_number = document.getElementById("second-number").value.trim();

    // Getting html elements 
    let result = document.getElementById("max-value-section");
    let error_message = document.getElementById("error");

    // Setting output tags empty
    result.innerText = "";
    error_message.innerText = "";

    // Length validation
    let first_number_length = first_number.length;
    let second_number_length = second_number.length;

    if (first_number_length > 10 || second_number_length > 10) {
        error_message.innerText = "The number field must not exceed 10 digits.";
        return;
    }

    // Input null validation
    if (first_number === '' || second_number === '') {
        error_message.innerText = "Enter valid input";
        return;
    }
    // Finding Max.
    let max_number = 0;
    first_number = (+first_number);
    second_number = (+second_number);

    if (first_number > second_number) {
        max_number = first_number;
    } else {
        max_number = second_number;
    }

    // Setting result to html tag.
    result.innerText = "Max Value :" + " " + max_number;
}

/* *****************************
        Reserving string
   ***************************** */

function reverse_string() {
    
    // Getting input from html.
    let input_string = document.getElementById("input-string").value.trim();

    // Getting html element.
    let result = document.getElementById("reversed-string-section");
    let error_message = document.getElementById("error-reverse-string");

    // Setting output tags empty
    result.innerText = "";
    error_message.innerText = "";

    // Empty input validation
    if (input_string === '') {
        error_message.innerText = "Enter valid input";
        return;
    }

    // Input length validation
    if (input_string.length > 15) {
        error_message.innerText = "String must be less than 15 characters";
        return;
    }

    // Reversing string
    let reversed_string = "";
    for (let i = 0; i < input_string.length; i++) {
        reversed_string = input_string[i] + reversed_string;
    }

    // Setting result to html tag.
    result.innerText = "Reversed string :" + " " + reversed_string;
}

/* ********************
    Finding largest word 
   ********************* */
function find_largest_word() {

    // Getting input from html.
    let input_string = document.getElementById("user-string").value.trim();

     // Getting html element.
    let error_message = document.getElementById("error-largest-word");
     let result = document.getElementById("largest-word-section");

    // Setting output tags empty
    error_message.innerText = "";
    result.innerText = "";

    // Empty input validation
    if (input_string === '') {
        error_message.innerText = "Enter valid input";
        return;
    } 

    // Word length validation.
    let string_array = input_string.split(",");
    for (let word of string_array) {
        if (word.length > 10) {
            error_message.innerText = "Word must be less than 10 characters";
            return;
        } else {
            error_message.innerText = "";
        }
    }

    // Finding largest word
    let largest_word = "";
    let max_word_length = 0;

    for (let i = 0; i < string_array.length; i++) {
        let word_length = string_array[i].length;
        if (word_length > max_word_length) {
            largest_word = string_array[i];
            max_word_length = word_length;
        }
    }

     // Setting result to html tag.
    result.innerText = "Largest word is :" + " " + largest_word;
}

/* ********************
    creating cookie
   ********************* */
function resume_builder() {

    // Getting input from html.
    let username = document.getElementById("username").value.trim();
    let phone_number = document.getElementById("phone-number").value;

    // Getting html element.
    let error_message = document.getElementById("error-resume");
    let result = document.getElementById("output-resume-builder");

    // Setting output tags empty
    result.innerText = "";
    error_message.innerText = "";
    
    // Input empty validation
    let phone_number_length = phone_number.length;

    if (username === '') {
        error_message.innerText = "Enter valid input";
        return;
    }

    // String validation
    if (!isNaN(username)) {
        error_message.innerText = "Enter a String";
        return;
    }

    // Input length validation
    if (username.length > 20) {
        error_message.innerText = "String must be less than 20 characters";
        return;
    }

    if (phone_number_length > 10 || phone_number_length < 10) {
        error_message.innerText = "Number must be 10 digits";
        return;
    }

    // creating cookie
    const user_object = {
        name: username,
        phonenumber: phone_number
    };

    document.cookie = "user=" + encodeURIComponent(JSON.stringify(user_object)) + "; path=/";

    result.innerText = "Resume created";
}

// Function to get a specific cookie by name
function get_cookie(name) {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        let [key, value] = cookie.split("=");
        if (key === name) {
            return decodeURIComponent(value);
        }
    }
    return null;
}

// Setting name and phone number to the resume.
window.onload = function () {
    let user_cookie = get_cookie("user");
    let user = null;

    if (user_cookie) {
        try {
            user = JSON.parse(user_cookie);
        } catch (e) {
            console.error("Invalid user cookie:", e);
        }
    }

    if (user) {
        let header_title = document.getElementById("header-title");
        let phone_number = document.getElementById("phonenumber");
        console.log(phone_number);
        if (user.name) {
            header_title.innerText = user.name;
        }
        console.log(user.phonenumber);
        if (user.phonenumber) {
            phone_number.innerText = "Phone : +91 " + user.phonenumber;
        }
    }
};
