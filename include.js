// Simple include loader for header & footer
async function loadInclude(id, file) {
  const container = document.getElementById(id);
  if (container) {
    try {
      const response = await fetch(file);
      const html = await response.text();
      container.innerHTML = html;

      // highlight active nav link
      const links = container.querySelectorAll("nav a");
      links.forEach(link => {
        if (link.href === window.location.href) {
          link.classList.add("active");
        }
      });
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadInclude("site-header", "header.html");
  loadInclude("site-footer", "footer.html");
});
