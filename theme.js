(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');

  if (toggle) {
    const updateToggle = () => {
      const isDark = root.dataset.theme !== 'light';
      toggle.textContent = isDark ? '[ light mode ]' : '[ dark mode ]';
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} mode`);
    };

    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';

      try {
        localStorage.setItem('theme', root.dataset.theme);
      } catch (_) {
        // The selected theme still works for this page view.
      }

      updateToggle();
    });

    updateToggle();
  }

  const year = document.querySelector('[data-current-year]');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
