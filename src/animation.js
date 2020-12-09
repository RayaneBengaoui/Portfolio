//HOMEPAGE ANIMATIONS
export const homepageAnim = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: 0,

    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};
export const aboutpageAnim = {
  hidden: {
    y: "50%",
  },
  show: {
    y: 0,
    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const workpageAnim = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: 0,

    transition: {
      duration: 1,
      // when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 1.5 } },
};

export const hamburgerAnim = {
  hidden: { x: 200, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { ease: "easeOut", duration: 0.75 } },
  exit: {
    rotate: 180,
    transition: {
      duration: 1,
    },
  },
};

export const imgHomePageAnim = {
  hidden: {
    bottom: "-120%",
    opacity: 0,
    scale: 3,
  },
  show: {
    bottom: "-20%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 3,
    transition: {
      duration: 1,
    },
  },
};
export const imgWorkAnim = {
  hidden: {
    bottom: "-100%",
    opacity: 0,
    scale: 3,
  },
  show: {
    bottom: "0%",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 1.1,
    transition: {
      duration: 1,
    },
  },
};
export const imgAboutAnim = {
  hidden: {
    bottom: "20%",
    opacity: 0,
    scale: 1.3,
  },
  show: {
    bottom: "-0%",
    // left: "-0.3%",
    opacity: 1,
    scale: 1.02,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    scale: 1.03,
    transition: {
      duration: 1,
    },
  },
};

export const titleAnim = {
  hidden: { y: 250 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

export const lineAnim = {
  hidden: { width: "0%" },
  show: {
    width: "60%",
    transition: {
      duration: 0.75,
    },
  },
};

export const sunFrontAnim = {
  hidden: { top: "90%", left: "0%", opacity: 0 },
  show: {
    top: "20%",
    left: "50%",
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  exit: {
    scale: 1.5,

    transition: {
      duration: 1,
    },
  },
};
export const sunBackAnim = {
  hidden: { top: "90%", left: "0%", opacity: 0 },
  show: {
    top: "20.5%",
    left: "49.5%",
    opacity: 1,
    transition: {
      duration: 3.9,
    },
  },
  exit: {
    scale: 1.5,

    transition: {
      duration: 1,
    },
  },
};

//WORKPAGE ANIMATIONS
export const moonAnim = {
  hidden: { top: "90%", left: "50%", opacity: 0 },
  show: {
    top: "25%",
    left: "75%",
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
  exit: {
    scale: 1.4,

    transition: {
      duration: 1,
    },
  },
};

export const sliderAnim = {
  hidden: { y: 360 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};

//About Page

export const sunLightFrontAnim = {
  hidden: { top: "70%", right: "0%", opacity: 0 },
  show: {
    top: "25%",
    right: "30%",
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
  exit: {
    scale: 1.5,

    transition: {
      duration: 1,
    },
  },
};
export const sunLightBackAnim = {
  hidden: { top: "70%", right: "0%", opacity: 0 },
  show: {
    top: "25.5%",
    right: "29.5%",
    opacity: 1,
    transition: {
      duration: 2.9,
    },
  },
  exit: {
    scale: 1.5,

    transition: {
      duration: 1,
    },
  },
};
