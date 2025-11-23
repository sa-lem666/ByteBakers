// ========== Smooth Scroll for Internal Links ==========
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId.length > 1) {
            e.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ========== Highlight Active Navigation Link ==========
const navLinks = document.querySelectorAll("nav ul li a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active-link");
    }
});


// ========== Mobile Menu Toggle (Optional) ==========
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav ul");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}


// ========== Accessibility: Skip Link Focus Fix ==========
const skipLink = document.querySelector(".skip-link");

if (skipLink) {
    skipLink.addEventListener("click", () => {
        const main = document.querySelector("#main-content");
        main.setAttribute("tabindex", "-1");
        main.focus();
    });
}
