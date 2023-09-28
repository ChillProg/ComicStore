const coloredImage = document.getElementById("colored");
const container = document.querySelector(".comic-container");

container.addEventListener("mousemove", (e) => {
  const rect = container.getBoundingClientRect();
  const mouseX = e.clientX - rect.left - 250;
  const mouseY = e.clientY - rect.top - 250;

  coloredImage.style.setProperty("--zoom-x", mouseX + "px");
  coloredImage.style.setProperty("--zoom-y", mouseY + "px");
});

container.addEventListener("mouseenter", () => {
  coloredImage.style.opacity = "1";
});

container.addEventListener("mouseleave", () => {
  coloredImage.style.opacity = "0";
});
