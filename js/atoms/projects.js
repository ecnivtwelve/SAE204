scroll(
  animate(document.querySelector(".projects-timeline"), {
    transform: [
      "translateX(calc(-50vw + 71.6%))",
      "translateX(calc(-50vw - 12.5%))",
    ],
  }),
  {
    target: document.querySelector(".projects"),
    offset: [0, 1],
  }
);

document
  .querySelectorAll(".projects-timeline > .project-example")
  .forEach((item, index) => {
    const i = index * 0.3 - 0.25;

    scroll(
      animate(item, {
        opacity: [0.3, 1, 1, 0.3],
        transform: [
          "translateY(50px)",
          "translateY(0px)",
          "translateY(0px)",
          "translateY(50px)",
        ],
        filter: ["blur(5px)", "blur(0px)", "blur(0px)", "blur(5px)"],
      }),
      {
        target: document.querySelector(".projects"),
        offset: [0 + i, 0.2 + i, 0.4 + i, 0.6 + i],
      }
    );
  });
