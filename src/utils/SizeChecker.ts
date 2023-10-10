export function getScreenSize() {
  const width = window.innerWidth;

  if (width < 1024) {
    return "mobile-screen";
  } else {
    return "desktop-screen";
  }
}
