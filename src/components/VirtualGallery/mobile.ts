const details = typeof navigator !== 'undefined' ? navigator.userAgent : '';
const regexp = /android|iphone|kindle|ipad/i;

export const getIsMobile = () => regexp.test(details);
