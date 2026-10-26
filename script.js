document.addEventListener("DOMContentLoaded", () => {
  // Keep the copyright year current.
  document.querySelectorAll(".year").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  // Mobile navigation menu.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".nav-links");
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // This demo validates form entries and displays a clear notice.
  // It does not transmit, email, or save the message.
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.className = "form-status";
      if (!form.reportValidity()) {
        status.textContent = "Please check the fields and try again.";
        status.classList.add("error");
        return;
      }
      status.textContent = "Your form entries passed validation. This demo has not sent your message. Connect a form service to receive messages by email.";
      status.classList.add("success");
    });
  }
});
