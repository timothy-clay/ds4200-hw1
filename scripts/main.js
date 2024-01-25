function changeColor() {
    // Gets new color from on-screen text box
    var colorInput = document.getElementById('colorInput').value;

    // Gets all elements whose colors will be changed
    var h1Elements = document.getElementsByTagName("h1");
    var headers = document.getElementsByClassName('grid-header');
    var texts = document.getElementsByClassName('grid-text');

    // Changes all the colors
    for(var i = 0; i < h1Elements.length; i++) {
        h1Elements[i].style.color = colorInput;
    }

    for(var j = 0; j < headers.length; j++) {
        headers[j].style.color = colorInput;
    }

    for(var k = 0; k < texts.length; k++) {
        texts[k].style.borderColor = colorInput;
    }
}

// Asks the user for their name (i.e. log-in)
var userName = prompt("Please enter your name:");

// Display a welcome message to the user
if (userName) {
    alert("Welcome, " + userName + "!");
}

// Send user name to HTML to display
document.getElementById('userNameDisplay').textContent = userName;

function relogin() {
    // Asks the user to log in with a new name
    var newUserName = prompt("Please enter your new name:");

    // Display a welcome message to the user
    if (newUserName) {
        alert("Welcome, " + newUserName + "!");
        userName = newUserName;
        document.getElementById('userNameDisplay').textContent = userName;
    }
}