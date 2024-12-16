function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

function toggleAboutMe() {
const aboutMeElement = document.getElementById("about-me");

if (aboutMeElement.style.display === "none") {
    aboutMeElement.style.display = "block";
} else {
    aboutMeElement.style.display = "none";
}
}  