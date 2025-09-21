document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  function showSection(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.style.display = "block";
      } else {
        sec.style.display = "none";
      }
    });
  }

  // default: show home only
  showSection("home");
  document.getElementById("about").style.display = "block"; // also show About with Home

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      showSection(targetId);

      // special case: when Home is shown, also show About
      if (targetId === "home") {
        document.getElementById("about").style.display = "block";
      }
    });
  });
});
