const width = window.innerWidth;
const isMobile = width <= 1024;

export const innerContainer = {
  width: isMobile ? 'auto' : 1024,
  paddingBottom: 88,
  alignItems: 'flex-start',
};
