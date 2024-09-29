const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;

  // Update the position of the cursor dot
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // Animate the cursor outline
  cursorOutline.animate([{ left: `${posX}px`, top: `${posY}px` }], {
    duration: 500,
    fill: "forwards",
  });
});
