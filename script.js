window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  function onScroll() {
    if (window.scrollY > 8) {
      header.classList.add(
        "backdrop-blur",
        "supports-[backdrop-filter]:bg-neutral-900/70",
        "border-b",
        "border-white/10",
      );
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove(
        "backdrop-blur",
        "supports-[backdrop-filter]:bg-neutral-900/70",
        "border-b",
        "border-white/10",
      );
      header.classList.add("bg-transparent");
    }
  }
  window.addEventListener("scroll", onScroll);
  onScroll();
  if (window.lucide) {
    window.lucide.createIcons();
  }
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
