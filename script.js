"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  function closeMenu() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    nav.classList.remove("is-open");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Open navigation menu" : "Close navigation menu");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    document.addEventListener("click", event => { if (!nav.contains(event.target) && !toggle.contains(event.target)) closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 960) closeMenu(); });
  }
  const year = document.querySelector("#copyright-year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#enquiry-form");
  const feedback = document.querySelector("#form-feedback");
  const whatsappNumber = "923456842045";
  if (form) form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const parentName = String(data.get("parentName") || "").trim();
    const contactNumber = String(data.get("contactNumber") || "").trim();
    const digits = contactNumber.replace(/[\s()+.-]/g, "");
    if (!/^\d{7,15}$/.test(digits)) {
      const input = form.elements.contactNumber;
      input.setCustomValidity("Enter a valid phone number with 7 to 15 digits.");
      input.reportValidity();
      if (feedback) feedback.textContent = "Please enter a valid contact number (7–15 digits).";
      input.addEventListener("input", () => input.setCustomValidity(""), { once: true });
      return;
    }
    const lines = [
      "Admissions Enquiry — The Chenab Galaxy School System", "",
      `Parent / Guardian: ${parentName}`,
      `Contact Number: ${contactNumber}`,
      `Student Name: ${String(data.get("studentName") || "").trim() || "Not provided"}`,
      `Desired Branch: ${String(data.get("branch") || "").trim()}`,
      `Class / Grade: ${String(data.get("grade") || "").trim() || "Not provided"}`,
      `Message: ${String(data.get("message") || "").trim() || "No additional message"}`
    ];
    if (feedback) feedback.textContent = "WhatsApp will open with your enquiry details. Review the message and press Send to submit it to the school.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
  });
  document.querySelectorAll(".gallery-large").forEach(item => item.addEventListener("click", () => {
    const image = item.querySelector("img");
    if (image && image.complete && image.naturalWidth > 0) window.open(image.src, "_blank", "noopener,noreferrer");
  }));
});
