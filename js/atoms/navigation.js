window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    document.body.classList.add("scroll");
  } else {
    document.body.classList.remove("scroll");
  }
});
