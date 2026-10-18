const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

// Replace this placeholder with the school's real public email before launch.
const SCHOOL_EMAIL = "chenabgalaxy@gmail.com";

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (SCHOOL_EMAIL === "replace-with-school-email@example.com") {
      alert("Please add the school's real email address in script.js before using the enquiry form.");
      return;
    }

    const formData = new FormData(contactForm);
    const subject = encodeURIComponent(`School enquiry: ${formData.get("topic")}`);
    const body = encodeURIComponent(
      `Parent / Guardian: ${formData.get("fullName")}\n` +
      `Email: ${formData.get("email")}\n` +
      `Enquiry type: ${formData.get("topic")}\n\n` +
      `Message:\n${formData.get("message")}`
    );

    window.location.href = `mailto:${SCHOOL_EMAIL}?subject=${subject}&body=${body}`;
  });
}
