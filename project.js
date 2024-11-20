// script.js

// Function to change text content of an element when the button is clicked
function changeText() {
    document.getElementById("welcomeText").innerHTML = "Thanks for visiting the best website ever!";
}

// Example of a simple alert when the page loads
window.onload = function() {
    alert("Welcome to the best website ever!");
}

// Function to log to the console when user clicks a link
function logClick(event) {
    console.log("You clicked on: " + event.target.innerText);
}

// Adding event listeners to the navigation links
document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("a");
    links.forEach(function(link) {
        link.addEventListener("click", logClick);
    });
});
