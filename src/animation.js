export const homepageAnim = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: 0,

    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    y: 50,
    transition: {
      duration: 1,
    },
  },
};

export const fadeAnim = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 0.75 } },
};

export const imgAnim = {
  hidden: {
    bottom: "-120%",
    opacity: 0,
  },
  show: {
    bottom: "-20%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: "easeOut",
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
    scale: 50,

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
};
