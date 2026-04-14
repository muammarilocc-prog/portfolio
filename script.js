document.addEventListener("DOMContentLoaded", () => {

  /* ================= MENU ================= */
  const nav = document.getElementById("navMenu");
  const menuBtn = document.querySelector(".menu-toggle");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  /* ================= LANDING PAGE ================= */
  const landing = document.getElementById("landingPage");
  const main = document.getElementById("mainContent");
  const btnMasuk = document.getElementById("btnMasuk");

  if (landing && main) {
    main.style.display = "none";
    landing.style.display = "flex";

    btnMasuk?.addEventListener("click", (e) => {
      e.preventDefault();

      landing.style.opacity = "0";

      setTimeout(() => {
        landing.style.display = "none";
        main.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300);
    });
  }

  /* ================= THEME ================= */
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  const icon = document.querySelector("#themeToggle .icon");

  let theme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", theme);

  if (icon) {
    icon.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  themeBtn?.addEventListener("click", () => {

    theme = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (icon) {
      icon.style.transform = "rotate(180deg)";
      setTimeout(() => {
        icon.style.transform = "rotate(0deg)";
      }, 200);

      icon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  });

});

/* ================= KELUAR LANDING ================= */
function kembaliLanding() {
  const landing = document.getElementById("landingPage");
  const main = document.getElementById("mainContent");

  if (!landing || !main) return;

  main.style.display = "none";
  landing.style.display = "flex";
  landing.style.opacity = "1";

  window.scrollTo({ top: 0, behavior: "smooth" });
}