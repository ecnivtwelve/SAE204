interact(".sticker-container").draggable({
  inertia: true,
  listeners: {
    start(event) {
      console.log(event.type, event.target);
    },
    move(event) {
      console.log(event.type, event.target);
      const target = event.target;
      const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
    },
    end(event) {
      console.log(event.type, event.target);
    },
  },
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: {
        x: 100,
        y: 100,
        width: window.innerWidth - 200,
        height: window.innerHeight - 100,
      },
      endOnly: true,
    }),
  ],
});

new Gradient({
  canvas: "#gradient-container",
  colors: ["#0066FF", "#00A8FF", "#0066FF", "#0033FF"],
});

/*
animate(
  document.querySelector(".hero .hero-title"),
  {
    fontWeight: [0, 700],
  },
  {
    duration: 0.5,
    ease: [0.44, -0.2, 0, 1.57],
  }
);
*/

inView(".hero-content", (element) => {
  animate(
    ".hero-content > *",
    {
      translateY: ["100%", "0%"],
      scale: [0.9, 1],
      opacity: [0, 1],
    },
    {
      delay: stagger(0.14),
    }
  );

  animate(
    ".sticker-container",
    {
      translateY: ["100%", "0%"],
      scale: [0.2, 1],
      opacity: [0, 1],
    },
    {
      delay: stagger(0.1),
      type: "spring",
      bounce: 0.55,
    }
  );

  return (leaveInfo) => {
    const elements = document.querySelectorAll(".hero-content > *");
    elements.forEach((element) => {
      animate(element, {
        opacity: 0,
      });
    });
  };
});

function pauseGradient() {
  if (!document.querySelector(".hero").classList.contains("paused")) {
    document.querySelector(".hero").classList.add("paused");
  } else {
    document.querySelector(".hero").classList.remove("paused");
  }
}
