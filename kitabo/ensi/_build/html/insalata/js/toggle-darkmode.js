document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const light = document.getElementById('light-mode');
  const dark = document.getElementById('dark-mode');
  const logo = document.getElementById('logo');

  const LIGHT_LOGO = '../../the-rug/figures/ukubona-006.jpg';
  const DARK_LOGO = '../../the-rug/figures/ukubona-006-dm.jpg';

  // Apply stored theme and logo
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    html.setAttribute('data-theme', storedTheme);
    (storedTheme === 'dark' ? dark : light).checked = true;
    logo.src = storedTheme === 'dark' ? DARK_LOGO : LIGHT_LOGO;
  } else {
    // Default to light mode
    logo.src = LIGHT_LOGO;
  }

  light.addEventListener('change', () => {
    if (light.checked) {
      html.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      logo.src = LIGHT_LOGO;
    }
  });

  dark.addEventListener('change', () => {
    if (dark.checked) {
      html.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      logo.src = DARK_LOGO;
    }
  });
});
