
// s1
const contextMenu = document.getElementById("context-menu");
const scope = document.querySelector("body");

scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;

  contextMenu.classList.add("visible");
});
// s2
scope.addEventListener("click", (e) => {
    if (e.target.offsetParent != contextMenu) {
      contextMenu.classList.remove("visible");
    }
});



//s3
scope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { clientX: mouseX, clientY: mouseY } = event;

  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;

  contextMenu.classList.remove("visible");

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});



//s4
const normalizePozition = (mouseX, mouseY) => {
  // ? compute what is the mouse position relative to the container element (scope)
  const {
    left: scopeOffsetX,
    top: scopeOffsetY,
  } = scope.getBoundingClientRect();

  const scopeX = mouseX - scopeOffsetX;
  const scopeY = mouseY - scopeOffsetY;

  // ? check if the element will go out of bounds
  const outOfBoundsOnX =
    scopeX + contextMenu.clientWidth > scope.clientWidth;

  const outOfBoundsOnY =
    scopeY + contextMenu.clientHeight > scope.clientHeight;

  let normalizedX = mouseX;
  let normalizedY = mouseY;

  // ? normalzie on X
  if (outOfBoundsOnX) {
    normalizedX =
      scopeOffsetX + scope.clientWidth - contextMenu.clientWidth;
  }

  // ? normalize on Y
  if (outOfBoundsOnY) {
    normalizedY =
      scopeOffsetY + scope.clientHeight - contextMenu.clientHeight;
  }

  return { normalizedX, normalizedY };
};
//s5
cope.addEventListener("contextmenu", (event) => {
  event.preventDefault();

  const { offsetX: mouseX, offsetY: mouseY } = event;

  const { normalizedX, normalizedY } = normalizePozition(mouseX, mouseY);

  contextMenu.style.top = `${normalizedY}px`;
  contextMenu.style.left = `${normalizedX}px`;

  contextMenu.classList.remove("visible");

  setTimeout(() => {
    contextMenu.classList.add("visible");
  });
});