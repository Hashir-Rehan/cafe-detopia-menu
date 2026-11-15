// Show or hide the navigation menu on smaller screens
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("show");

    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", !isExpanded);
});


// Contact form demo: show a confirmation without sending data to a server.
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formStatus.textContent = "Thank you! Your message has been prepared. This demo form does not send messages yet.";
        contactForm.reset();
    });
}
