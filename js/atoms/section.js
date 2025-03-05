inView(
  ".section-cards",
  (element) => {
    // for each child
    const children = element.children;

    for (let i = 0; i < children.length; i++) {
      animate(
        children[i],
        {
          scale: [0.8, 1],
          translateY: ["100px", "0px"],
          opacity: [0, 1],
        },
        {
          delay: i * 0.16,
        }
      );
    }

    return (leaveInfo) => {
      for (let i = 0; i < children.length; i++) {
        animate(children[i], {
          opacity: 0,
        });
      }
    };
  },
  {
    amount: "some",
  }
);

inView(
  ".section-title",
  (element) => {
    animate(
      element,
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        delay: 0.1,
      }
    );

    return (leaveInfo) => {
      animate(element, {
        opacity: 0,
      });
    };
  },
  {
    amount: "all",
  }
);
