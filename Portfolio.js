const typingText = document.getElementById("typingText");

const roles = [
    "Software Solutions.",
    "Web Applications.",
    "Machine Learning Projects.",
    "Creative Experiences."
];

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent = currentRole.substring(
        0,
        characterIndex
    );

    let typingSpeed = isDeleting ? 45 : 90;

    if (!isDeleting && characterIndex === currentRole.length) {

        typingSpeed = 1500;
        isDeleting = true;

    } else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        typingSpeed = 400;

    }

    setTimeout(typeEffect, typingSpeed);

}

typeEffect();


/* 2. Mobile Navigation */

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

const navLinkItems = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen = navLinks.classList.contains("show");

    menuToggle.innerHTML = isOpen
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});


/* Close Menu After Clicking Navigation */

navLinkItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


/* 3. Active Navigation Link */

const sections = document.querySelectorAll("section[id]");

function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinkItems.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* 4. Light / Dark Theme Toggle */

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    const isLightTheme =
        document.body.classList.contains("light-theme");

    if (isLightTheme) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    }

});


/* 5. Animated Skill Bars */

const skillCards = document.querySelectorAll(".skill-card");

const skillObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const progressBars =
                    entry.target.querySelectorAll(".progress-bar");

                progressBars.forEach(function (bar) {

                    const targetWidth =
                        bar.getAttribute("data-width");

                    bar.style.width = targetWidth;

                });

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.3
    }

);


skillCards.forEach(function (card) {

    skillObserver.observe(card);

});


/* 6. Back To Top Button */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* 7. Current Year */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* 8. Reveal Animations */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .stat-card, " +
    ".project-card, .timeline-item, .certificate-item, " +
    ".contact-box"
);

const revealObserver = new IntersectionObserver(

    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});