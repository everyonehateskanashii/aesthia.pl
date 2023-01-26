// I mean if you know you know
var i = 0;

// Text to be shown in about me
var txt =
  "My name is Hubert, more known as cigognepolonais. I am a 17-year-old programmer who is passionate about technology and coding. I have always been fascinated by the power of technology to change the world and I have been programming since I was 13. I have a strong desire to make a positive impact on the world through my work, and I believe that technology has the power to do just that. In 2021, I created Aesthia, my first project was on the FiveM platform for the modification of the game GTA V. I work hard to follow my dreams and improve my skills. I have experience in front-end development, as well as proficiency in C# and Lua. I enjoy taking on challenging projects and always strive to learn something new. In my free time, I like to explore new technologies and experiment with different programming languages. playing video games, reading books, and spending time with my friends and family. I also like to stay active and engage in physical activities such as going to the gym. I believe in giving back to the community and with my first money from programming, I plan to make a donation and I will provide proof of it. I believe that hard work, dedication and perseverance are key to achieving success in any field, and I am committed to putting in the time and effort to achieve my goals."; /* The text */

// Speed in miliseconds
var speed = 10;

// Check if typewriter is done
var ended = false;

// Error message to be sent
var txtError = "";

// Define regular expression for email validation
var emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Get the text input
var textInput = document.getElementById("email");

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("about-me-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);

    if (document.getElementById("about-me-text").innerHTML == txt) {
        ended = true
        /* $("more-about-me-text").hide();
        $("#more-about-me-text").text("PSSS! i also like smoke some trees but be quiet!")
        setTimeout(() => {
            $("more-about-me-text").fadeIn(1000);
        }, 1000); */ 
    };
  }
}

function writeAboutMe() {
  $(".write-about-me").addClass("animate");
  let aboutMeText = document.getElementById("about-me-text").innerHTML;
  if (!aboutMeText) {
    $(".write-about-me").addClass("animation");
    $(".write-about-me").fadeOut(500);
    setTimeout(() => {
      typeWriter();
    }, 500);
  }
}

// Add an event listener for the "input" event
textInput.addEventListener("input", function () {
  // Get the value of the text input
  var text = textInput.value;

  // Convert text to lowercase
  text = text.toLowerCase();

  // Check for email validation
  if (emailRegex.test(text)) {
    showInputError("");
  } else {
    showInputError("The email is not valid...");
  }
});

function showInputError(msg) {
  if (!msg) {
    console.log("CGN [INFO] > ARGUMENT [msg] is null...");
  }
  txtError = msg;
  $("#error").text(txtError);
}


function OpenInNewTabWinBrowser(url) {
  var win = window.open(url, '_blank');
  win.focus();
}