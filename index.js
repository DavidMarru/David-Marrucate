document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");
    const sections = document.querySelectorAll("section");
  
    function scrollToTarget(targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      }
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
          scrollToTarget(sections[currentSectionIndex - 1].id);
        } else if (e.key === "ArrowDown" && currentSectionIndex < sections.length - 1) {
          scrollToTarget(sections[currentSectionIndex + 1].id);
        }
      }
    });
  });
  