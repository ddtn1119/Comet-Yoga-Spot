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