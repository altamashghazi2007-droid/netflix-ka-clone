  const buttons = document.querySelectorAll(".bar");
  const filmContainer = document.querySelector(".films");
  const leftButton = buttons[0];
  const rightButton = buttons[1];
  const scrollAmount = 800;

  // Initially hide the left button
  leftButton.classList.add("hidden");

  // Scroll left on left button click
  leftButton.addEventListener("click", () => {
    filmContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Scroll right on right button click
  rightButton.addEventListener("click", () => {
    filmContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Show/hide left button based on scroll position
  filmContainer.addEventListener("scroll", () => {
    if (filmContainer.scrollLeft <= 10) {
      leftButton.classList.add("hidden");
    } else {
      leftButton.classList.remove("hidden");
    }
  });