
// ${theme.spacing...}
export const spacing = {
  xxxs: '0.8rem',
  xxs: '1.6rem',
  xs: '2.4rem',
  s: '3.2rem',
  m: '4rem',
  l: '6.4rem',
  xl: '8rem',
  xxl: '12rem',
  xxxl: '14.4rem',
};

// @media (min-width: ${theme.breakpoints.px.mobile}) and (max-width: ${theme.breakpoints.px.tablet}) { ... }
export const breakpoints = {
  px: {
    mobile: 480,
    tablet: 768,
    laptop: 992,
    desktop: 1024,
    largeDesktop: 1440,
  },
};

// @media ${theme.mq.min/max[#] { ... }
export const mq = {
  min: {
    mobile: `only screen and (min-width: ${breakpoints.px.mobile}px)`,
    tablet: `only screen and (min-width: ${breakpoints.px.tablet}px)`,
    laptop: `only screen and (min-width: ${breakpoints.px.laptop}px)`,
    desktop: `only screen and (min-width: ${breakpoints.px.desktop}px)`,
    largeDesktop: `only screen and (min-width: ${breakpoints.px.largeDesktop}px)`,
  },
  max: {
    mobile: `only screen and (max-width: ${breakpoints.px.mobile}px)`,
    tablet: `only screen and (max-width: ${breakpoints.px.tablet}px)`,
    laptop: `only screen and (max-width: ${breakpoints.px.laptop}px)`,
    desktop: `only screen and (max-width: ${breakpoints.px.desktop}px)`,
    largeDesktop: `only screen and (max-width: ${breakpoints.px.largeDesktop}px)`,
  },
};

