document.addEventListener("DOMContentLoaded", function() {
    let currentSectionIndex = 0;
    const sections = document.querySelectorAll("section");

    function showSection(index) {
        sections.forEach((section, i) => {
            if (i === index) {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    }

    function handleKeyPress(event) {
        if (event.key === "ArrowUp") {
            currentSectionIndex = Math.max(0, currentSectionIndex - 1);
        } else if (event.key === "ArrowDown") {
            currentSectionIndex = Math.min(sections.length - 1, currentSectionIndex + 1);
        }

        showSection(currentSectionIndex);
    }

    document.addEventListener("keydown", handleKeyPress);

    showSection(currentSectionIndex);
});
