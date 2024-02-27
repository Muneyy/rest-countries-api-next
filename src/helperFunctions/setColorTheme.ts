export default function setColorTheme(window: Window) {
  if (localStorage.getItem('theme') === null) {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const hasNoPreference = !prefersLight && !prefersDark;
    if (prefersLight || hasNoPreference) {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    if (prefersDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  } else {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('theme')!);
  }
}
