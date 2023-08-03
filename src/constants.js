export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  offblack: 'hsl(233deg 54% 16%)',
  lightGray: 'hsl(232deg 10% 56%)',
  hotPink: 'hsl(341deg 92% 62%)',
  mainBackground: {
    'gradientstart': '#FFF',
    'gradientend': '#F0F1FF',
  },
  button: {
    1: {
      'idle': 'hsl(233deg 54% 16%)',
      'hover': 'hsl(234deg 25% 52%)',
    },
    2: {
      'gradientstart': 'hsl(13deg 100% 64%)',
      'gradientend': 'hsl(322deg 87% 55%)',
      'gradientWhiteWash': 'rgba(255, 255, 255, 0.50)',
    },
    3: {
      'gradientstart': 'hsl(237deg 100% 64%)',
      'gradientend': 'hsl(322deg 87% 55%)',
      'gradientWhiteWash': 'rgba(255, 255, 255, 0.50)',
    }
  },
};


export const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
  tabletOnly: `
      (min-width: ${BREAKPOINTS.tabletMin / 16}rem) and
      (max-width: ${(BREAKPOINTS.laptopMin - 1) / 16}rem)`,
};

export const FAMILIES = {
  sansSerif:
    '"Helvetica Neue", Helvetica, "Franklin Gothic Medium", "Franklin Gothic", "ITC Franklin Gothic", sans-serif',
};
