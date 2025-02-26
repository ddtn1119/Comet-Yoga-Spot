function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            if (!this.getAttribute("href").startsWith("#")) { // avoid scrolling links
                event.preventDefault(); // prevent immediate navigation
                let href = this.getAttribute("href");

                document.body.classList.add("page-exit"); // add slide-out effect
                
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // wait for the animation before navigating
            }
        });
    });
});

// handle form submissions (review, blog, events, contact)
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // Debugging: Ensure JS is loading

    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (!contactForm || !successMessage) {
        console.error("Form or success message not found!");
        return; // Stop if elements are missing
    }

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page refresh
        console.log("Form submitted!"); // Debugging: Ensure event is triggered
        // ✅ Show success message
        successMessage.classList.remove("hidden");
        successMessage.style.display = "block"; // Make sure it shows
        // ✅ Clear form fields
        contactForm.reset();
        // ✅ Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.classList.add("hidden");
            successMessage.style.display = "none";
        }, 5000);
    });
});