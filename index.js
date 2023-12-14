document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section");

    function scrollToTarget(targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Add fade-out class to current section
            const currentSection = document.querySelector("section:not(.fade-out)");
            if (currentSection && currentSection.id !== targetId) {
                addFadeOutClass(currentSection);
            }

            // Remove fade-out class and add fade-in class to target section
            targetElement.classList.remove("fade-out");
            targetElement.classList.add("fade-in");

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "start",
            });
        }
    }

    function addFadeOutClass(section) {
        section.classList.add("fade-out");
        setTimeout(() => {
            section.classList.remove("fade-out");
        }, 1000); // Adjust the timeout duration as needed
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            scrollToTarget(targetId);
        });
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault();

            const currentSectionIndex = Array.from(sections).findIndex(
                (section) => section.getBoundingClientRect().top >= 0
            );

            if (e.key === "ArrowUp" && currentSectionIndex > 0) {
                const targetId = sections[currentSectionIndex - 1].id;
                addFadeOutClass(sections[currentSectionIndex]);
                scrollToTarget(targetId);
            } else if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
                const targetId = sections[currentSectionIndex + 1].id;
                addFadeOutClass(sections[currentSectionIndex]);
                scrollToTarget(targetId);
            }
        }
    });
});
