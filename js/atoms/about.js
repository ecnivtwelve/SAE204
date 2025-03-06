const aboutTexts = document.querySelectorAll(".about-text");

scroll((progress, info) => {
  const scrolled = info.y.current;

  const index = Math.floor((scrolled + 100 - windowHeight) / 500);

  aboutTexts.forEach((text) => {
    text.classList.remove("enabled");
  });
  if (aboutTexts[index]) {
    aboutTexts[index].classList.add("enabled");
  }
});

const origins = [
  {
    x: ["-100px", "70px"],
    y: ["-700px", "-110px"],
    rotate: ["-10deg", "2deg"],
    scale: [0.8, 1],
  },
  {
    x: ["800px", "0px"],
    y: ["300px", "-10px"],
    rotate: ["10deg", "-1deg"],
    scale: [1.05, 1],
  },
  {
    x: ["800px", "110px"],
    y: ["300px", "110px"],
    rotate: ["10deg", "5deg"],
    scale: [0.7, 1],
  },
];

document.querySelectorAll(".about-postcard").forEach((item, index) => {
  const diff = -0.3 + 0.3 * index;

  scroll(animate(item, origins[index]), {
    target: document.querySelector(".about"),
    offset: [0 + diff, 0.3 + diff],
  });
});
