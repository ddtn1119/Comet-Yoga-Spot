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

// handle form submissions (review, blog, events, contact); display success message
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript loaded!"); // debugging: Ensure JS is loading
    // get elements of all forms
    const forms = [
        { form: document.getElementById("testimonial-form"), message: document.getElementById("review-success") },
        { form: document.getElementById("blog-form"), message: document.getElementById("blog-success") },
        { form: document.getElementById("event-form"), message: document.getElementById("event-success") },
        { form: document.getElementById("contact-form"), message: document.getElementById("contact-success") },
    ];
    forms.forEach(({ form, message }) => {
        if (!form || !message) {
            console.error(`Form or success message not found for ${form?.id}`);
            return; // stop if elements are missing
        }
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh
            console.log(`${form.id} submitted!`); // debugging: Ensure event is triggered
            // ✅ show success message
            message.classList.remove("hidden");
            message.style.display = "block"; // make sure it shows
            // ✅ clear form fields
            form.reset();
            // ✅ hide success message after 5 seconds
            setTimeout(() => {
                message.classList.add("hidden");
                message.style.display = "none";
            }, 5000);
        });
    });
});

// handle dark mode
document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;
    modeToggle.addEventListener("click", function () {
        console.log("Dark mode button clicked!"); // debugging
    });
    // update the text in button
    function updateModeText() {
        modeToggle.textContent = body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
    // check for stored preference
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        updateModeText();
    }
    // change between dark mode and light mode if user clicks on the button
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
        updateModeText();
    });
});