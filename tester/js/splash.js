window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const app = document.getElementById("app");

  setTimeout(() => {
    splash.style.opacity = "0";
    splash.style.transition = "opacity 0.5s ease";

    setTimeout(() => {
      splash.style.display = "none";
      app.style.display = "flex";
    }, 500);

  }, 1500);
});
