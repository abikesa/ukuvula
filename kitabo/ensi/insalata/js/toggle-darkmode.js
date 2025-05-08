document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const logo = document.getElementById('logo');
  const lightRadio = document.getElementById('light-mode');
  const darkRadio = document.getElementById('dark-mode');
  const toggleBtn = document.getElementById('toggle-theme');

  const LIGHT_LOGO = 'images/ukubona-light-fixed.png';
  const DARK_LOGO = 'images/ukubona-dark-fixed.png';

  // Helper to set theme
  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (logo) logo.src = theme === 'dark' ? DARK_LOGO : LIGHT_LOGO;
    if (toggleBtn) {
      toggleBtn.textContent = theme === 'dark' ? '🌙' : '🌞';
    }
  }

  // Initialize theme from localStorage
  const storedTheme = localStorage.getItem('theme') || 'light';
  setTheme(storedTheme);
  if (lightRadio && darkRadio) {
    (storedTheme === 'dark' ? darkRadio : lightRadio).checked = true;
  }

  // Hook up radio buttons
  if (lightRadio) {
    lightRadio.addEventListener('change', () => {
      if (lightRadio.checked) setTheme('light');
    });
  }

  if (darkRadio) {
    darkRadio.addEventListener('change', () => {
      if (darkRadio.checked) setTheme('dark');
    });
  }

  // Hook up toggle button (landing page)
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
});
