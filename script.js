function toggleMenu() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("visible");
}
document.querySelectorAll('#nav-menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
function filterProjects(category) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "";
    } else {
      project.style.display = "none";
    }
  });
}
document.querySelectorAll(".project img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", function () {
    let lightbox = document.getElementById("lightbox-modal");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.id = "lightbox-modal";
      lightbox.style.position = "fixed";
      lightbox.style.top = "0";
      lightbox.style.left = "0";
      lightbox.style.width = "100vw";
      lightbox.style.height = "100vh";
      lightbox.style.background = "rgba(0,0,0,0.8)";
      lightbox.style.display = "flex";
      lightbox.style.alignItems = "center";
      lightbox.style.justifyContent = "center";
      lightbox.style.zIndex = "1000";
      lightbox.innerHTML = `
                <img src="" alt="Project Image" style="max-width:90vw;max-height:90vh;box-shadow:0 0 20px #000;border-radius:8px;">
                <span style="position:absolute;top:30px;right:40px;font-size:2.5rem;color:#fff;cursor:pointer;font-family:sans-serif;">&times;</span>
            `;
      document.body.appendChild(lightbox);
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target.tagName === "SPAN") {
          lightbox.style.display = "none";
        }
      });
    }
    lightbox.querySelector("img").src = this.src;
    lightbox.style.display = "flex";
  });
});
document.getElementById("hamburger-icon").addEventListener("click", toggleMenu);
