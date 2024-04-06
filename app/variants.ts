
export const topPatty = {
  closed: {
    opacity: 1,
  },
  open: {
    y: 5,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const centerPatty = {
  closed: {
    opacity: 1,
  },
  open: {
    y: 10,
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

export const bottomPatty = {
  closed: {
    opacity: 1,
  },
  open: {
    opacity: 0,
    transition: {
      delay: 0.4,
      duration: 0.2,
    },
  },
};

export const menuVariants = {
  closed: {
    x: '100vw',
  },
  open: {
    x: 0,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
};

export const linkVariants = {
  closed: {
    y: -10,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};