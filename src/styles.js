const width = window.innerWidth;
const isMobile = width <= 736;

export const innerContainer = {
  width: !isMobile && 1024,
  paddingBottom: 88,
  alignItems: 'flex-start',
};
