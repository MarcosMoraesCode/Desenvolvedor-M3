export function getScreenSize() {
  const width = window.innerWidth;

  if (width < 720) {
    return "mobile-screen";
  } else if (width >= 720 && width < 1023) {
    return "tablet-screen";
  } else if (width >= 1024 && width < 1779) {
    return "desktop-screen";
  } else if (width >= 1780 && width < 2560) {
    return "ultrawide-screen";
  }
}
